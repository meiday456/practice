import React, {ReactElement} from "react";
import styled from "@emotion/styled";

const DivStyle = styled.div`
  padding: 5px 7px;
  min-height: 40px;
  text-align: right;

  p {
    margin-top: 10px;
    color: var(--color-grey);
  }
`;

const HistoryWindow = ({calcCode}: {calcCode: string[]}): ReactElement => {
  const history = calcCode.reduce((prev, cur) => {
    return `${prev}${cur}`;
  }, "");

  return (
    <DivStyle>
      <p>{history}</p>
    </DivStyle>
  );
};

export default HistoryWindow;
