
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';

import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';

import Hero from 'views/HomePage/Hero';

import Testimonials from 'views/HomePage/Testimonials';
import Footer from '../components/Footer';
import WaveCta from '../components/WaveCta';


export default function Homepage() {
  return (
    <>
      <Head>
        <title>Home</title>

      </Head>
      <HomepageWrapper>

          <Hero />
          <Testimonials />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Our AI face swap tool" reversed overTitle="">
            <p>
              Our AI face swap tool is a revolutionary technology that allows you to experiment with different
              looks and create fun, personalized content. Whether you want to swap faces with friends, family,
              or famous celebrities, our user-friendly platform makes it easy for you to achieve your desired results
              in just a few clicks. So unleash your creativity and let our AI technology bring your face swapping ideas to life.
            </p>
          </BasicSection>
        <BasicSection imageUrl="/demo-illustration-1.svg" title="Our AI hair specialist" overTitle="">
          <p>
            Our AI hair specialist is here to provide comprehensive support as you test and
            try out various haircuts.
            We take into consideration your individual face shape, hair texture,
            and personal preferences to generate recommendations that are tailored specifically for you.
            Whether you are looking for a new and fresh style or simply seeking advice,
            our AI hair specialist is here to help every step of the way.
          </p>
        </BasicSection>

        <Footer />
      </HomepageWrapper>
    </>
  );
}



const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;




export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
