import { useState } from 'react';

import { PROJECTS } from './constants';
import ProjectDetails from './ProjectDetails';
import tabStyles from './tabStyles';
import { ProjectTitles } from './types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectTitles>('하쿠나마타타로');

  return (
    <div className="flex flex-col relative w-full h-full">
      <div className="flex z-10 w-full h-7 px-1">
        {PROJECTS.map(project => (
          <div
            key={project}
            onClick={() => setSelectedProject(project)}
            className={tabStyles({ isSelected: selectedProject === project })}
          >
            {project}
          </div>
        ))}
      </div>

      <div className="grow w-full border-t border-zinc-950 bg-white">
        <ProjectDetails selectedProject={selectedProject} />
      </div>
    </div>
  );
};

export default Projects;
