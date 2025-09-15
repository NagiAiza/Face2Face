import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { media } from 'utils/media';
import Container from './Container';
import SectionTitle from './SectionTitle';

export interface PageProps {
  title: string;
  description?: string;
}

export default function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <>
        <Head>
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
        </Head>
      <Wrapper>
        <HeaderContainer>
          <Container>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
   min-height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 10rem;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 0;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  min-height: 100%;
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
