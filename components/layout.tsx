import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
