'use client';

import { useState } from 'react';

import ProjectTab from '@/components/projects/projectTab';
import { Project } from '@/interfaces/project';
import ProjectDetails from '@/components/projects/ProjectDetails';

const ProjectPanel = ({ projects }: { projects: Project[] }) => {
  const projectTitles = projects.map(project => project.title);
  const [selectedTitle, setSelectedTitle] = useState(projectTitles[projects.length - 1]);

  const selectedProject = projects.find(project => project.title === selectedTitle);

  return (
    <div className="flex flex-col relative w-full h-full">
      <ProjectTab
        projectTitles={projectTitles}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
      <div className="grow w-full px-4 pt-2 border-t border-zinc-950 bg-white overflow-y-auto">
        {selectedProject && <ProjectDetails selectedProject={selectedProject} />}
      </div>
    </div>
  );
};

export default ProjectPanel;
