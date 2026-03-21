import { GitHubRepo, Project } from "@/types";
import { PINNED_REPOS, CATEGORY_MAP } from "@/data/projects";

export async function fetchGitHubRepos(): Promise<Project[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    "https://api.github.com/users/YuITC/repos?per_page=100&sort=updated",
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos:", res.status);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();

  const filtered = repos.filter((repo) => repo.name !== "yuitc");

  return filtered.map((repo) => ({
    ...repo,
    categories: CATEGORY_MAP[repo.name] || [],
    isPinned: PINNED_REPOS.includes(repo.name),
  }));
}
