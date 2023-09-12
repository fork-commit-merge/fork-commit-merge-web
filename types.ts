export interface UserStat {
    username: string;
    prCount: number;
    avatarUrl: string;
}

export interface ClosedPullRequest {
    username: string;
    title: string;
    issue: string;
    repository: string;
}
