import '../../types/responseObject.d.ts';
import { JobPostings, JobPosting, RequestBody } from './types.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export const getJobPostings = async (): Promise<JobPosting> => {
  console.log(import.meta.env)
  if (!import.meta.env.VITE_PROVIDER_API_KEY || !import.meta.env.VITE_HDR_API_KEY) throw new Error('API keys not set in .env');
  // IDK if this is necessary, but I didn't like the floating $schema variable.  -- ssebexen
  const { $schema, ...jobPostingSchema } = zodToJsonSchema(JobPosting);
  const body: RequestBody = {
    browse_config: {
      startUrl: "https://www.builtinnyc.com/job/director-local-campaign-operations/270227",
      objective: [
        "What is the name of the job I can apply for?"
      ],
      maxIterations: 3
    },
    provider_config: {
      provider: "openai",
      apiKey: import.meta.env.VITE_PROVIDER_API_KEY
    },
    model_config: {
      model: 'gpt-4'
    },
    hdr_config: {
      apikey: import.meta.env.VITE_HDR_API_KEY
    },
    response_type: jobPostingSchema,
    headless: false
  }
  console.dir(JSON.parse(JSON.stringify(body)), { depth: null });
  const result = fetch('http://localhost:3000/browse', {
    method: 'POST',
    body: JSON.stringify(body),
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(await result);
  // return (await result).json();
}