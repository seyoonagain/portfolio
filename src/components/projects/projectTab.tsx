import { Dispatch, SetStateAction } from 'react';

import tabStyles from '@/components/projects/tabStyles';

const ProjectTab = ({
  projectTitles,
  selectedTitle,
  setSelectedTitle,
}: {
  projectTitles: string[];
  selectedTitle: string;
  setSelectedTitle: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex z-10 w-full h-7 px-1">
      {projectTitles
        .slice()
        .reverse()
        .map(title => (
          <div
            key={title}
            onClick={() => setSelectedTitle(title)}
            className={tabStyles({
              isSelected: selectedTitle === title,
            })}
          >
            {title}
          </div>
        ))}
    </div>
  );
};

export default ProjectTab;
