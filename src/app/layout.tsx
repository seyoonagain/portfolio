import type { Metadata } from 'next';
import './globals.css';
import MenuBar from '@/components/MenuBar/MenuBar';
import WindowZIndexContextProvider from '@/contexts/useWindowZIndexContext';
import IconZIndexContextProvider from '@/contexts/useIconZIndexContext';
import WindowContextProvider from '@/contexts/useWindowContext';

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
            <WindowZIndexContextProvider>
              <IconZIndexContextProvider>{children}</IconZIndexContextProvider>
            </WindowZIndexContextProvider>
          </WindowContextProvider>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
