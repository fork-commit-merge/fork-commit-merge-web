export async function fetchIssueCount(): Promise<number> {
  try {
    let url: string | null =
      'https://api.github.com/repos/nikohoffren/fork-commit-merge/issues?per_page=100';

    const headers = {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    };

    let issueCount = -1;

    while (url) {
      const response: Response = await fetch(url, { headers });
      const linkHeader: string | null = response.headers.get('Link');
      const data: any[] = await response.json();

      issueCount += data.length;
      const match: RegExpMatchArray | null =
        linkHeader?.match(/<([^>]+)>;\s*rel="next"/) ?? null;

      url = match ? match[1] : null;
    }

    return issueCount;
  } catch (error) {
    console.error('Failed to fetch issues:', error);
    return 0;
  }
}

