import React, {ReactElement} from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import {TOP_OPERATORS} from "../util/Utils";

const Container = styled.div`
  display: flex;
`;

const TopOperatorFrame = ({addCalcCode}: {addCalcCode: (n: string) => void}): ReactElement => {
  return (
    <Container>
      {TOP_OPERATORS.map((op, index) => {
        const color = index === TOP_OPERATORS.length - 1 ? "incarnadine" : "grey";

        return <Button key={op} value={op} color={color} onClick={e => addCalcCode(e.currentTarget.value)}></Button>;
      })}
    </Container>
  );
};

export default TopOperatorFrame;
