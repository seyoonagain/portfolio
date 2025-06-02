'use server';

import AboutMe from '@/components/aboutMe';
import Contact from '@/components/contact';
import Email from '@/components/email';
import Home from '@/components/home';
import Projects from '@/components/projects';
import Skills from '@/components/skill';

const Page = () => {
  const serverWindow = {
    'About me': <AboutMe />,
    Contact: <Contact />,
    Projects: <Projects />,
    Email: <Email />,
    Skills: <Skills />,
  };

  return <Home serverWindow={serverWindow} />;
};

export default Page;
