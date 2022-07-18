import { Global, keyframes } from "@emotion/react";

/*
const scaleMovement = keyframes`
  0%   { transform: scale(1);}
  50%  { transform: scale(.8); }
  100% { transform: scale(1); }
`;
 
const spinMovement = keyframes` 100% { transform: rotate(360deg); } `;
*/

const asymmetricalMovement = keyframes`
  0% { transform: translate(0, 0) }
  20% { transform: translate(-50px, 50px) }
  40% { transform: translate(-50px, -50px) }
  60% { transform: translate(50px, 50px) }
  80% { transform: translate(50px, -50px) }
  100% { transform: translate(0, 0) }
`;

// export const scaleMovementAnimation = `${scaleMovement} infinite 2s linear`;
// export const spinMovementAnimation = `${spinMovement} infinite 60s linear`;
export const asymmetricalMovementAnimation = `${asymmetricalMovement} infinite 4s linear`;

const GlobalStyles = () => {
  return (
    <Global
      styles={`
        .tw-cursor {
          opacity: 0;
        }

        .line__1,
        .line__2,
        .line__3,
        .line__4 {
          white-space: nowrap; /* keep text in one line */
          overflow: hidden; /* hide text behind the cursor */          
        }
        
        .line__1 {
          border-right: 2px solid rgba(17, 17, 17, 0);
        
          /* define animation types for text + cursor */
          animation: animated-text__1 2s steps(30, end) 1s 1 normal both,
            animated-cursor__1 300ms steps(30, end) 8;
        }
        
        .line__2 {
          border-right: 2px solid rgba(17, 17, 17, 0);
        
          /* define animation types for text + cursor */
          animation: animated-text__2 2s steps(30, end) 1s 1 normal both,
            animated-cursor__2 300ms steps(30, end) 4;
          -webkit-animation-delay: 3s;
          animation-delay: 3s;
        }

        .line__3 {
          border-right: 2px solid rgba(17, 17, 17, 0);
        
          animation: animated-text__3 2s steps(30, end) 1s 1 normal both,
            animated-cursor__3 300ms steps(30, end) 4;
          -webkit-animation-delay: 5s;
          animation-delay: 5s;
        }

        .line__4 {
          border-right: 2px solid rgba(17, 17, 17, 0);
        
          animation: animated-text__4 2s steps(30, end) 1s 1 normal both,
            animated-cursor__4 300ms steps(30, end) 6;
          -webkit-animation-delay: 7s;
          animation-delay: 7s;
        }
        
        @keyframes animated-cursor__1 {
          from {
            border-right-color: rgba(17, 17, 17, 0.9);
          }
          to {
            border-right-color: rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes animated-cursor__2 {
          from {
            border-right-color: rgba(17, 17, 17, 0.9);
          }
          to {
            border-right-color: rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes animated-cursor__3 {
          from {
            border-right-color: rgba(17, 17, 17, 0.9);
          }
          to {
            border-right-color: rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes animated-cursor__4 {
          from {
            border-right-color: rgba(17, 17, 17, 0.9);
          }
          to {
            border-right-color: rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes animated-text__1 {
          from {
            width: 0;
          }
          to {
            width: 45rem;
          }
        }
        
        @keyframes animated-text__2 {
          from {
            width: 0;
          }
          to {
            width: 29rem;
          }
        }
        @keyframes animated-text__3 {
          from {
            width: 0;
          }
          to {
            width: 45rem;
          }
        }
        @keyframes animated-text__4 {
          from {
            width: 0;
          }
          to {
            width: 45rem;
          }
        }
        `}
    />
  );
};

export default GlobalStyles;