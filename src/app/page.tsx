'use server';

import AboutMe from '@/components/aboutMe';
import Contact from '@/components/contact';
import Home from '@/components/home';
import Projects from '@/components/projects';

const Page = () => {
  const serverWindow = {
    'About me': <AboutMe />,
    Contact: <Contact />,
    Projects: <Projects />,
  };

  return <Home serverWindow={serverWindow} />;
};

export default Page;
