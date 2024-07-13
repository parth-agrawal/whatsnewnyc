import '../../types/responseObject.d.ts';
import { JobPostings, RequestBody } from './types.ts';
import {zodToJsonSchema} from 'zod-to-json-schema';
import dotenv from 'dotenv';

dotenv.config();

export const getJobPostings = async (): Promise<JobPostings> => {
  if (!process.env.PROVIDER_API_KEY || !process.env.HDR_API_KEY) throw new Error('API keys not set in .env');
  // IDK if this is necessary, but I didn't like the floating $schema variable.  -- ssebexen
  const {$schema, ...jobPostingsSchema} = zodToJsonSchema(JobPostings);
  const body: RequestBody = {
    browse_config: {
      startUrl: "https://www.builtinnyc.com/company/braze/jobs",
      objective: [
        "Summarize the job titles on this page and include the page's URL."
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
    response_type: jobPostingsSchema,
    headless: false
  };
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