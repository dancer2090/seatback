import React from 'react';
import { styled } from 'frontity';
import {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_SMALL,
} from '../../../const/responsive';

const BgBox = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  max-width: 550px;
  height: auto;
  margin: 0 auto;
  transform: ${(props) => (props.reverse ? 'scale(-1,1)' : 'scale(1)')};

  @media (max-width: ${SIZE_DESCTOP_MEDIUM_2}px) {
    max-width: 500px;
    top: 20px;
  }

  @media (max-width: ${SIZE_DESCTOP_SMALL}px) {
    top: 0;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const SVG = styled.svg`
  .cls-1 {
    fill: #ccc;
  }
  .cls-1,
  .cls-10,
  .cls-11,
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7 {
    stroke: #2e293c;
  }
  .cls-1,
  .cls-10,
  .cls-2,
  .cls-3,
  .cls-4 {
    stroke-miterlimit: 10;
  }
  .cls-1,
  .cls-10,
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5 {
    stroke-width: 2px;
  }
  .cls-10,
  .cls-11,
  .cls-12,
  .cls-13,
  .cls-2 {
    fill: none;
  }
  .cls-3 {
    fill: #f5f6fa;
  }
  .cls-4 {
    fill: url(#linear-gradient);
  }
  .cls-5,
  .cls-7 {
    fill: #fff;
  }
  .cls-11,
  .cls-12,
  .cls-13,
  .cls-5 {
    stroke-linejoin: round;
  }
  .cls-6,
  .cls-7 {
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .cls-6 {
    fill: url(#linear-gradient-2);
  }
  .cls-8 {
    fill: #2e293c;
  }
  .cls-9 {
    fill: #52de97;
  }
  .cls-10,
  .cls-11,
  .cls-12,
  .cls-13 {
    stroke-linecap: round;
  }
  .cls-11,
  .cls-12,
  .cls-13 {
    stroke-width: 4px;
  }
  .cls-12 {
    stroke: #ccc;
  }
  .cls-13 {
    stroke: #52de97;
  }

  /* path {
    animation-name: 'card2';
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  } */

  @keyframes svgpathUpDown {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(0%, 1%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-0%, -1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  /* line.cls-13 {
    animation-name: 'svgPathRight';
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  } */

  @keyframes bg-el-1 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-1%, 5%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(1%, -3%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-1 {
    animation-name: "bg-el-1";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-2 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-5%, 5%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(3%, -3%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-2 {
    animation-name: "bg-el-2";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-3 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-5%, 5%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(3%, -3%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-3 {
    animation-name: "bg-el-3";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-4 {
    from {
      transform: translate(0%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(-1%, 1%) rotate(1deg);
    }
    50% {
      transform: translate(0%, 0%) rotate(0deg);
    }
    75% {
      transform: translate(1%, -1%) rotate(-1deg);
    }
    to {
      transform: translate(0%, 0%) rotate(0deg);
    }
  }

  .el-4 {
    animation-name: "bg-el-4";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-5 {
    from {
      transform: translate(0%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(-1%, 1%) rotate(1deg);
    }
    50% {
      transform: translate(0%, 0%) rotate(0deg);
    }
    75% {
      transform: translate(1%, -1%) rotate(-1deg);
    }
    to {
      transform: translate(0%, 0%) rotate(0deg);
    }
  }

  .el-5 {
    animation-name: "bg-el-5";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-6 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(2%, -2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-1%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-6 {
    animation-name: "bg-el-6";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-7 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(2%, -2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-1%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-7 {
    animation-name: "bg-el-7";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-8 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(3%, -2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-2%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-8 {
    animation-name: "bg-el-8";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-9 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(5%, -2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-4%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-9 {
    animation-name: "bg-el-9";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes bg-el-10 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(4%, -2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-3%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }

  .el-10 {
    animation-name: "bg-el-10";
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

const Background = (props) => (
  <BgBox {...props}>
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="-744.37"
          y1="706.64"
          x2="-744.37"
          y2="705.51"
          gradientTransform="matrix(183.69, 0, 0, -301.28, 137063.17, 213162.72)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.03" stopColor="#f9f9f9" />
          <stop offset="0.14" stopColor="#e5e5e5" />
          <stop offset="0.27" stopColor="#d6d6d6" />
          <stop offset="0.43" stopColor="#cecece" />
          <stop offset="0.69" stopColor="#ccc" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="-746.54"
          y1="690.82"
          x2="-746.54"
          y2="691.79"
          gradientTransform="matrix(0, -121.05, -209.68, 0, 145352.17, -90006.09)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.33" stopColor="#fbfbfc" />
          <stop offset="0.62" stopColor="#f1f0f5" />
          <stop offset="0.9" stopColor="#dfdeea" />
          <stop offset="1" stopColor="#d8d6e5" />
        </linearGradient>
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        <g id="Group_4811" data-name="Group 4811">
          <g id="Group_4804-3" data-name="Group 4804-3">
            <path
              id="Path_7725-3"
              data-name="Path 7725-3"
              className="cls-11 el-9"
              d="M640.72,304.62l-5.47-15.26-15.94,2.92L613.84,277l-15.94,2.91-5.47-15.26-15.95,2.91L571,252.32"
            />
          </g>
          <g id="Group_4805-3" data-name="Group 4805-3">
            <path
              id="Path_7726-3"
              data-name="Path 7726-3"
              className="cls-12 el-1"
              d="M282.47,566.14l-4.09-13.88-14.06,3.41-4.09-13.87-14.06,3.41-4.09-13.88"
            />
          </g>
          <g id="Group_4806-3" data-name="Group 4806-3">
            <path
              id="Path_7727-3"
              data-name="Path 7727-3"
              className="cls-12 el-7"
              d="M502,154.21c-8.15,1.66-16.65-2.54-18-11.89-.79-6.63-8.09-10.51-15.36-7.32"
            />
          </g>
          <path
            id="Path_7728-3"
            data-name="Path 7728-3"
            className="cls-13 el-5"
            d="M60.12,342.57a6.31,6.31,0,0,0,2.3,2.29l27,15.58a6.29,6.29,0,0,0,6.39-10.83l-.11-.06L68.7,334a6.28,6.28,0,0,0-8.58,8.59Z"
          />
          <line
            id="Line_252-3"
            data-name="Line 252-3"
            className="cls-13 el-6"
            x1="403.94"
            y1="171.98"
            x2="360.56"
            y2="146.97"
          />
          <line
            id="Line_253-3"
            data-name="Line 253-3"
            className="cls-13 el-2"
            x1="147.31"
            y1="527.05"
            x2="93.25"
            y2="495.88"
          />
          <line
            id="Line_254-3"
            data-name="Line 254-3"
            className="cls-11 el-3"
            x1="78.42"
            y1="487.33"
            x2="64.91"
            y2="479.54"
          />
          <line
            id="Line_255-3"
            data-name="Line 255-3"
            className="cls-13 el-10"
            x1="564.12"
            y1="399.03"
            x2="537.09"
            y2="383.45"
          />
          <path
            id="Path_7729-3"
            data-name="Path 7729-3"
            className="cls-12 el-4"
            d="M127.62,381a5.7,5.7,0,0,0,2.11,2.11l4.63,2.67a5.76,5.76,0,0,0,5.75-10l-4.63-2.67a5.76,5.76,0,0,0-7.86,7.87Z"
          />
          <path
            id="Path_7730-3"
            data-name="Path 7730-3"
            className="cls-13 el-8"
            d="M570.85,199.41a5.7,5.7,0,0,0,2.11,2.11l4.62,2.67a5.76,5.76,0,1,0,5.75-10l-4.62-2.67a5.76,5.76,0,0,0-7.86,7.87Z"
          />
        </g>
      </g>
    </SVG>
  </BgBox>
);

export default Background;
