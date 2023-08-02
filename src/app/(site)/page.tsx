import Image from 'next/image';
import { getProjects } from '@/src/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
