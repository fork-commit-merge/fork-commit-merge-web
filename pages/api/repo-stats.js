export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.github.com/repos/fork-commit-merge/fork-commit-merge', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });
    const data = await response.json();
    res.status(200).json({ stargazers_count: data.stargazers_count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repo stats' });
  }
}