import styled from '@emotion/styled';
import { ArrowIcon } from 'components/common/icons/ArrowIcons';
import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react';
import { ITodo } from 'types/todo.types';

interface Props {
  item: ITodo;
  show: boolean;
  TitleInput: ReactElement;
  DescriptionInput: ReactElement;
  SubmitButton: ReactElement;
  onToggle: () => void;
  onChange: (e: ChangeEvent) => void;
}

const TodoModalTemplate = ({
  item,
  show,
  onToggle,
  TitleInput,
  DescriptionInput,
  SubmitButton,
  onChange,
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
            <Description onChange={onChange} placeholder="-" value={item.end} name="end" />
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Point</SubTitle>
            <Description onChange={onChange} placeholder="-" value={item.point} name="point" />
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Priority</SubTitle>
            <Description
              onChange={onChange}
              placeholder="-"
              value={item.priority}
              name="priority"
            />
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>Assignee</SubTitle>
            <Description
              onChange={onChange}
              placeholder="-"
              value={item.assignee || ''}
              name="asignee"
            />
          </DetailWrapper>

          <DetailWrapper>
            <SubTitle>regdate</SubTitle>
            <Description onChange={onChange} placeholder="-" value={item.regDate} name="regDate" />
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
  border: 1px solid #fff;
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

const Description = styled.input`
  flex: 2;
  color: #a8a8a8;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
