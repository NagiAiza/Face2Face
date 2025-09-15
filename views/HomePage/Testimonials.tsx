import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import Separator from 'components/Separator';
import { media } from 'utils/media';

export const TESTIMONIALS = [
  {
    companyLogoUrl: '/testimonials/Img1.jpg',
    content: `Our AI assistant is here to assist you in finding the perfect haircut by providing personalized recommendations based on your preferences and facial features`,
    author: {
      name: 'Clyde Edwards',
      title: 'Very Serious Man',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/Img2.jpg',
    content: `Our AI beauty advisor is ready to help you experiment with different makeup looks, offering suggestions based on skin tone, eye color, and occasion.`,
    author: {
      name: 'Jimmy Hunter',
      title: 'Sigma Male University Graduate',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: '/testimonials/Img3.jpg',
    content: `Our AI beauty expert assists with cosmetic surgery decisions, offering procedure info and connecting to professionals`,
    author: {
      name: 'Marjorie Morgan',
      title: 'Chief Chad Officer',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>

      <TestimonialsWrapper>
        <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 8000 }} centeredSlides navigation loop>
          {TESTIMONIALS.map((singleTestimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard>
                <img
                  src={singleTestimonial.companyLogoUrl}
                  className="ui massive image"
                />
                <Content>“{singleTestimonial.content}”</Content>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsWrapper>

    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;
  background-color: white;
  padding-bottom:10rem;
  padding-top: 10rem;
  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

export const Content = styled.blockquote`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;


  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

