import '../../types/responseObject.d.ts';
import { JobPostings, JobPosting, RequestBody } from './types.ts';
import {zodToJsonSchema} from 'zod-to-json-schema';


export const getJobPostings = async (): Promise<JobPosting> => {
  const {$schema, ...jobPostingSchema} = zodToJsonSchema(JobPosting);
  const body: RequestBody = {
    browse_config: {
      startUrl: "https://www.builtinnyc.com/job/director-local-campaign-operations/270227",
      objective: [
        "Find me a job to apply for."
      ],
      maxIterations: 10
    },
    response_type: jobPostingSchema,
    headless: false
  }
  console.dir(JSON.parse(JSON.stringify(body)), {depth: null});
  const result = fetch('http://localhost:3000/browse', {
    method: 'POST',
    body: JSON.stringify(body),
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(await result);
  return (await result).json();
}