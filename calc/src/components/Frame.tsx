import React, {ReactElement, useEffect, useState} from "react";

import styled from "@emotion/styled";
import ResultWindow from "./ResultWindow";
import ButtonFrame from "./ButtonFrame";
import {MATH_SYMBOL_REG, NUM_REG, NUM_WITH_DOT_REG, PERCENT_AS} from "../util/Utils";
import {ArithmeticSymbols} from "../types/CalculatorTypes";

const Container = styled.main``;

const Frame = (): ReactElement => {
  const [result, setResult] = useState<number>(0);
  const [calcCodeArray, setCalcCodeArray] = useState<string[]>([]);

  const addCalcCode = (code: string) => {
    if (NUM_REG.test(code)) return addNumberToCalcCodeArray(code);
    if (code === "←") return deleteCode();
    if (code === "AC") return reset();
    if (code === ".") return addDotToCalcCodeArray(code);
    if (code === "+/-") return changePlusMinusSymbol();

    addArithmeticToCalcCodeArray(code as ArithmeticSymbols);
  };

  const addNumberToCalcCodeArray = (code: string) => {
    const copyCalcCodeArray = [...calcCodeArray];
    const lastIndex = copyCalcCodeArray.length - 1;
    if (copyCalcCodeArray[lastIndex] === ")") return;

    if (copyCalcCodeArray[lastIndex] === "%") {
      return setCalcCodeArray([...copyCalcCodeArray, "*", code]);
    }
    return setCalcCodeArray([...copyCalcCodeArray, code]);
  };

  const deleteCode = () => {
    const copyCalcCodeArray = [...calcCodeArray];
    copyCalcCodeArray.pop();
    setCalcCodeArray(copyCalcCodeArray);
  };

  const allDeleteCode = () => {
    setCalcCodeArray([]);
  };

  const reset = () => {
    allDeleteCode();
    setResult(0);
  };

  const addDotToCalcCodeArray = (dot: ".") => {
    const copyCalcCodeArray = [...calcCodeArray].reverse();

    const lastMathSymbolIndex = copyCalcCodeArray.findIndex(code => MATH_SYMBOL_REG.test(code));
    const lastCodeBlock = copyCalcCodeArray.slice(0, lastMathSymbolIndex);

    const findDotIndex = lastCodeBlock.findIndex(code => code === ".");

    if (findDotIndex > -1) return;
    if (lastCodeBlock.length === 0) copyCalcCodeArray.unshift("0");
    copyCalcCodeArray.unshift(dot);

    setCalcCodeArray(copyCalcCodeArray.reverse());
  };

  const changePlusMinusSymbol = () => {
    const copyCalcCodeArray = [...calcCodeArray].reverse();
    const lastIndex = copyCalcCodeArray.length - 1;
    const symbolLastIndex = copyCalcCodeArray.findIndex(code => MATH_SYMBOL_REG.test(code));

    if (symbolLastIndex === -1) {
      copyCalcCodeArray.push("-");
    } else if (symbolLastIndex !== lastIndex && symbolLastIndex > 0) {
      copyCalcCodeArray.splice(symbolLastIndex, 0, "(");
      copyCalcCodeArray.splice(symbolLastIndex, 0, "-");
      copyCalcCodeArray.unshift(")");
    }
    setCalcCodeArray(copyCalcCodeArray.reverse());
  };

  const addArithmeticToCalcCodeArray = (code: ArithmeticSymbols) => {
    const copyCalcCodeArray = [...calcCodeArray];
    const lastIndex = copyCalcCodeArray.length - 1;
    const last = copyCalcCodeArray[lastIndex] ?? "";

    if (copyCalcCodeArray.length === 0 && !(code === "-" || code === "+")) return;

    if (NUM_WITH_DOT_REG.test(last)) {
      copyCalcCodeArray.push(code);
    } else {
      copyCalcCodeArray.splice(lastIndex, 1, code);
    }

    setCalcCodeArray(copyCalcCodeArray);
  };

  const equal = () => {
    if (calcCodeArray.length === 0) return;

    const formula = calcCodeArray
      .map((code, index) => {
        if (index !== calcCodeArray.length - 1 && code === "%") return PERCENT_AS;
        if (index === calcCodeArray.length - 1 && MATH_SYMBOL_REG.test(code)) return null;

        return code;
      })
      .filter(code => code != null)
      .flat();
    const sum = (eval(formula.join("")) ?? 0) as number;
    setCalcCodeArray([]);

    setResult(sum);
  };

  const handlerKeydown = (e: KeyboardEvent) => {
    const {key} = e;

    if (NUM_REG.test(key)) return addNumberToCalcCodeArray(key);
    if (key === "Backspace") return deleteCode();
    if (key === "Escape") return reset();
    if (key === ".") return addDotToCalcCodeArray(key);
    if (key === "-" || key === "+" || key === "/" || key === "*" || key === "%") {
      return addArithmeticToCalcCodeArray(key);
    }

    if (key === "Enter") equal();
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerKeydown);

    return () => {
      document.removeEventListener("keydown", handlerKeydown);
    };
  }, [calcCodeArray]);

  return (
    <Container>
      <ResultWindow result={result} calcCode={calcCodeArray} />
      <ButtonFrame addCalcCode={addCalcCode} equal={equal} />
    </Container>
  );
};

export default Frame;
