import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { ITodo } from 'types/todo.types';
import { getDiffDays, getMonthStartEndDate, getNewDateObj } from 'utils/date';
import { replaceZeroToBlank } from 'utils/replace';
import { ArrowIcon } from '../icons/ArrowIcons';

interface Props {
  items: ITodo[];
}

const Calendar = ({ items }: Props) => {
  const { year, month } = getNewDateObj(new Date());

  const [thisYear, setThisYear] = useState(Number(year));
  const [thisMonth, setThisMonth] = useState(Number(month));
  const [thisDate, setThisDate] = useState<number[]>([]);
  const [schedules, setSchedules] = useState<ITodo[] | null>(null);

  const { endDate, endDay } = getMonthStartEndDate(new Date(thisYear, thisMonth, 1));
  const firstDateIndex = thisDate.indexOf(1);
  const lastDateIndex = thisDate.lastIndexOf(endDate);

  const checkThisMonthSchedules = useCallback(() => {
    const isScheduled = items.filter((item) => {
      const schedulesYear = Number(item.start.substr(0, 4));
      const schedulesMonth = Number(replaceZeroToBlank(item.start.substr(5, 2)));
      return schedulesYear === thisYear && schedulesMonth === thisMonth;
    });

    if (!isScheduled) {
      return;
    }

    setSchedules(isScheduled);
  }, [items, thisMonth, thisYear]);

  useEffect(() => {
    const prevDate = new Date(thisYear, thisMonth - 1, 0).getDate();
    const prevDay = new Date(thisYear, thisMonth - 1, 0).getDay();

    const dates = [...Array(endDate + 1).keys()].slice(1);
    const CalendarPrevDate = [];
    const CalendarNextDate = [];

    if (prevDay !== 6) {
      for (let i = 0; i < prevDay + 1; i++) {
        CalendarPrevDate.unshift(prevDate - i);
      }
    }

    for (let i = 1; i < 7 - endDay; i++) {
      CalendarNextDate.push(i);
    }

    setThisDate(CalendarPrevDate.concat(dates, CalendarNextDate));
    checkThisMonthSchedules();
  }, [thisMonth, thisYear, endDate, endDay, checkThisMonthSchedules]);

  const handleClickPrevMonth = () => {
    if (thisMonth !== 1) {
      setThisMonth(thisMonth - 1);
    } else {
      setThisMonth(thisMonth + 11);
      setThisYear(thisYear - 1);
    }
    setThisDate([]);
    setSchedules(null);
  };

  const handleClickNextMonth = () => {
    if (thisMonth !== 12) {
      setThisMonth(thisMonth + 1);
    } else {
      setThisMonth(thisMonth - 11);
      setThisYear(thisYear + 1);
    }
    setThisDate([]);
    setSchedules(null);
  };

  const getSchedulePeriod = (day: number, index: number) => {
    if (!schedules) {
      return;
    }

    const target = schedules.filter((schedule) => Number(schedule.start.substr(-2)) === day);

    if (!target) {
      return;
    }

    const test = target.map((item) => {
      return getDiffDays(new Date(item.start), new Date(item.end)) + 1;
    });

    return test;
  };

  return (
    <CalendarBlock>
      <Header>
        <ArrowIconWrapper onClick={handleClickPrevMonth}>
          <ArrowIcon type="left" size={30} />
        </ArrowIconWrapper>
        <DateWrapper>
          {thisYear}년 {thisMonth}월
        </DateWrapper>
        <ArrowIconWrapper onClick={handleClickNextMonth}>
          <ArrowIcon type="right" size={30} />
        </ArrowIconWrapper>
      </Header>
      <CalendarDate>
        <Weeks>
          <Week>일</Week>
          <Week>월</Week>
          <Week>화</Week>
          <Week>수</Week>
          <Week>목</Week>
          <Week>금</Week>
          <Week>토</Week>
        </Weeks>
        <Days>
          {thisDate.map((day, i: number) => {
            return (
              <Day
                key={`calendar-day-${i}`}
                block={i >= firstDateIndex && i < lastDateIndex + 1 ? true : false}>
                {day}
                {schedules && getSchedulePeriod(day, i) && (
                  <Todo bgColor={'orange'} width={100}>
                    {schedules.map((schedule) => schedule.title)}
                  </Todo>
                )}
              </Day>
            );
          })}
        </Days>
      </CalendarDate>
    </CalendarBlock>
  );
};

export default Calendar;

const CalendarBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: 600;
  width: 100%;
`;

const ArrowIconWrapper = styled.div``;

const DateWrapper = styled.span``;

const CalendarDate = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 8px 10px;
  margin-top: 20px;
  font-size: 16px;
`;

const Weeks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const Week = styled.div`
  min-width: 13%;
  text-align: center;
  font-weight: 700;
  padding: 10px 20px;
`;

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.span<{ block?: boolean }>`
  width: calc(100% / 7);
  height: 90px;
  flex-direction: row;
  padding: 15px 0 0 15px;
  color: ${(props) => (props.block ? '#000' : props.theme.colors.gray)};
`;

const Todo = styled.span<{ bgColor?: string; width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: ${(props) => (props.width ? `calc(100% * ${props.width})` : '100%')};
  min-height: 11px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
  padding: 1px;
  font-size: 10px;
  cursor: pointer;
`;
