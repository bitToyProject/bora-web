import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { getMonthStartEndDate, getNewDateObj } from 'utils/date';
import { ArrowIcon } from '../icons/ArrowIcons';

const Calendar = () => {
  const { year, month } = getNewDateObj(new Date());

  const [thisYear, setThisYear] = useState(Number(year));
  const [thisMonth, setThisMonth] = useState(Number(month));
  const [thisDate, setThisDate] = useState<number[]>([]);

  const { endDate, endDay } = getMonthStartEndDate(new Date(thisYear, thisMonth, 1));
  const firstDateIndex = thisDate.indexOf(1);
  const lastDateIndex = thisDate.lastIndexOf(endDate);

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
  }, [thisMonth, thisYear, endDate, endDay]);

  const handleClickPrevMonth = () => {
    if (thisMonth !== 1) {
      setThisMonth(thisMonth - 1);
    } else {
      setThisMonth(thisMonth + 11);
      setThisYear(thisYear - 1);
    }
    setThisDate([]);
  };

  const handleClickNextMonth = () => {
    if (thisMonth !== 12) {
      setThisMonth(thisMonth + 1);
    } else {
      setThisMonth(thisMonth - 11);
      setThisYear(thisYear + 1);
    }
    setThisDate([]);
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
  display: flex;
  flex-direction: row;
  padding: 15px 0 0 15px;
  color: ${(props) => (props.block ? '#000' : props.theme.colors.gray)};
`;
