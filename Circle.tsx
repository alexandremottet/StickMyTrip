import React from 'react';
import styled from 'styled-components';

function Circle({ className }) {
  return (
    <svg className={className}>
      <g>
        <rect
          width="100%"
          height="100%"
          fill="none"
          rx="100"
          ry="100"
          stroke="#EC3463"
          stroke-width="7"
          stroke-dasharray="50%,13%"
          stroke-dashoffset="86"
          stroke-linecap="butt"
        />
      </g>
    </svg>
  );
}

const StyledCircle = styled(Circle)`
border-radius: 99px;
background:green;
`;

export default StyledCircle;
