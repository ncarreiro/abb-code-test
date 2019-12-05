import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #bbb;
  color: #fff;
  font-weight: 700;
  font-size: 1.2em;
  box-shadow: 2px 2px 2px rgba(1, 1, 1, 0.25);

  &.ok {
    background-color: #329a5d;
  }

  &.warning {
    background-color: #e9c704;
  }

  &.error {
    background-color: #f32d3e;
  }
`;

const Name = styled.div``;

const Checkbox = styled.input``;

const Status = styled.div``;

const FeatureTablesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 2px rgba(1, 1, 1, 0.25);
`;

export const FeatureStyles = {
  Container,
  Header,
  Name,
  Checkbox,
  Status,
  FeatureTablesContainer
};
