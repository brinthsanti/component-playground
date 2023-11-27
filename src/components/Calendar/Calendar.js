import React, { useState } from 'react';
import './index.css';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const todaysDate = new Date();
const initialState = {
  date: todaysDate.getDate(),
  month: todaysDate.getMonth(),
  year: todaysDate.getFullYear()
};

export default function Calendar() {
  const [dateConfig, setDateConfig] = useState(initialState);

  function handleYearChange(action) {
    let { year } = dateConfig;
    if (action === 'prev') {
      year--;
    } else {
      year++;
    }
    setDateConfig({ ...dateConfig, year });
  }

  function handleMonthChange(action) {
    let { month } = dateConfig;
    if (action === 'prev') {
      month--;
    } else {
      month++;
    }
    month = month % 12;
    setDateConfig({ ...dateConfig, month });
  }

  const { date, month, year } = dateConfig;
  const currentDate = new Date(year, month, date);
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const dateDifference = (lastDay - firstDay) / _MS_PER_DAY + 1;

  return (
    <div className='calendar'>
      <div className='controls'>
        <div onClick={() => handleYearChange('prev')}>{'<<'}</div>
        <div onClick={() => handleMonthChange('prev')}>{'<'}</div>
        <div className='descrip'>{`${months[currentDate.getMonth()]}  ${currentDate.getFullYear()}`}</div>
        <div onClick={() => handleMonthChange('next')}>{'>'}</div>
        <div onClick={() => handleYearChange('next')}>{'>>'}</div>
      </div>
      
      <div className='date_grid'>
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
        {[...Array(firstDay.getDay())].map((_, index) => {
          return <div key={index + 1}></div>;
        })}
        {[...Array(dateDifference)].map((_, index) => {
          return <div key={index + 1}>{index + 1}</div>;
        })}
      </div>
    </div>
  );
}
