import memoji from '@public/images/memoji.svg';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className='relative p-5 flex flex-col items-center'>
      <Image src={memoji} alt='memoji' />
      <p className='font-galmuri7 text-2xl'>정세윤</p>
    </section>
  );
};

export default AboutMe;
