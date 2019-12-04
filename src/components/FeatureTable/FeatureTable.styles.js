import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d2d2d2;
  color: #484848;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  padding: 15px;
  display: flex;
  flex: 1;
  justify-content: center;

  &:first-of-type {
    justify-content: flex-start;
  }

  &:last-of-type {
    justify-content: flex-end;
  }
`;

const Header = styled(Row)`
  font-weight: 700;
`;

export const FeatureTableStyles = {
  Container,
  Header,
  Row,
  Column
};
