/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const centerAlignStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const resetLinkStyle = css`
  text-decoration: none;
  color: white;
`;

export const underLineAnimationStyle = css`
  position: relative;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;

  &::after {
    position: absolute;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background: white;
    bottom: -1px;
    transform: scale(0, 1);
    transform-origin: right top; /*変形（アンダーラインの伸長）の原点がaタグ（各メニュー）の右端*/
    transition: transform 0.3s; /*変形の時間*/
  }

  &:hover {
    &::after {
      transform: scale(1, 1); /*ホバー後、x軸方向に1（相対値）伸長*/
      transform-origin: left top; /*左から右に向かう*/
    }
  }
`;
