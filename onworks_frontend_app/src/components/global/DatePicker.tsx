import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CustomInput from "./CustomInput";
import CalendarBlankIcon from "@/icons/CalendarBlankIcon";
import Calendar from "@/app/Calendar/page";

interface DatePickerProps {
  value: string | null;
  onChange: (value: string) => void;
  className: string;
  label?: string;
  placeholder?: string;
  mode?: "forwardDate" | "backwardDate";
  error?: string;
  readOnly?: boolean;
  maxDate?: Date;
  minDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  className,
  label,
  placeholder,
  mode,
  error,
  maxDate,
  minDate,
  readOnly,
}) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarPosition, setCalendarPosition] = useState<{
    top: number;
    left: number;
    transformOrigin: string;
  }>({
    top: 0,
    left: 0,
    transformOrigin: "top left",
  });

  // Format date for display as DD-MM-YYYY
  const formatDateForDisplay = (dateString: string | null): string => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  // Debounce function for performance
  const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };

  // Close on outside click, excluding calendar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node) &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate calendar position dynamically
  const updatePosition = () => {
    if (wrapperRef.current && show) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const calendarWidth = 320;
      const calendarHeight = 300;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      const inputTop = rect.top + scrollTop;
      const inputBottom = rect.bottom + scrollTop;
      const inputLeft = rect.left + scrollLeft;
      const inputRight = rect.right + scrollLeft;
      const inputHeight = rect.height;

      let top: number;
      let left: number;
      let transformOrigin: string;

      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;
      const spaceRight = viewportWidth - rect.right;
      const spaceLeft = rect.left;

      // Check if there's insufficient vertical space (both above and below)
      if (spaceBelow < calendarHeight && spaceAbove < calendarHeight) {
        // Prioritize horizontal placement (left or right)
        if (spaceRight >= calendarWidth) {
          // Place on the right
          left = inputRight + 4; // 4px margin
          top = inputTop; // Align top of calendar with top of input
          transformOrigin = "top left";
        } else if (spaceLeft >= calendarWidth) {
          // Place on the left
          left = inputLeft - calendarWidth - 4; // 4px margin
          top = inputTop;
          transformOrigin = "top right";
        } else {
          // Fallback: place in the direction with more horizontal space
          if (spaceRight > spaceLeft) {
            left = inputRight + 4;
            top = inputTop;
            transformOrigin = "top left";
          } else {
            left = inputLeft - calendarWidth - 4;
            top = inputTop;
            transformOrigin = "top right";
          }
          // Ensure calendar stays within viewport horizontally
          left = Math.max(0, Math.min(left, viewportWidth - calendarWidth + scrollLeft));
        }
      } else {
        // Vertical placement (existing logic)
        if (spaceBelow >= calendarHeight) {
          top = inputBottom + 4; // Below input
          transformOrigin = "top left";
        } else {
          top = inputTop - calendarHeight - 4; // Above input
          transformOrigin = "bottom left";
        }

        // Horizontal placement
        if (spaceRight >= calendarWidth) {
          left = inputLeft;
        } else if (spaceLeft >= calendarWidth) {
          left = inputRight - calendarWidth;
          transformOrigin = transformOrigin.replace("left", "right");
        } else if (spaceRight > spaceLeft) {
          left = inputLeft - (calendarWidth - rect.width);
          transformOrigin = transformOrigin.replace("left", "right");
        } else {
          left = inputLeft;
        }
      }

      // Ensure calendar stays within viewport vertically
      top = Math.max(0, Math.min(top, viewportHeight - calendarHeight + scrollTop));

      setCalendarPosition({ top, left, transformOrigin });
    }
  };

  const debouncedUpdatePosition = debounce(updatePosition, 50);

  useEffect(() => {
    if (show) {
      updatePosition();
      window.addEventListener("scroll", debouncedUpdatePosition, true);
      window.addEventListener("resize", debouncedUpdatePosition);

      let parent = wrapperRef.current?.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (
          style.overflow === "auto" ||
          style.overflowY === "auto" ||
          style.overflow === "scroll" ||
          style.overflowY === "scroll"
        ) {
          parent.addEventListener("scroll", debouncedUpdatePosition);
          break;
        }
        parent = parent.parentElement;
      }

      return () => {
        window.removeEventListener("scroll", debouncedUpdatePosition, true);
        window.removeEventListener("resize", debouncedUpdatePosition);
        if (parent) {
          parent.removeEventListener("scroll", debouncedUpdatePosition);
        }
      };
    }
  }, [show]);

  const normalizeDateToLocal = (date: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error("Invalid date received:", date);
      return "";
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <CustomInput
        name={label?.toLowerCase().replace(/\s+/g, "_") || "date"}
        label={label}
        placeholder={placeholder}
        value={formatDateForDisplay(value)} // Display as DD-MM-YYYY
        readOnly={readOnly}
        onClick={() => !readOnly && setShow(!show)}
        icon={
          <button
            type="button"
            onClick={() => !readOnly && setShow(!show)}
            className="flex items-center justify-center"
          >
            <CalendarBlankIcon size={15} className="mt-6" />
          </button>
        }
        className={`${className} hide-native-calendar ${error ? "border-red-500" : "border-gray-300"}`}
        type="text"
      />
      {show &&
        createPortal(
          <div
            ref={calendarRef}
            className="fixed z-[100] bg-white shadow-lg rounded-md"
            style={{
              top: `${calendarPosition.top}px`,
              left: `${calendarPosition.left}px`,
              transformOrigin: calendarPosition.transformOrigin,
              minWidth: "320px",
              pointerEvents: "auto",
            }}
          >
            <Calendar
              mode={mode}
              maxDate={maxDate}
              minDate={minDate}
              selectedDates={{
                start: value ? new Date(`${value}T00:00:00`) : null,
                end: null,
              }}
              onDateClick={(date) => {
                onChange(normalizeDateToLocal(date)); // Send YYYY-MM-DD
                setShow(false);
              }}
              onClose={() => {
                setShow(false);
              }}
            />
          </div>,
          document.body
        )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default DatePicker;