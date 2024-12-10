import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
