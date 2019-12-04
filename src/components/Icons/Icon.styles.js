import styled from "styled-components";

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  color: #333;
  font-size: 14px;

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
