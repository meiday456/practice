import React, {ReactElement} from "react";
import styled from "@emotion/styled";
import PresentWindow from "./PresentWindow";
import HistoryWindow from "./HistoryWindow";

interface Props {
  result: number;
  calcCode: string[];
}

const Container = styled.section`
  background-color: var(--color-darkDrown);
  border-radius: 15px 15px 0 0;
`;
const ResultWindow = ({result, calcCode}: Props): ReactElement => {
  return (
    <Container>
      <HistoryWindow calcCode={calcCode} />
      <PresentWindow result={result} />
    </Container>
  );
};

export default ResultWindow;
