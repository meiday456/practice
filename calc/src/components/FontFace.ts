import {css} from "@emotion/react";
import NotoSansKRBlack from "../assets/fonts/NotoSansKR-Black.otf";
import NotoSansKRBold from "../assets/fonts/NotoSansKR-Bold.otf";
import NotoSansKRLight from "../assets/fonts/NotoSansKR-Light.otf";
import NotoSansKRMedium from "../assets/fonts/NotoSansKR-Medium.otf";
import NotoSansKRRegular from "../assets/fonts/NotoSansKR-Regular.otf";
import NotoSansKRThin from "../assets/fonts/NotoSansKR-Thin.otf";

const FontFaces = css`
  @font-face {
    font-family: "NotoSansKR Black";
    src: url(${NotoSansKRBlack}) format("opentype");
  }
  @font-face {
    font-family: "NotoSansKR Bold";
    src: url(${NotoSansKRBold}) format("opentype");
  }
  @font-face {
    font-family: "NotoSansKR Light";
    src: url(${NotoSansKRLight}) format("opentype");
  }
  @font-face {
    font-family: "NotoSansKR Medium";
    src: url(${NotoSansKRMedium}) format("opentype");
  }
  @font-face {
    font-family: "NotoSansKR Regular";
    src: url(${NotoSansKRRegular}) format("opentype");
  }
  @font-face {
    font-family: "NotoSansKR Thin";
    src: url(${NotoSansKRThin}) format("opentype");
  }
`;

export default FontFaces;
