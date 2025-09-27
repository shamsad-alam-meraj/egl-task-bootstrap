"use client";

import React from "react";
import {
  architectureList,
  carbonReportList,
  insightList,
  technologyList,
  trafficList,
} from "@/lib/Differences";
import TableSection from "./TableSection";
import { motion } from "framer-motion";
import styles from "@/styles/differences.module.css";

export default function Differences() {
  const plans = ["Free", "Basic", "Enthusiast", "Expert"];

  return (
    <section className="w-100 py-5 py-md-5">
      <div className="container-xl text-center py-5">
        <h1
          className="fw-bold fs-1 mb-5 mb-md-5 font-manrope pb-5"
          style={{ fontSize: "2rem" }}
        >
          {"What's The Difference?"}
        </h1>

        {/* Responsive horizontal scroll wrapper */}
        <motion.div
          className={`overflow-auto ${styles.scrollWrapper}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <table
            className="table table-bordered font-manrope table-hover w-100"
            style={{ minWidth: "900px", borderCollapse: "collapse" }}
          >
            <thead className={styles.stickyHeader}>
              <tr className="border-top-0 font-manrope border-bottom-0">
                <th
                  style={{
                    backgroundColor: "#F6FAF7",
                  }}
                  className="text-start py-4 px-3 border-end border-start-0 "
                ></th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className={`py-4 px-3 text-center fw-bold border-start border-end border-top-0  ${
                      plan === "Expert" ? "border-end-0" : ""
                    }`}
                    style={{ fontSize: "1.25rem", backgroundColor: "#F6FAF7" }}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="font-inter">
              <TableSection title="Carbon Report" rows={carbonReportList} />
              <TableSection
                title="Architecture Report"
                rows={architectureList}
              />
              <TableSection title="Insights" rows={insightList} />
              <TableSection title="Traffic Analysis" rows={trafficList} />
              <TableSection title="Technology" rows={technologyList} />
            </tbody>

            <tfoot>
              <tr className="border-top border-bottom-0">
                <td className="border-start-0 border-end-0"></td>
                {plans.map((plan, idx) => (
                  <td key={idx} className={`fw-bold p-3 bg-primary text-white border-start-0 border-end-0`}>
                    Get Started
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
