import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import 'semantic-ui-css/semantic.min.css';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import { NavItems } from 'types';
import LoginModal from '../components/LoginModal';
import { LoginModalContextProvider, useLoginModalContext} from '../contexts/login-modal.context';


const navItems: NavItems = [
  { title: 'Home', href: '/' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'about', href: '/about' },
];

const Fondue = styled.div`
  background-image: url('/fond.png');
  background-size: cover;
  min-height:100vh;
  height: auto;
`;

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />


        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}

      </Head>
      <Fondue>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Modals />

        <Navbar items={navItems} />

        <TinaEditProvider
          editMode={
            <TinaCMS
              query={pageProps.query}
              variables={pageProps.variables}
              data={pageProps.data}
              isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
              clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              {...pageProps}
            >
              {(livePageProps: any) => <Component {...livePageProps} />}
            </TinaCMS>
          }
        >
          <Component {...pageProps} />
        </TinaEditProvider>

      </Providers>
      </Fondue>

    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <LoginModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </LoginModalContextProvider>
  );
}


function Modals() {
  const { isModalOpened, setIsModalOpened } = useLoginModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <LoginModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
