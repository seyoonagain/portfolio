import type { Metadata } from 'next';

import Toast from '@common/toast';
import MenuBar from '@/components/menuBar';

import '@/styles/globals.css';

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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col w-screen h-screen">
        <MenuBar />
        <section className="flex grow w-full h-full p-5 bg-default bg-repeat bg-center">
          {children}
        </section>
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
