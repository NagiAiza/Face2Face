import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';



const Fondue =styled.div`

  background-image: url('/fond.png');


` ;

export default function PricingPage() {
  return (
      <Page title="Start using AI in your business today !" description="">


        <Wrapper>
          <PricingTablesSection Button_one="Get Started" Button_two="Paye moi ça le S"/>
          <FaqSection />

        </Wrapper>


      </Page>
  );
}


const Wrapper = styled.div`
 
  & > :last-child {
    margin-bottom: 1rem;
  }
`;
