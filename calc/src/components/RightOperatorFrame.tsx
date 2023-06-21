import React, {ReactElement} from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import {RIGHT_OPERATORS} from "../util/Utils";

interface Props {
  equal: () => void;
  addCalcCode: (n: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 25%;

  & button:last-child {
    border-radius: 0 0 15px 0;
  }
`;

const RightOperatorFrame = ({addCalcCode, equal}: Props): ReactElement => {
  return (
    <Container>
      {RIGHT_OPERATORS.map((op, index) => {
        if (index === RIGHT_OPERATORS.length - 1) {
          return <Button key={op} value={op} color={"orange"} onClick={equal}></Button>;
        } else {
          return (
            <Button
              key={op}
              value={op}
              color={"incarnadine"}
              onClick={e => addCalcCode(e.currentTarget.value)}
            ></Button>
          );
        }
      })}
    </Container>
  );
};

export default RightOperatorFrame;
