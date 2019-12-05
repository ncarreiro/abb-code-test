import styled from "styled-components";

const iconStylesConfig = {
  size: "18px"
};

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: ${iconStylesConfig.size};
  height: ${iconStylesConfig.size};
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  color: #333;
  font-size: 12px;

  &.ok {
    border-color: #329a5d;
    color: #329a5d;
  }

  &.warning {
    border-color: #e9c704;
    color: #e9c704;
  }

  &.error {
    border-color: #f32d3e;
    color: #f32d3e;
  }
`;

export const IconStyles = {
  Container
};
