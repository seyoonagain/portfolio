import Image from 'next/image';

import ABOUT_ME from '@/components/aboutMe/constants';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center gap-6 relative p-5">
      <h2 className="font-chicago text-6xl">Hello, world!</h2>

      <h3 className="font-lanaPixel text-xl text-center">
        직관적 UI와 세심한 UX를 설계하는 <br />
        신입 프론트엔드 개발자
        <span className="text-2xl"> 정세윤</span>
        입니다.
      </h3>

      {ABOUT_ME.map(({ heading, icon, content }) => (
        <section key={heading} className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Image src={icon} alt={`${heading} 아이콘`} />
            <h4 className="font-lanaPixel text-base">{heading}</h4>
          </div>
          <div className="p-2 border border-r-2 border-b-2 border-zinc-950 rounded-md font-silver text-xl text-justify tracking-tight leading-7">
            {content.split('\n').map(paragraph => (
              <p key={paragraph} className="text-wrap indent-2">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutMe;
