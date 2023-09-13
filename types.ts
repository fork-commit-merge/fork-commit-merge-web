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

export type Testimonial = {
    text: string;
    name: string;
    imageUrl: string;
    url: string;
};
