import { getJobPostings } from "./getJobPostings";

const main = async () => {
  const x = await getJobPostings();
  console.log(x);
}

await main();