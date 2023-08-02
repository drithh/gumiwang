import { createClient } from 'next-sanity';
import config from '@/sanity.config';
import { env } from '~/env.mjs';
import { Project } from '~/types';

const client = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  apiVersion: '2023-08-01',
});

export async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(`*[_type == "project"]`);
  return projects;
}
