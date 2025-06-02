import Image from 'next/image';

import Button from '@/components/common/button';
import DateFormatter from '@/components/projects/dateFormatter';
import { Project } from '@/interfaces/project';
import calculateDurationWeeks from '@/utils/calculateDurationWeeks';

const ProjectDetail = ({
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
    isDone,
  },
}: {
  selectedProject: Project;
}) => {
  const links = [github, demo];

  return (
    <div className="flex flex-col w-full">
      <p className="font-silver text-center sm:text-left text-lg">
        ( {team ? title : '개인 프로젝트'} )
      </p>
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

        <div className="flex flex-col gap-3 w-full sm:w-3/5">
          <h2 className="font-chicago text-3xl lg:text-4xl text-center sm:text-left tracking-tighter">
            {title}
          </h2>
          <p className="block font-silver text-2xl text-center sm:text-left leading-5">
            {description}
          </p>
          <div className="flex flex-col justify-end gap-1 grow sm:pb-10 my-4 font-lanaPixel text-sm sm:text-base tracking-wide">
            <div className="flex items-center">
              <DateFormatter dateString={startedAt} />
              {'\xa0-\xa0'}
              {isDone && (
                <>
                  <DateFormatter dateString={endedAt} />
                  {'\xa0'}({calculateDurationWeeks(startedAt, endedAt)})
                </>
              )}
            </div>

            <div className="flex items-center gap-1 flex-wrap">
              {techStack.map(tech => (
                <p
                  key={`${title} - ${tech}`}
                  className="flex items-center h-5 px-2 border border-zinc-950 rounded-md text-sm"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="markdown py-8 font-silver text-2xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ProjectDetail;
