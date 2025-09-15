import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
export default function PricingTablesSection({Button_one, Button_two}:any) {
  return (
    <Wrapper>
      <AutofitGrid>
        <PricingCard mode="free"
          button={Button_one}
          title="free"
          description="Discover our AI for free"
          benefits={[
            'Unlimited access to Makeup Tool',
            'Share with 1 team member',
            '7 days of history',
            'No credit card required',
          ]}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard mode="pro"
          button={Button_two}
          title="Company"
          description="Best for small teams"
          benefits={[
            'Unlimited access to Makeup Tool',
            'Share with 10 team members',
            'Unlimited history',
            '5.000/month Photo Generation',
            'Priority support',
          ]}
        >
          $49<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
