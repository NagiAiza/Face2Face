import NextLink from 'next/link';
import styled from 'styled-components';
import Buton from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { useLoginModalContext } from '../../contexts/login-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useLoginModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Welcome to our cutting-edge platform for face swapping</CustomOverTitle>
        <Heading>Get ready for our face swapping AI technology !</Heading>
        <Description>
          experiment with a new look, or simply have fun with your friends, our website makes it easy and accessible.
        </Description>
        <CustomButtonGroup>
          <ButtonPay onClick={() => setIsModalOpened(true)}>
            Get started pro <span>&rarr;</span>
          </ButtonPay>
          <NextLink href="/gratuit" passHref>
            <Buton >
              Version Gratuite <span>&rarr;</span>
            </Buton>
          </NextLink>
        </CustomButtonGroup>
      </Contents>

    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  margin-bottom: 5rem;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ButtonPay = styled.a`
  border: none;
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: radial-gradient(gold);
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color:white;
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border:gold;
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;

  span {
    margin-left: 2rem;
  }

  &:hover {
    transform: scale(1.025);
  }
`;


const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
