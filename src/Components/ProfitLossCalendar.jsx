import React, { useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const profitDates = [
  "2024-12-03",
  "2024-12-08",
  "2024-12-15",
  "2024-12-25",
  "2025-01-05",
];
const lossDates = [
  "2024-12-06",
  "2024-12-12",
  "2024-12-20",
  "2024-12-22",
  "2025-01-02",
  "2025-01-12",
  "2025-01-16",
];

const ProfitLossCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = useMemo(() => {
    const profitEvents = profitDates.map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title: "Profit",
      color: "green",
    }));

    const lossEvents = lossDates.map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title: "Loss",
      color: "red",
    }));

    return [...profitEvents, ...lossEvents];
  }, []);

  const dayPropGetter = (date) => {
    const calendarMonth = currentDate.getMonth();
    const isOtherMonth = date.getMonth() !== calendarMonth;
    const today = new Date();
    const profitDate = profitDates.includes(format(date, "yyyy-MM-dd"));
    const lossDate = lossDates.includes(format(date, "yyyy-MM-dd"));
    const isToday = format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

    if (isToday) {
      return {
        className: "today",
        style: {
          backgroundColor: "#ab20fd",
          color: "white",
        },
      };
    }

    if (isOtherMonth) {
      return {
        className: "other-month",
        style: {
          backgroundColor: "rgba(200, 200, 200, 0.3)",
          color: "darkgray",
        },
      };
    }

    if (profitDate) {
      return {
        className: "profit-day",
        style: {
          backgroundColor: "rgba(0, 255, 0, 0.5)",
          color: "green",
        },
      };
    }

    if (lossDate) {
      return {
        className: "loss-day",
        style: {
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          color: "red",
        },
      };
    }

    return {};
  };

  return (
    <div className="min-h-screen w-[100%]  p-2 bg-zinc-950 flex  items-center flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4 text-white">Analysis Calendar</h1>
      <div className="h-[100%] w-[70%] bg-[#000] rounded-lg shadow-lg text-white p-2">
        <Calendar
          localizer={localizer}
          //   events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month"]}
          defaultView="month"
          defaultDate={new Date(2024, 11, 1)}
          dayPropGetter={dayPropGetter}
          onNavigate={(date) => setCurrentDate(date)}
        />
      </div>
      <div className="mt-4 flex justify-center space-x-4 text-white">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-900 border border-green-500 mr-2"></div>
          <span>Profit</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-900 border border-red-500 mr-2"></div>
          <span>Loss</span>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossCalendar;
