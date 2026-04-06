"use client";
import React from "react";
import ToolTipIcon from "./ToolTipIcon";

type Segment = { color: string; percent: number };

interface DonutChartProps {
  size?: number;
  strokeWidth?: number;
  segments?: Segment[];
  className?: string;
}

const CircularGraph: React.FC<DonutChartProps> = ({
  size = 220,
  strokeWidth = 40,
  segments,
  className = "",
}) => {
  const defaultSegments: Segment[] = [
    { color: "#1382D9", percent: 40 },
    { color: "#F76B1C", percent: 20 },
    { color: "#FFC233", percent: 30 },
  ];

  const activeSegments =
    segments && segments.length > 0 ? segments : defaultSegments;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const total = activeSegments.reduce((sum, s) => sum + s.percent, 0) || 1;
  const normalizedSegments = activeSegments.map((s) => ({
    ...s,
    percent: (s.percent / total) * 100,
  }));

  let offset = 0;

  const [hoveredSegment, setHoveredSegment] = React.useState<number | null>(
    null
  );
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={className}
      >
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {normalizedSegments.map((seg, index) => {
            const segLength = (seg.percent / 100) * circumference;
            const dashArray = `${segLength} ${circumference - segLength}`;
            const dashOffset = circumference - offset;

            offset += segLength;

            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={seg.color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap="butt"
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
                onMouseMove={(e) =>
                  setMousePos({ x: e.clientX, y: e.clientY })
                }
              />
            );
          })}
        </g>
      </svg>

      {hoveredSegment !== null && (
        <div
          style={{
            position: "fixed",
            left: mousePos.x + 5 , // small offset so cursor doesn't overlap tooltip
            top: mousePos.y - 40,
            pointerEvents: "none", // so it doesn’t block mouse events
            zIndex: 999,
          }}
        >
          <ToolTipIcon
            color={normalizedSegments[hoveredSegment].color}
            label={`${normalizedSegments[hoveredSegment].percent.toFixed(1)}%`}
          />
        </div>
      )}
    </>
  );
};

export default CircularGraph;
