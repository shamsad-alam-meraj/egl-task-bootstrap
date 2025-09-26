import React from "react";
import styles from "@/styles/tableSection.module.css";

interface TableSectionProps {
  title: string;
  rows: string[][];
}

export default function TableSection({ title, rows }: TableSectionProps) {
  return (
    <>
      {/* Section header */}
      <tr className={styles.sectionHeader}>
        <td className={`p-3 text-start border-start-0 `}>{title}</td>
        <td className={`p-3`}></td>
        <td className={`p-3`}></td>
        <td className={`p-3`}></td>
        <td className={`p-3 border-end-0`}></td>
      </tr>

      {/* Section rows */}
      {rows.map((row, rowIdx) => (
        <tr
          key={`${title}-${rowIdx}`}
          className={`${styles.rowHover} ${styles.fontInter}`}
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
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}
