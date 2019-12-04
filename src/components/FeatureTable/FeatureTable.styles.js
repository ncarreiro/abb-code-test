import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d2d2d2;
  color: #484848;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  padding: 15px 10px;
  flex: 1;
  justify-content: space-between;
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
