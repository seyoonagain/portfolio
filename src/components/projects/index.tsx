import { useState } from 'react';

import { PROJECTS } from './constants';
import tabStyles from './tabStyles';
import { ProjectTitles } from './types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectTitles>('하쿠나마타타로');

  return (
    <div className="relative w-full h-full">
      <div className="flex absolute top-0 left-0 z-10 w-full h-7 px-1">
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

      <div className="absolute top-7 w-full h-full p-4 border-t border-zinc-800 bg-white"></div>
    </div>
  );
};

export default Projects;
