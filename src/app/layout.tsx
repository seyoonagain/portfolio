import type { Metadata } from 'next';
import './globals.css';
import MenuBar from '@/components/MenuBar/MenuBar';
import WindowContextProvider from '@/contexts/useWindowZIndexContext';
import IconZIndexContextProvider from '@/contexts/useIconZIndexContext';

export const metadata: Metadata = {
  title: '정세윤 | 프론트엔드 개발자',
  description: '안녕하세윤. 프론트엔드 개발자 포트폴리오입니다.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <MenuBar />
        <section className='w-full mt-7 flex p-5 bg-[url(/images/bg.png)]'>
          <WindowContextProvider>
            <IconZIndexContextProvider>{children}</IconZIndexContextProvider>
          </WindowContextProvider>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
