import { createClient } from 'next-sanity';
import { env } from '~/env.mjs';
import { Project } from '~/types';

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-08-01',
});

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(`*[_type == "project"]`);
  return projects;
}
