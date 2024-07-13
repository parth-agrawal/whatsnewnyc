type ResponseTypes = {
    jobPostings: JobPosting[]

}

type JobPosting = {
    id: number,
    title: string,
    description: string,
    company: string,
    location: string,
    sourceWebsite: string,
}