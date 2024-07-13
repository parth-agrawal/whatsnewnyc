export type ResponseTypes = {
    jobPostings: JobPosting[]

}

export type JobPosting = {
    id: number,
    title: string,
    description: string,
    company: string,
    location: string,
    sourceWebsite: string,
}