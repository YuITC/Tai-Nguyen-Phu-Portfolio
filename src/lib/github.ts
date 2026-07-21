import { GitHubRepo, Project } from "@/types";
import { PROJECT_DEFINITIONS, type ProjectDefinition } from "@/data/projects";

const GITHUB_REPOS_URL =
  "https://api.github.com/users/taingph2502/repos?per_page=100&sort=updated";

function createProject(
  definition: ProjectDefinition,
  repository?: GitHubRepo,
): Project {
  return {
    name: definition.repoName,
    displayName: definition.displayName,
    period: definition.period,
    description: definition.description,
    html_url: repository?.html_url ?? definition.htmlUrl,
    homepage: repository?.homepage ?? null,
    stargazers_count: repository?.stargazers_count ?? 0,
    language: repository?.language ?? definition.fallbackLanguage,
    topics: repository?.topics ?? [],
    techStack: definition.techStack,
    highlights: definition.highlights,
    categories: definition.categories,
    isPinned: definition.isPinned,
  };
}

export async function fetchGitHubRepos(): Promise<Project[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(GITHUB_REPOS_URL, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Failed to fetch GitHub repos:", response.status);
      return PROJECT_DEFINITIONS.map((definition) => createProject(definition));
    }

    const repositories: GitHubRepo[] = await response.json();
    const repositoriesByName = new Map(
      repositories.map((repository) => [repository.name.toLowerCase(), repository]),
    );

    return PROJECT_DEFINITIONS.map((definition) =>
      createProject(
        definition,
        repositoriesByName.get(definition.repoName.toLowerCase()),
      ),
    );
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return PROJECT_DEFINITIONS.map((definition) => createProject(definition));
  }
}
