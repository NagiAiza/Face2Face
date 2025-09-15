import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';

export default function ContactPage() {
  return (

      <Page title="Contact">

      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
        <ShareBar>
          <NextLink href="https://www.twitter.com/my-saas-startup" passHref>
            <a>
              <TwitterIcon size={50} round={true} />
            </a>
          </NextLink>

          <NextLink href="https://www.facebook.com/my-saas-startup" passHref>
            <a>
              <FacebookIcon size={50} round={true} />
            </a>
          </NextLink>

          <NextLink href="https://www.linkedin.com/my-saas-startup" passHref>
            <a>
              <LinkedinIcon size={50} round={true} />
            </a>
          </NextLink>
        </ShareBar>
      </Page>
  );
}

const ContactContainer = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;
  top :30%;
  margin-bottom: 5rem;



  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const ShareBar = styled.div`


  
  position: relative;
  padding-bottom: 2rem;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
