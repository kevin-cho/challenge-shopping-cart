import styled from 'styled-components';

const Container = styled.div`
  padding: 4px 12px;
  border: 1px solid;
  border-radius: 20px;
  width: fit-content;
  font-size: 12px;
`;

const Chip = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Chip;
