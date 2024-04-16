import { memo, useState } from 'react';
import { ModalProps } from 'src/@types/modal';
import styled from 'styled-components';

const AddModal = memo(({ onSubmit, onAbort }: ModalProps) => {
  const [taskInfo, setTaskInfo] = useState<string>('');
  const handleOutside = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    onAbort?.(new Error());
  };
  return (
    <StyledWrapper onClick={handleOutside}>
      <StyledContainer>
        <StyledFlexContainer>
          <StyledSpan>추가할 할일을 입력해주세요.</StyledSpan>
          <StyledInput onChange={(e) => setTaskInfo(e.target.value)} />
          <StyledButtonContainer>
            <StyledButton
              onClick={() => {
                onAbort?.(new Error());
              }}
              $colorType="disabled"
            >
              취소
            </StyledButton>
            <StyledButton
              onClick={() => {
                onSubmit?.(taskInfo);
              }}
              $colorType="active"
            >
              추가하기
            </StyledButton>
          </StyledButtonContainer>
        </StyledFlexContainer>
      </StyledContainer>
    </StyledWrapper>
  );
});

AddModal.displayName = 'AddModal';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 19, 30, 0.37);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledContainer = styled.article`
  width: 360px;
  height: 273px;
  margin: auto;
  padding: 24px;
  background-color: var(--white);
  border-radius: 8px;
  text-align: center;
`;

const StyledFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid var(--gray-4);
  border-radius: 8px;
  padding: 12px;
`;

const StyledButton = styled.button<{ $colorType: 'disabled' | 'active' }>`
  width: 100%;
  padding: 12px;
  background-color: ${({ $colorType }) =>
    $colorType === 'active' ? 'var(--task)' : 'var(--gray-4)'};
  color: var(--white);
  border-radius: 8px;
`;

export default AddModal;
