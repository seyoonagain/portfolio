import Image from 'next/image';
import Link from 'next/link';

import calculateDurationWeeks from '@/utils/calculateDurationWeeks';

import { DOREUMUNG_DETAILS, HAKUNAMATATROT_DETAILS } from './constants';
import { ProjectDetailsProps } from './types';

const ProjectDetails = ({ selectedProject }: ProjectDetailsProps) => {
  const {
    title,
    image,
    startedAt,
    endedAt,
    overview,
    backend,
    frontend,
    techStacks,
    links,
    responsibilities,
    keyAchievements,
    lessonsLearned,
  } = selectedProject === '하쿠나마타타로' ? HAKUNAMATATROT_DETAILS : DOREUMUNG_DETAILS;

  return (
    <section className="flex flex-col h-full">
      <div className="flex items-center py-3 border-b border-zinc-950">
        <h3 className="w-full font-galmuri9 text-2xl text-center">{title}</h3>
      </div>
      <div className="flex items-start gap-2 w-full h-full font-galmuri11">
        <div className="flex flex-col w-1/3 h-full items-center gap-1 border-r border-zinc-950">
          <div className="flex flex-col items-center gap-3 p-2">
            <div className="relative w-full aspect-square">
              <Image
                src={image}
                fill
                style={{ objectFit: 'contain' }}
                alt={`${title} 로고`}
                priority
                className="px-6 saturate-0"
              />
            </div>
            <div className="flex justify-center items-center gap-3 w-full py-5 font-chicago text-base">
              {links.map(({ link, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="w-fit px-2 border border-zinc-950 rounded-md outline outline-2 active:outline-[3px] outline-offset-1 outline-zinc-950 box-border"
                >
                  {link}
                </Link>
              ))}
            </div>
            <p className="font-galmuri11 text-xs">
              {startedAt} ~ {endedAt} ({calculateDurationWeeks(startedAt, endedAt)}주)
            </p>
            <div className="flex gap-4 text-sm">
              <p>
                <span className="font-galmuri9">백엔드: </span>
                {backend}명
              </p>
              <p>
                <span className="font-galmuri9">프론트엔드: </span>
                {frontend}명
              </p>
            </div>
            <div className="flex justify-center flex-wrap gap-1">
              {techStacks.map(tech => (
                <p
                  key={tech}
                  className="px-2 border border-zinc-950 rounded-md bg-zinc-100 hover:bg-white font-chicago text-sm"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-2/3 h-[592px] p-2 overflow-y-auto">
          <p className="flex flex-col">
            <span className="font-chicago text-xl pb-2">Overview</span>
            <span className="text-sm leading-7">{overview}</span>
          </p>
          <ul className="flex flex-col">
            <span className="font-chicago text-xl pb-2">Responsibilities</span>
            {responsibilities.map((responsibility, index) => (
              <li
                key={`${index}-responsibility`}
                className="font-galmuri11 text-zinc-700 text-sm leading-7"
              >
                - {responsibility}
              </li>
            ))}
          </ul>
          <ul>
            <span className="font-chicago text-xl pb-2">Key Achievements</span>
            {keyAchievements.map(({ title, details }, index) => (
              <li
                key={`${index}-lesson`}
                className="font-galmuri11 text-zinc-700 text-sm leading-7"
              >
                <p className="font-galmuri9">- {title}</p>
                <p className="flex flex-col">
                  {details.map(item => (
                    <span key={item} className="pl-2">
                      - {item}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            <span className="font-chicago text-xl pb-2">Lessons Learned</span>
            {lessonsLearned.map(({ title, details }, index) => (
              <li
                key={`${index}-lesson`}
                className="font-galmuri11 text-zinc-700 text-sm leading-7"
              >
                <p className="font-galmuri9">- {title}</p>
                <p className="flex flex-col">
                  {details.map(item => (
                    <span key={item} className="pl-2">
                      - {item}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
