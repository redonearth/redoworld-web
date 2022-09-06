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
      <h1>Layout</h1>
      {children}
      <Footer />
    </>
  );
}
