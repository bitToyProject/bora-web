import styled from '@emotion/styled';
import { ArrowIcon } from 'components/common/icons/ArrowIcons';
import { ColLayout } from 'layouts/wrapper/PageLayout';
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
      <InputWrapper>{TitleInput}</InputWrapper>
      <InputWrapper>{DescriptionInput}</InputWrapper>

      <Detail>
        <DetailTop>
          <span>Details</span>
          <DetailIcon onClick={onToggle}>
            <ArrowIcon type="up" color="#fff" />
          </DetailIcon>
        </DetailTop>

        <DetailBottom show={show}>
          <ColLayout>
            {DuedateInput}
            {PointInput}
          </ColLayout>
          <ColLayout>
            {PriorityInput}
            {AssigneeInput}
          </ColLayout>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
