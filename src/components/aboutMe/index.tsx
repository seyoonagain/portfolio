import ABOUT_ME from '@/components/aboutMe/constants';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-between items-center relative h-full p-5 font-galmuri14">
      <h2 className="font-chicago text-6xl">Hello, world!</h2>

      <h3 className="font-galmuri11 text-base text-center tracking-tighter">
        말 한마디의 온기가 팀의 성장을 이끈다고 믿는, <br />
        신입 프론트엔드 개발자
        <span className="font-galmuri7 text-xl"> 정세윤</span>
        입니다.
      </h3>

      {ABOUT_ME.map(({ heading, icon, content }) => (
        <section key={heading} className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Image src={icon} alt={`${heading} 아이콘`} />
            <h4 className="font-galmuri9 text-base">{heading}</h4>
          </div>
          <p className="p-2 border border-r-2 border-b-2 border-zinc-950 rounded-md text-sm text-justify leading-6">
            {content}
          </p>
        </section>
      ))}
    </div>
  );
};

export default AboutMe;
