export async function fetchContributorsCount(): Promise<number> {
  try {
    let url: string | null =
      "https://api.github.com/repos/nikohoffren/fork-commit-merge/contributors?per_page=100";
    //* Offset for contributor counter
    let contributorsCount = 47;

    while (url) {
      const response: Response = await fetch(url);
      const linkHeader: string | null = response.headers.get("Link");
      const data: any[] = await response.json();
      contributorsCount += data.length;

      const match: RegExpMatchArray | null =
        linkHeader?.match(/<([^>]+)>;\s*rel="next"/) ?? null;

      url = match ? match[1] : null;
    }

    return contributorsCount;
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
    return 0;
  }
}
