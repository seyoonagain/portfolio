import ProjectPanel from '@/components/projects/projectPanel';
import { getAllProjects } from '@/lib/projectApi';

import markdownToHtml from '../../lib/markdownToHtml';

const Projects = async () => {
  const projects = getAllProjects();
  const projectsWithHtml = await Promise.all(
    projects.map(async project => ({ ...project, content: await markdownToHtml(project.content) })),
  );

  return <ProjectPanel projects={projectsWithHtml} />;
};

export default Projects;
