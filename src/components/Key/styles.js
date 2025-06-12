import styled from "styled-components";

const backgroundColors = {
  default: "#79E2F2",
  success: "#ABF5D1",
  error: "#FFBDAD",
};

const hoverColors = {
  default: "#E6FCFF",
  success: "#E3FCEF",
  error: "#FFEBE6",
};

const StyledButton = styled.button`
  background-color: ${(props) => backgroundColors[props.$status]};
  color: #091e42;
  font-size: 30px;
  padding: 14px 38px 37px 21px;
  border: none;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #ccc;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => hoverColors[props.$status]};
  }
`;

export { StyledButton };
