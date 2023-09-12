export async function fetchGitHubUsername(email) {
    const url = `https://api.github.com/search/users?q=${email}+in:email`;
    const headers = {
        Authorization: process.env.GITHUB_TOKEN,
    };

    const response = await fetch(url, { headers });
    const data = await response.json();

    return data.items[0]?.login;
}

export async function fetchClosedPullRequests(username) {
    let url = `https://api.github.com/repos/nikohoffren/fork-commit-merge/pulls?state=closed&per_page=100`;
    const headers = {
        Authorization: process.env.GITHUB_TOKEN,
    };

    let allPullRequests = [];

    while (url) {
        const response = await fetch(url, { headers });
        const data = await response.json();
        allPullRequests = allPullRequests.concat(data);

        const linkHeader = response.headers.get("Link");
        const match = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
        url = match ? match[1] : null;
    }

    const filteredPullRequests = allPullRequests.filter(
        (pr) => pr.user.login === username
    );

    return filteredPullRequests.map((pr) => ({
        title: pr.title,
        issue: pr.body,
    }));
}
