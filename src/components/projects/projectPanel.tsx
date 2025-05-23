'use client';

import { useEffect,useRef, useState } from 'react';

import ProjectDetails from '@/components/projects/ProjectDetails';
import ProjectTab from '@/components/projects/projectTab';
import { Project } from '@/interfaces/project';

const ProjectPanel = ({ projects }: { projects: Project[] }) => {
  const projectTitles = projects.map(project => project.title);
  const [selectedTitle, setSelectedTitle] = useState(projectTitles[projects.length - 1]);

  const selectedProject = projects.find(project => project.title === selectedTitle);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTitle]);

  return (
    <div className="flex flex-col relative w-full h-full">
      <ProjectTab
        projectTitles={projectTitles}
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
      />
      <div
        ref={scrollContainerRef}
        className="w-full h-full z-0 px-4 pt-2 mt-[27px] border-t border-zinc-950 bg-white overflow-y-auto"
      >
        {selectedProject && <ProjectDetails selectedProject={selectedProject} />}
      </div>
    </div>
  );
};

export default ProjectPanel;
