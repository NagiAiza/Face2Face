import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>

      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Si je suis vraiment très moche, pouvez-vous me rendre belle ?">
        Cela dépend de votre définition de la beauté. En tout cas, nous pouvons vous rendre moins moche.
        Si vous êtes vraiment très moche, vous pouvez aussi essayer de vous rendre moins moche vous-même en utilisant notre outil de maquillage.
      </Accordion>
      <Accordion title="Pouvons-nous utiliser l'application gratuitement ?">
        Oui, vous pouvez utiliser l application gratuitement, cependant les fonctionnalités sont limitées.
        L abonnement vous permet d accéder à toutes les fonctionnalités de l application.
      </Accordion>
      <Accordion title="Pensez-vous que les tacos prendront le pouvoir d'ici 2070 ?">
        Cette question est hors-sujet. Nous ne répondrons pas à cette question sauf si vous nous payez 1000€.
        Voici notre numéro de compte bancaire : 1234 5678 9012 3456 7890.
      </Accordion>

    </Wrapper>
  );
}

const Wrapper = styled.div`

  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
