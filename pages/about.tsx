import styled from 'styled-components';
import Page from 'components/Page';



export default function ContactPage() {
  return (

    <Page title="About">

      <TexteA>
        Our website, created by a group of three students and our computer science teacher, is dedicated to exploring the exciting world of artificial
        intelligence. We wanted to use our skills and knowledge to create something that would not only be fun and entertaining,
        but also showcase the incredible potential of AI technology.
        That is why we are thrilled to present our face-swap AI platform.
      </TexteA>
      <TexteB>
        The idea for our platform came about when we saw the growing popularity of face-swapping apps
        and realized that we could use our skills in computer science to create a more advanced and
        user-friendly version. We spent countless hours researching and testing different algorithms,
        fine-tuning our code, and perfecting our user interface. The result is a website that is both functional
        and easy to use, allowing anyone to experience the power of AI for themselves.
      </TexteB>
      <TexteA>
        Our website, created by a group of three students and our computer science teacher, is dedicated to exploring the exciting world of artificial
        intelligence. We wanted to use our skills and knowledge to create something that would not only be fun and entertaining,
        but also showcase the incredible potential of AI technology.
        That is why we are thrilled to present our face-swap AI platform.
      </TexteA>

    </Page>
  );
}



const TexteA = styled.div`
  text-align: justify-all;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  font-size: 130%;
  line-height: 170%;;
  margin-right: 30%;
  /* or 129% */
  text-shadow: 0 0 5px black;
  padding: 4rem;
  color: white;
`;

const TexteB = styled.div`
  text-align: justify-all;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 30;
  font-size: 130%;
  line-height: 170%;;
  margin-left: 30%;
 
  /* or 129% */
  padding: 4rem;
 text-shadow: 0 0 5px black;

  color: white;
`;

