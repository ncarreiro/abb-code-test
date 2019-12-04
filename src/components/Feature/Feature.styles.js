import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const Header = styled.div`
  padding: 15px 10px;
  background-color: #bbb;
  color: #fff;
  font-weight: 700;
  font-size: 1.2em;

  &.Ok {
    background-color: #329a5d;
  }

  &.Warning {
    background-color: #e9c704;
  }

  &.Error {
    background-color: #f32d3e;
  }
`;

export const FeatureStyles = {
  Container,
  Header
};
