import { ReactNode } from 'react';
import './global.css';

import { Metadata } from 'next';
import { Providers } from './providers';
import Header from './header';
import Footer from './footer';

export const metadata: Metadata = {
  title: '레도 월드',
  description: '잘 하는 프론트엔드 개발자가 되자.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const defaultClassName = 'bg-primary';

  return (
    <html>
      <body>
        <Providers>
          <div className={defaultClassName}>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
