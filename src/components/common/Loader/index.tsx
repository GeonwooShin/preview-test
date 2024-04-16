import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = memo(() => {
  return (
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  );
});

const StyledLoader = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid var(--task);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export default Loader;
