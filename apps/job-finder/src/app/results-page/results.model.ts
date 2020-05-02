export interface IResults {
    recommendedJobs: IJob[];
    skills: string[],
    ratings: IJob[]
}
export interface IJob {
    job: string;
    score: number;
}