'use client';

type Props = {
  html: string;
};

const Content = ({ html }: Props) => {
  return <div className="markdown tracking-tight" dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Content;
