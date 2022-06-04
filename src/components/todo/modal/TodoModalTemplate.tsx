import styled from '@emotion/styled';
import { ArrowIcon } from 'components/common/icons/ArrowIcons';
import React, { ReactElement } from 'react';

interface Props {
  show: boolean;
  onToggle: () => void;
  TitleInput: ReactElement;
  DescriptionInput: ReactElement;
  SubmitButton: ReactElement;
  DuedateInput: ReactElement;
  PointInput: ReactElement;
  PriorityInput: ReactElement;
  AssigneeInput: ReactElement;
}

const TodoModalTemplate = ({
  show,
  onToggle,
  TitleInput,
  DescriptionInput,
  DuedateInput,
  PointInput,
  PriorityInput,
  AssigneeInput,
  SubmitButton,
}: Props) => {
  return (
    <TodoModalTemplateBlock>
      <InputWrapper>
        {TitleInput}
        {DescriptionInput}
      </InputWrapper>

      <Detail>
        <DetailTop>
          <span>Details</span>
          <DetailIcon onClick={onToggle}>
            <ArrowIcon type="up" color="#fff" />
          </DetailIcon>
        </DetailTop>

        <DetailBottom show={show}>
          <DetailWrapper>
            <SubTitle>Due date</SubTitle>
            {DuedateInput}
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Point</SubTitle>
            {PointInput}
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Priority</SubTitle>
            {PriorityInput}
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Assignee</SubTitle>
            {AssigneeInput}
          </DetailWrapper>
        </DetailBottom>
      </Detail>

      <ButtonWrapper>{SubmitButton}</ButtonWrapper>
    </TodoModalTemplateBlock>
  );
};

export default TodoModalTemplate;

const TodoModalTemplateBlock = styled.div``;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Detail = styled.div`
  border: 1px solid #fff;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
`;

const DetailTop = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
`;

const DetailIcon = styled.div`
  cursor: pointer;
`;

const DetailBottom = styled.div<{ show?: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const DetailWrapper = styled.div`
  display: flex;
  padding: 10px;
  font-size: 14px;
`;

const SubTitle = styled.span`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
