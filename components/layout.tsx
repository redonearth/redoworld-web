import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

interface ILayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  const defaultClassName = 'bg-primary';
  return (
    <>
      <Head>
        <title>{title && `${title} | `}레도 월드</title>
        <meta name="description" content="잘 하는 프론트엔드 개발자가 되자." />
      </Head>
      <div className={defaultClassName}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
