// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const InshoreIcon = ({ isHover }) => {
  const cls1 = css`
    fill: ${isHover ? "#ffffff" : "#8991f7"};
  `

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 155 155"
    >
      <defs></defs>
      <title>INSHORE</title>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            css={cls1}
            d="M77.5,0A77.5,77.5,0,1,0,155,77.5,77.5,77.5,0,0,0,77.5,0Zm0,147A68.5,68.5,0,1,1,146,78.5,68.5,68.5,0,0,1,77.5,147Z"
          />
          <polygon css={cls1} points="59 53 36 108 45 108 64 63 65 55 59 53" />
          <polygon css={cls1} points="79 37 44 118 59 118 85 57 87 39 79 37" />
          <path
            css={cls1}
            d="M101,27,59,124H91l17-65,4-29Zm4,33L88,121H64l39-90,6,1Z"
          />
        </g>
      </g>
    </svg>
  )
}
