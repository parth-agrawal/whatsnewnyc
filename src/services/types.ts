import z from 'zod';

export type RequestBody = {
  "browse_config": {
    startUrl: string,
    objective: string[],
    maxIterations: number
  },
  "provider_config": {
    provider: string,
    apiKey: string
  },
  "model_config": {
    model: string
  },
  "hdr_config": {
    apikey: string,
  }
  "response_type": object,
  "headless": boolean
}

export const JobPosting = z.object({
  title: z.string().describe('The job title; for example, "software developer"'),
  description: z.string().optional().describe('The job description'),
  company: z.string().optional().describe('The company name'),
  location: z.string().optional().describe('Where the job is located geographically'),
  sourceUrl: z.string().optional().describe('The company website')
}).describe('A single job posting');
export type JobPosting = z.infer<typeof JobPosting>

export const JobPostings = z.object({
  jobPostings: z.array(JobPosting)
});
export type JobPostings = z.infer<typeof JobPostings>