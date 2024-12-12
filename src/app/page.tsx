'use client';
import Icon from '@/components/Icon';
import aboutMe from '../../public/images/aboutMe.png';
import contact from '../../public/images/contact.png';
import projects from '../../public/images/projects.png';
import { useState } from 'react';

const Home = () => {
  const [clickedIcon, setClickedIcon] = useState<string>('');
  const handleDbClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    title: string
  ) => {
    // opens new windows
    console.log(e, title);
    setClickedIcon('');
  };
  return (
    <section className='grid grid-cols-2 gap-7'>
      <div
        onDoubleClick={(e) => handleDbClick(e, 'aboutMe')}
        onMouseDown={() => setClickedIcon('aboutMe')}
      >
        <Icon
          url={aboutMe}
          description='About me'
          top={48}
          left={20}
          isClicked={clickedIcon === 'aboutMe'}
        />
      </div>
      <div
        onDoubleClick={(e) => handleDbClick(e, 'contact')}
        onMouseDown={() => setClickedIcon('contact')}
      >
        <Icon
          url={contact}
          description='Contact'
          top={48}
          left={120}
          isClicked={clickedIcon === 'contact'}
        />
      </div>
      <div
        onDoubleClick={(e) => handleDbClick(e, 'projects')}
        onMouseDown={() => setClickedIcon('projects')}
      >
        <Icon
          url={projects}
          description='Projects'
          top={154}
          left={20}
          isClicked={clickedIcon === 'projects'}
        />
      </div>
    </section>
  );
};

export default Home;
