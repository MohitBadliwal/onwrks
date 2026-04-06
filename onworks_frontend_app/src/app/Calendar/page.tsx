"use client";
import GreaterThenIcon from "../../icons/GreaterThenIcon";
import LessThenIcon from "../../icons/LessThenIcon";
import React, { useEffect, useState } from "react";

interface CalendarProps {
  month?: Date;
  onMonthChange?: (month: number, year: number) => void;
  selectedDates?: { start: Date | null; end: Date | null };
  onDateClick?: (date: Date) => void;
  getDayClass?: (date: Date | null, idx: number) => string;
  onClose?: () => void;
  mode?: "forwardDate" | "backwardDate";
  maxDate?: Date;
  minDate?: Date;

}

export default function Calendar({
  month,
  onMonthChange,
  selectedDates,
  onDateClick,
  getDayClass,
  onClose,
  mode,
  maxDate,
  minDate,
}: CalendarProps) {
  const [internalMonth, setInternalMonth] = useState<Date>(month || new Date());
  const activeMonth = month || internalMonth;

  const today = new Date();
  const [internalSelected, setInternalSelected] = useState<Date | null>(
    selectedDates?.start || null
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("default", { month: "long" })
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i);

  const [view, setView] = useState<"day" | "month" | "year">("day");

  const getDaysArray = (date: Date) => {
    const year = date.getFullYear();
    const m = date.getMonth();
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    const rawFirstDay = new Date(year, m, 1).getDay();
    const firstDayOfMonth = (rawFirstDay + 6) % 7;

    const arr: (Date | null)[] = [];
    for (let i = 0; i < firstDayOfMonth; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      arr.push(new Date(Date.UTC(year, m, d)));
    }
    return arr;
  };

  const handleMonthChange = (m: number, y: number) => {
    if (onMonthChange) {
      onMonthChange(m, y);
    } else {
      setInternalMonth(new Date(y, m, 1));
    }
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  useEffect(() => {
    setInternalSelected(selectedDates?.start || null);
  }, [selectedDates]);

  useEffect(() => {
    if (selectedDates?.start) {
      setInternalMonth(
        new Date(
          selectedDates.start.getFullYear(),
          selectedDates.start.getMonth(),
          1
        )
      );
    }
  }, [selectedDates?.start]);

 useEffect(() => {
  if (minDate && activeMonth < minDate) {
    setInternalMonth(new Date(minDate.getFullYear(), minDate.getMonth(), 1));
  } else if (maxDate && activeMonth > maxDate) {
    setInternalMonth(new Date(maxDate.getFullYear(), maxDate.getMonth(), 1));
  }
}, [activeMonth, minDate, maxDate]);


  const isBeforeToday = (d: Date) =>
    d.getFullYear() < today.getFullYear() ||
    (d.getFullYear() === today.getFullYear() &&
      d.getMonth() < today.getMonth()) ||
    (d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() < today.getDate());

  const isAfterToday = (d: Date) =>
    d.getFullYear() > today.getFullYear() ||
    (d.getFullYear() === today.getFullYear() &&
      d.getMonth() > today.getMonth()) ||
    (d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() > today.getDate());

  const canGoNext = () => {
    if (!maxDate) return true;
    if (view === "day") {
      return (
        activeMonth.getFullYear() < maxDate.getFullYear() ||
        (activeMonth.getFullYear() === maxDate.getFullYear() &&
          activeMonth.getMonth() < maxDate.getMonth())
      );
    }
    if (view === "month") {
      return activeMonth.getFullYear() < maxDate.getFullYear();
    }
    if (view === "year") {
      return activeMonth.getFullYear() + 11 < maxDate.getFullYear();
    }
    return true;
  };

  const canGoPrev = () => {
  if (!minDate) return true;
  if (view === "day") {
    return (
      activeMonth.getFullYear() > minDate.getFullYear() ||
      (activeMonth.getFullYear() === minDate.getFullYear() &&
        activeMonth.getMonth() > minDate.getMonth())
    );
  }
  if (view === "month") {
    return activeMonth.getFullYear() > minDate.getFullYear();
  }
  if (view === "year") {
    return activeMonth.getFullYear() - 11 >= minDate.getFullYear();
  }
  return true;
};


  return (
    <div className="bg-white w-80">
      <div
        className={`flex  ${
          onMonthChange ? "justify-center gap-2 " : " justify-between "
        } items-center mb-2`}
      >
        {onMonthChange ? (
          <>
            <select
              value={activeMonth.getMonth()}
              onChange={(e) =>
                handleMonthChange(
                  Number(e.target.value),
                  activeMonth.getFullYear()
                )
              }
              className="bg-transparent font-semibold cursor-pointer focus:outline-none"
            >
              {months.map((m, i) => (
                <option key={i} value={i} className="text-black">
                  {m.toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={activeMonth.getFullYear()}
              onChange={(e) =>
                handleMonthChange(
                  activeMonth.getMonth(),
                  Number(e.target.value)
                )
              }
              className="bg-transparent font-semibold cursor-pointer focus:outline-none"
            >
              {years.map((y) => (
                <option key={y} value={y} className="text-black">
                  {y}
                </option>
              ))}
            </select>
          </>
        ) : (
          <>
            <button
              className="font-semibold cursor-pointer"
              onClick={() => {
                if (!canGoPrev()) return;
                if (view === "day") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear(),
                      activeMonth.getMonth() - 1,
                      1
                    )
                  );
                } else if (view === "month") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear() - 1,
                      activeMonth.getMonth(),
                      1
                    )
                  );
                } else if (view === "year") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear() - 12,
                      activeMonth.getMonth(),
                      1
                    )
                  );
                }
              }}
            >
              <LessThenIcon />
            </button>

            <button
              onClick={() => {
                if (view === "day") setView("month");
                else if (view === "month") setView("year");
              }}
              className="font-semibold cursor-pointer"
            >
              {view === "day" &&
                `${
                  months[activeMonth.getMonth()]
                } ${activeMonth.getFullYear()}`}
              {view === "month" && activeMonth.getFullYear()}
              {view === "year" &&
                `${Math.floor(activeMonth.getFullYear() / 12) * 12} - ${
                  Math.floor(activeMonth.getFullYear() / 12) * 12 + 11
                }`}
            </button>

            <button
              className="font-semibold cursor-pointer"
              onClick={() => {
                if (!canGoNext()) return;
                if (view === "day") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear(),
                      activeMonth.getMonth() + 1,
                      1
                    )
                  );
                } else if (view === "month") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear() + 1,
                      activeMonth.getMonth(),
                      1
                    )
                  );
                } else if (view === "year") {
                  setInternalMonth(
                    new Date(
                      activeMonth.getFullYear() + 12,
                      activeMonth.getMonth(),
                      1
                    )
                  );
                }
              }}
            >
              <GreaterThenIcon />
            </button>
          </>
        )}
      </div>

      <div className="grid grid-cols-7 text-center font-medium text-sm mb-1 text-[#A0A3A2]">
        {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="p-2 grid grid-cols-7 text-center">
        {view === "day" &&
          getDaysArray(activeMonth).map((date, idx) => {
            const isSelected =
              date &&
              ((selectedDates?.start && isSameDay(date, selectedDates.start)) ||
                (internalSelected && isSameDay(date, internalSelected)));

            const isToday = date && isSameDay(date, today);

            let disabled = false;
            if (date) {
              if (mode === "forwardDate" && isBeforeToday(date))
                disabled = true;
              if (mode === "backwardDate" && isAfterToday(date))
                disabled = true;
              if (maxDate && date > maxDate) disabled = true;
              if (minDate && date < minDate) disabled = true;
            }

            return (
              <button
                key={idx}
                className={
                  getDayClass
                    ? getDayClass(date, idx)
                    : `cursor-pointer rounded-full p-3 ${
                        disabled
                          ? "text-gray-400 cursor-not-allowed"
                          : isSelected
                          ? "bg-black text-white"
                          : !internalSelected && isToday
                          ? "bg-blue-300 hover:bg-gray-200 text-white"
                          : "hover:bg-gray-200 text-black"
                      }`
                }
                disabled={disabled}
                onClick={() => {
                  if (date && !disabled) {
                    if (onDateClick) {
                      onDateClick(date);
                      setTimeout(() => onClose?.(), 0);
                    } else {
                      setInternalSelected(date);
                      setTimeout(() => onClose?.(), 0);
                    }
                  }
                }}
              >
                {date ? date.getDate() : ""}
              </button>
            );
          })}

        {view === "month" &&
          months.map((m, i) => (
            <button
              key={i}
              className="p-3 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => {
                setInternalMonth(new Date(activeMonth.getFullYear(), i, 1));
                setView("day");
              }}
            >
              {m.substring(0, 3).toUpperCase()}
            </button>
          ))}

        {view === "year" &&
          Array.from({ length: 12 }, (_, i) => {
            const y = Math.floor(activeMonth.getFullYear() / 12) * 12 + i;
            return (
              <button
                key={y}
                className="p-3 cursor-pointer hover:bg-gray-200 rounded"
                onClick={() => {
                  setInternalMonth(new Date(y, activeMonth.getMonth(), 1));
                  setView("month");
                }}
              >
                {y}
              </button>
            );
          })}
      </div>
    </div>
  );
}
