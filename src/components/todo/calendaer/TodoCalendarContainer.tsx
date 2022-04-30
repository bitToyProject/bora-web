import Calendar from 'components/common/calendar/Calendar';
import React from 'react';
import { ITodo } from 'types/todo.types';

interface Props {
  items: ITodo[];
}
const TodoCalendarContainer = ({ items }: Props) => {
  return <Calendar />;
};

export default TodoCalendarContainer;
