import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import TopOperatorFrame from "./TopOperatorFrame";
import NumberFrame from "./NumberFrame";
import RightOperatorFrame from "./RightOperatorFrame";

interface Props {
  equal: () => void;
  addCalcCode: (n: string) => void;
}

const Container = styled.section``;
const WrapperStyle = styled.div`
  display: flex;
`;

const ButtonFrame = (props: Props): ReactElement => {
  return (
    <Container>
      <TopOperatorFrame addCalcCode={props.addCalcCode}></TopOperatorFrame>
      <WrapperStyle>
        <NumberFrame addCalcCode={props.addCalcCode}></NumberFrame>
        <RightOperatorFrame addCalcCode={props.addCalcCode} equal={props.equal}></RightOperatorFrame>
      </WrapperStyle>
    </Container>
  );
};

export default ButtonFrame;
