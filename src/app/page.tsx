import { fetchGitHubRepos } from "@/lib/github";
import PortfolioApp from "@/components/PortfolioApp";

export default async function Home() {
  const projects = await fetchGitHubRepos();

  return <PortfolioApp projects={projects} />;
}
