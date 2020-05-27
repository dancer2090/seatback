import { styled, css } from 'frontity';

export const globalStyles = css`
  box-sizing: border-box;
  padding: 0;
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0 auto;
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
  button,
  input,
  textarea {
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .animated {
    animation-duration: 2s;
    animation-fill-mode: both;
  }
  .slideUp {
    animation-timing-function: ease;
    animation-duration: 800ms;
    animation-delay: 150ms;
  }
  @keyframes slideUp {
    from {
      transform: translateY(5%) scaleY(1.1);
      opacity: 0;
    }
    to {
      transform: translateY(0%) scaleY(1);
      opacity: 1;
    }
  }
  .fadeIn {
    animation-duration: 900ms;
    animation-delay: 150ms;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .zoom {
    transition: transform 8s linear;
    animation-duration: 4s;
    animation-timing-function: ease;
  }
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
  .card1 {
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-name: card1;
    animation-iteration-count: infinite;
  }
  @keyframes card1 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(-0.5%, -1%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(0.5%, 1%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }
  .card2 {
    animation-duration: 6s;
    animation-timing-function: linear;
    animation-name: "card2";
    animation-iteration-count: infinite;
  }
  @keyframes card2 {
    from {
      transform: translate(0%, 0%);
    }
    25% {
      transform: translate(0%, 2%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    75% {
      transform: translate(-0%, -2%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }
`;

export const SiteContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
