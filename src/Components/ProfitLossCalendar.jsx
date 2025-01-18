import React, { useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const profitDates = ['2024-12-03', '2024-12-08', '2024-12-15', '2024-12-25', '2025-01-05'];
const lossDates = ['2024-12-06', '2024-12-12', '2024-12-20', '2024-12-22', '2025-01-02', '2025-01-12', '2025-01-16'];

const ProfitLossCalendar = () => {
  const events = useMemo(() => {
    const profitEvents = profitDates.map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title: 'Profit',
      color: 'green',
    }));

    const lossEvents = lossDates.map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title: 'Loss',
      color: 'red',
    }));

    return [...profitEvents, ...lossEvents];
  }, []);

  const dayPropGetter = (date) => {
    const profitDate = profitDates.includes(format(date, 'yyyy-MM-dd'));
    const lossDate = lossDates.includes(format(date, 'yyyy-MM-dd'));

    if (profitDate) {
      return {
        className: 'profit-day',
        style: {
          backgroundColor: 'rgba(15, 184, 127,0.8)',
          color: 'green',
        },
      };
    }

    if (lossDate) {
      return {
        className: 'loss-day',
        style: {
          backgroundColor: 'rgba(239, 68, 68,0.8)',
          color: 'red',
        },
      };
    }

    return {};
  };

  return (
    <div className="h-screen p-4 bg-black border-[#27272a] border shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-4">Analysis Calendar</h1>
      <div className="h-5/6  border-[#27272a] border rounded-lg shadow-lg overflow-hidden">
        <Calendar
          localizer={localizer}
        //   events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month']}
          defaultView="month"
          defaultDate={new Date(2024, 11, 1)}
          dayPropGetter={dayPropGetter}
        />
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 border border-green-500 mr-2"></div>
          <span>Profit</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 border border-red-500 mr-2"></div>
          <span>Loss</span>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossCalendar;
