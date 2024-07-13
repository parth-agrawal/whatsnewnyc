import '../../types/responseObject.d.ts';
import { JobPosting, RequestBody } from './types.ts';
import {zodToJsonSchema} from 'zod-to-json-schema';
import dotenv from 'dotenv';

dotenv.config();

export const getJobPostings = async (): Promise<JobPosting> => {
  if (!process.env.PROVIDER_API_KEY || !process.env.HDR_API_KEY) throw new Error('API keys not set in .env');
  // IDK if this is necessary, but I didn't like the floating $schema variable.  -- ssebexen
  const {$schema, ...jobPostingSchema} = zodToJsonSchema(JobPosting);
  const body: RequestBody = {
    browse_config: {
      startUrl: "https://www.builtinnyc.com/job/director-local-campaign-operations/270227",
      objective: [
        "Get me a job title from this page. Optionally include any additional information about the jobs you can find, including the job description, company name, where the job is located, and a link to the job application page."
      ],
    maxIterations: 3
  },
    provider_config: {
      provider: "openai",
      apiKey: process.env.PROVIDER_API_KEY
    },
    model_config: {
      model: 'gpt-4'
    },
    hdr_config: {
      apikey: process.env.HDR_API_KEY
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