import React from "react";
import styled from "@emotion/styled";

interface Props {
  value: string;
  color: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonStyle = styled.button<{color: string}>`
  position: relative;
  background-color: var(--color-${({color}) => color});
  border: 1px solid var(--color-darGrey-50);
  height: 100px;
  flex-grow: 1;
  flex-basis: 50px;

  &:hover::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.1;
  }
`;
const Button = ({value, color, onClick}: Props) => {
  return (
    <ButtonStyle color={color} onClick={onClick} value={value}>
      {value}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  value: "NaN",
  color: "white",
  onClick: () => {},
};
export default Button;
