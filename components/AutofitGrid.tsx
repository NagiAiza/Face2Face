import styled from 'styled-components';

const AutofitGrid = styled.div`
  --autofit-grid-item-size: 30rem;

  display: flex;
  justify-content: space-evenly;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0;
  flex-wrap: wrap;
`;

export default AutofitGrid;
