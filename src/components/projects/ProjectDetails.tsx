import Image from 'next/image';

import DateFormatter from '@/components/projects/dateFormatter';
import { Project } from '@/interfaces/project';
import Button from '@/components/common/button';
import calculateDurationWeeks from '@/utils/calculateDurationWeeks';

const ProjectDetails = ({
  selectedProject: {
    content,
    image,
    title,
    team,
    description,
    techStack,
    github,
    demo,
    startedAt,
    endedAt,
  },
}: {
  selectedProject: Project;
}) => {
  const links = [github, demo];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <div className="flex flex-col items-center gap-4 w-full sm:w-2/5">
          <div className="relative w-full aspect-project">
            <Image
              className="border border-zinc-950 bg-white object-cover saturate-0 hover:saturate-100 transition ease-in-out duration-700"
              src={image}
              alt={title}
              sizes="640px"
              fill
              priority
            />
          </div>

          <div className="flex gap-3">
            {links.map(link => (
              <a key={link} href={link} target="_blank">
                <Button
                  text={link.includes('github.com') ? 'GitHub' : 'Demo'}
                  className="font-chicago text-base"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full sm:w-3/5">
          <h2 className="font-galmuri9 text-2xl lg:text-3xl text-center sm:text-left tracking-tighter">
            {description}
          </h2>
          <p className="block font-galmuri14 text-xs text-center sm:text-left">
            ( {team ? title : '개인 프로젝트'} )
          </p>
          <div className="flex flex-col justify-end gap-1 grow sm:pb-10 my-4 font-galmuri11">
            <div className="flex items-center text-sm">
              <p>기간:{'\xa0'}</p>
              <DateFormatter dateString={startedAt} />
              {'\xa0-\xa0'}
              <DateFormatter dateString={endedAt} />
              {'\xa0'}({calculateDurationWeeks(startedAt, endedAt)})
            </div>

            <div className="flex items-center text-sm">
              <p className="tracking-tight">{`기술스택: ${techStack.join(', ')}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="markdown font-galmuri14 text-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ProjectDetails;
