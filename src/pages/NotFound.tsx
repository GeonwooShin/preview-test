import Layout from '@components/common/Layout';
import { memo } from 'react';
import styled from 'styled-components';

const NotFound = memo(() => {
  return (
    <Layout>
      <StyledContainer>존재하지 않는 페이지 입니다.</StyledContainer>
    </Layout>
  );
});

const StyledContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
