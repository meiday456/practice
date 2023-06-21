import React, {ReactElement} from "react";
import styled from "@emotion/styled";

const DivStyle = styled.div`
  display: flex;
  height: 70px;
  padding: 5px 7px;
  justify-content: center;
  flex-direction: column;

  p {
    text-align: right;
    color: var(--color-white);
    font-size: 18px;
  }
`;
const PresentWindow = ({result}: {result: number}): ReactElement => {
  return (
    <DivStyle>
      <p>{result}</p>
    </DivStyle>
  );
};
export default React.memo(PresentWindow, (prevProps, nextProps) => {
  return prevProps.result === nextProps.result;
});
