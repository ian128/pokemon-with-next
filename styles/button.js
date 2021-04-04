import { css } from '@emotion/react'
import { ColorPallete } from './colors'
import Enum from './enum'

const ButtonCss={
  btn: css`
    margin-right: ${Enum.xs};
    margin-bottom: ${Enum.xs};
    padding: 8pt 8pt 8pt 8pt;
    margin-bottom: 8pt;
    border-radius: 4pt;
    cursor: pointer;
    margin-bottom: 8pt;
    animation: all 0.3s;
    outline: none;
    &:hover{
      filter: brightness(1.1);
    }
    &:disabled{
      pointer-events: none;
      filter: grayscale(0.8);
    }
  `,
  primary: css`
    color: white;
    background-color: ${ColorPallete.primary};
  `,
  secondary: css`
    color:white;
    background-color: ${ColorPallete.secondary};
  `,
  success: css`
    color:white;
    background-color: ${ColorPallete.success};
  `,
  danger: css`
    color:white;
    background-color: ${ColorPallete.danger};
  `,
  info: css`
    color:white;
    background-color: ${ColorPallete.info};
  `,
  gray: css`
    color:black;
    background-color: ${ColorPallete.gray};
  `
}

export default ButtonCss