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
};

export const JobPosting = z.object({
  title: z.string().describe('The job title; for example, "software developer"'),
  sourceUrl: z.string().optional().describe('The job posting URL')
}).describe('A single job posting');
// export type JobPosting = z.infer<typeof JobPosting>;

// export const JobPostings = z.array(JobPosting).describe('A list of job postings.');
export const JobPostings = z.object({
  jobPostings: z.array(z.string()).describe('A list of job titles.'),
  pageUrl: z.string().describe('The URL the jobs were found on.')
});
export type JobPostings = z.infer<typeof JobPostings>;