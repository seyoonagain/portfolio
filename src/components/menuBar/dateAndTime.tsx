'use client';

import { useCallback, useEffect, useState } from 'react';

import { DAYS, MONTHS } from './constants';

const DateAndTime = () => {
  const [dateAndTime, setDateAndTime] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const padStart = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const setCurrentTimeAndDate = useCallback(() => {
    const now: Date = new Date();
    const day: string = DAYS[now.getDay()];
    const month: string = MONTHS[now.getMonth()];
    const date: number = now.getDate();
    const hours: number =
      now.getHours() === 0 ? 12 : now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const minutes: number = now.getMinutes();
    const seconds: number = now.getSeconds();
    setDateAndTime(
      `${day} ${month} ${date}\xa0\xa0${hours}:${padStart(minutes)}:${padStart(seconds)}`,
    );
    setTime(`${padStart(hours)}:${padStart(minutes)}`);
  }, []);

  useEffect(() => {
    setCurrentTimeAndDate();

    const clock = setInterval(() => {
      setCurrentTimeAndDate();
    }, 1000);

    return () => clearInterval(clock);
  }, [setCurrentTimeAndDate]);

  return (
    <>
      <span className="sm:hidden">{time}</span>
      <span className="hidden sm:block">{dateAndTime}</span>
    </>
  );
};

export default DateAndTime;
