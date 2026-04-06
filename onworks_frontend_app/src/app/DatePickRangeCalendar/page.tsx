"use client";
import CircleCloseIcon from "../../icons/CircleCloseIcon";
import { useCustomerStore } from "../../store/useCustomerStore";

import React, { useState } from "react";
import Calendar from "../Calendar/page";
interface props {
  onClose: () => void;
}
export default function DatePickRangeCalendar({ onClose }: props) {
  const setDateRangeCalendar = useCustomerStore(
    (state) => state.setDateRangeCalendar
  );
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const [startMonth, setStartMonth] = useState(new Date());
  const [endMonth, setEndMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
  );
  const [Color, setColor] = useState<string>("none");

  const handleStartMonthChange = (month: number, year: number) => {
    const newStart = new Date(year, month, 1);
    setStartMonth(newStart);

    if (
      endMonth.getFullYear() < newStart.getFullYear() ||
      (endMonth.getFullYear() === newStart.getFullYear() &&
        endMonth.getMonth() <= newStart.getMonth())
    ) {
      setEndMonth(new Date(year, month + 1, 1));
    }
  };

  const handleEndMonthChange = (month: number, year: number) => {
    const newEnd = new Date(year, month, 1);

    if (
      newEnd.getFullYear() < startMonth.getFullYear() ||
      (newEnd.getFullYear() === startMonth.getFullYear() &&
        newEnd.getMonth() <= startMonth.getMonth())
    ) {
      setStartMonth(new Date(year, month, 1));
      setEndMonth(new Date(year, month + 1, 1));
    } else {
      setEndMonth(newEnd);
    }
  };

  const handlePreset = (type: string) => {
    const today = new Date();
    let start: Date | null = null;
    let end: Date | null = null;

    switch (type) {
      case "today":
        start = new Date(today);
        end = new Date(today);
        break;
      case "yesterday":
        start = new Date(today);
        start.setDate(start.getDate() - 1);
        end = new Date(start);
        break;
      case "lastWeek":
        const lastSunday = new Date(today);
        lastSunday.setDate(today.getDate() - today.getDay() - 7);
        const lastSaturday = new Date(lastSunday);
        lastSaturday.setDate(lastSunday.getDate() + 6);
        start = lastSunday;
        end = lastSaturday;
        break;
      case "lastMonth":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case "custom":
        start = null;
        end = null;
        break;
    }

    setRange({ start, end });
    setColor(type);

    if (start) setStartMonth(start);
    if (start)
      setEndMonth(new Date(start.getFullYear(), start.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    if (Color === "custom") {
      if (!range.start || (range.start && range.end)) {
        setRange({ start: date, end: null });
      } else if (range.start && !range.end) {
        if (date >= range.start) {
          setRange({ start: range.start, end: date });
        } else {
          setRange({ start: date, end: range.start });
        }
      }
    } else if (Color === "none") {
      setRange({ start: date, end: date });
    }
  };

  const getDayClass = (date: Date | null, idx?: number) => {
    if (!date) return "";

    const isStart =
      range.start && date.toDateString() === range.start.toDateString();
    const isEnd = range.end && date.toDateString() === range.end.toDateString();
    const inRange =
      range.start && range.end && date > range.start && date < range.end;

    if (isStart || isEnd) {
      return "p-2 bg-black text-white rounded-full";
    }

    if (inRange) {
      const isMonday = idx !== undefined && idx % 7 === 0;
      const isSunday = idx !== undefined && idx % 7 === 6;

      const isNextAfterStart =
        range.start &&
        date.toDateString() ===
          new Date(
            range.start.getFullYear(),
            range.start.getMonth(),
            range.start.getDate() + 1
          ).toDateString();

      const isPrevBeforeEnd =
        range.end &&
        date.toDateString() ===
          new Date(
            range.end.getFullYear(),
            range.end.getMonth(),
            range.end.getDate() - 1
          ).toDateString();

      const isFirstOfMonth = date.getDate() === 1;
      const isLastOfMonth =
        date.getDate() ===
        new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      if (isNextAfterStart) {
        return "p-2 bg-gray-200 rounded-l-full ";
      }
      if (isPrevBeforeEnd) {
        return "p-2 bg-gray-200 rounded-r-full ";
      }

      if (isMonday || isFirstOfMonth) return "p-2 bg-gray-200 rounded-l-full";

      if (isSunday || isLastOfMonth) return "p-2 bg-gray-200 rounded-r-full";

      return "p-2 bg-gray-200";
    }

    return " p-2 hover:bg-gray-100";
  };

  return (
    <div className="flex m-19 bg-white rounded-lg shadow-lg p-4 gap-4">
      <div className="flex flex-col gap-2">
        {["today", "yesterday", "lastWeek", "lastMonth", "custom"].map(
          (type) => (
            <button
              key={type}
              className={`px-3 py-2 border border-gray-200 rounded ${
                Color === type ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => handlePreset(type)}
            >
              {type === "today"
                ? "Today"
                : type === "yesterday"
                ? "Yesterday"
                : type === "lastWeek"
                ? "Last Week"
                : type === "lastMonth"
                ? "Last Month"
                : "Custom Date"}
            </button>
          )
        )}
      </div>
      <div className="border-r border-gray-200 h-65" />
      <div className="">
        <div className="flex gap-6">
          <Calendar
            month={startMonth}
            onMonthChange={handleStartMonthChange}
            selectedDates={range}
            onDateClick={handleDateClick}
            getDayClass={getDayClass}
          />

          <Calendar
            month={endMonth}
            onMonthChange={handleEndMonthChange}
            selectedDates={range}
            onDateClick={handleDateClick}
            getDayClass={getDayClass}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="rounded-full font-semibold text-xs shadow-md w-[120px] border border-black py-2 hover:bg-gray-100"
            onClick={() => {
              const today = new Date();
              setRange({ start: null, end: null });
              setStartMonth(new Date(today.getFullYear(), today.getMonth(), 1));
              setEndMonth(
                new Date(today.getFullYear(), today.getMonth() + 1, 1)
              );
              setColor("none");
            }}
          >
            Reset
          </button>

          <button
            className="rounded-full font-semibold text-xs shadow-md w-[120px]  text-white bg-[#F76B1C]  py-2"
            onClick={() => {
              console.log("Apply clicked:", range);
              setDateRangeCalendar(range);
              range.start && range.end && onClose();
            }}
          >
            Apply
          </button>
        </div>
      </div>
      <div>
        <button onClick={onClose}>
          <CircleCloseIcon />
        </button>
      </div>
    </div>
  );
}
