import React, {ReactElement} from "react";
import {css, Global} from "@emotion/react";
import emotionReset from "emotion-reset";
import FontFaces from "./FontFace";

const GlobalStyle = (): ReactElement => {
  return (
    <Global
      styles={css`
        ${emotionReset};
        ${FontFaces};

        :root {
          --color-darkDrown: rgb(52, 52, 52);
          --color-white: rgb(239, 239, 239);
          --color-white-70: rgba(239, 239, 239, 0.7);
          --color-white-50: rgba(239, 239, 239, 0.5);
          --color-white-30: rgba(239, 239, 239, 0.3);
          --color-darGrey: rgba(92, 92, 92);
          --color-darGrey-50: rgba(92, 92, 92, 0.5);
          --color-grey: rgb(204, 204, 204);
          --color-grey-50: rgb(204, 204, 204, 0.5);
          --color-grey-30: rgb(204, 204, 204, 0.3);
          --color-grey-10: rgb(204, 204, 204, 0.1);
          --color-incarnadine: rgb(241, 165, 121);
          --color-orange: rgb(233, 146, 115);
          --color-green: #27ae60;
          --color-yellow: #f1c40f;
          --color-red: #e74c3c;
        }

        * {
          box-sizing: border-box;
        }

        body {
          display: flex;
          height: 100vh;
          margin: 0;
          padding: 0;
          justify-content: center;
          align-items: center;
          font-family: "NotoSansKR Medium";
          background: linear-gradient(var(--color-incarnadine), var(--color-red)) no-repeat;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
