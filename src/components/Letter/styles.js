import styled from "styled-components";

const borderColor = {
  default: "#79E2F2",
  success: "#ABF5D1",
};

const StyledLetter = styled.div`
  box-sizing: border-box;
  width: 82px;
  height: 96px;
  padding-top: 16px;
  border-bottom: 8px solid;
  border-color: ${(props) => borderColor[props.$status]};
  font-size: 57px;
  text-align: center;

  font-family: Arial, Helvetica, sans-serif;
`;

export { StyledLetter };
