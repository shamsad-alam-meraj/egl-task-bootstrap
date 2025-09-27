import React from "react";
import styles from "@/styles/tableSection.module.css";
import { Info } from "lucide-react";

interface TableSectionProps {
  title: string;
  rows: string[][];
}

export default function TableSection({ title, rows }: TableSectionProps) {
  return (
    <>
      {/* Section header */}
      <tr
        className={`fw-bold fs-5 ${
          title === "Carbon Report" ? "border-top-0" : ""
        }`}
      >
        <td className={`p-3 text-start border-start-0 font-manrope`}>
          {title}
        </td>
        <td className={`p-3`}></td>
        <td className={`p-3`}></td>
        <td className={`p-3`}></td>
        <td className={`p-3 border-end-0`}></td>
      </tr>

      {/* Section rows */}
      {rows.map((row, rowIdx) => (
        <tr
          key={`${title}-${rowIdx}`}
          className={`${styles.rowHover} font-inter `}
        >
          {row.map((cell, i) => {
            const textColor =
              cell === "✓"
                ? styles.textGreen
                : cell === "✗"
                ? styles.textRed
                : "";

            const cellBorder =
              i === 0
                ? `border-start-0`
                : i === row.length - 1
                ? `border-end-0 `
                : ``;

            const textAlign = i === 0 ? "text-start fw-medium" : "text-center";

            return (
              <td
                key={i}
                className={`${cellBorder} p-3 ${textAlign} ${textColor}`}
                style={{ fontSize: "16px" }}
              >
                {cell}
                {i === 0 ? (
                  <Info
                  className="ps-1"
                    style={{
                      height: "20px",
                      width: "20px",
                      color: "#00000054",
                    }}
                  />
                ) : (
                  ""
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}
