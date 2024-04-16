import styled from 'styled-components';
import ArrowRight from '@assets/arrow_right.svg';
import ArrowLeft from '@assets/arrow_left.svg';
import { memo } from 'react';

type HeaderProps = {
  curCalendar: Date;
  handlePreviousMonth: () => void;
  handleNextMonth: () => void;
  handleToday: () => void;
};

const Header = memo(
  ({
    curCalendar,
    handlePreviousMonth,
    handleNextMonth,
    handleToday,
  }: HeaderProps) => {
    return (
      <StyledContainer>
        <StyledYear>
          {curCalendar.getFullYear()}년 {curCalendar.getMonth() + 1}월
        </StyledYear>
        <StyledBtnContainer>
          <StyledBtn onClick={handlePreviousMonth}>
            <StyledIcon src={ArrowLeft} />
          </StyledBtn>
          <StyledTodayBtn onClick={handleToday}>오늘</StyledTodayBtn>
          <StyledBtn onClick={handleNextMonth}>
            <StyledIcon src={ArrowRight} />
          </StyledBtn>
        </StyledBtnContainer>
      </StyledContainer>
    );
  },
);

Header.displayName = 'Header';

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const StyledYear = styled.h1`
  font-size: 34px;
  font-weight: 700;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
`;

const StyledBtn = styled.button`
  border: 1px solid var(--gray-5);
  border-radius: 8px;
  padding: 2px 4px;
  height: 100%;
`;

const StyledTodayBtn = styled.button`
  border: 1px solid var(--gray-5);
  border-radius: 8px;
  padding: 2px 12px;
  height: 100%;
`;

const StyledIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export default Header;
