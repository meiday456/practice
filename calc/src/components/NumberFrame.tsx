import React, {ReactElement} from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import {NUMBERS} from "../util/Utils";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 75%;

  & button {
    flex-basis: 33%;

    &:nth-of-type(10) {
      border-radius: 0 0 0 15px;
    }
  }
`;

const NumberFrame = ({addCalcCode}: {addCalcCode: (n: string) => void}): ReactElement => {
  return (
    <Container>
      {NUMBERS.map(num => (
        <Button key={num} value={num} onClick={e => addCalcCode(e.currentTarget.value)}></Button>
      ))}
    </Container>
  );
};

export default React.memo(NumberFrame, (prevProps, nextProps) => {
  return prevProps.addCalcCode === nextProps.addCalcCode;
});
