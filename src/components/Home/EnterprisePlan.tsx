"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  Clock,
  FileText,
  Link,
  Lock,
  Monitor,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "@/styles/enterprisePlan.module.css";

export default function EnterprisePlan() {
  const radarData = [
    { subject: "Organic Traffic", value: 60 },
    { subject: "Link Power", value: 80 },
    { subject: "Natural Profile", value: 70 },
  ];
  const grades = ["A+", "A", "B", "C", "D", "E", "F"];
  const weights: Record<string, number> = {
    "A+": 1,
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 1,
    F: 5,
  };
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  const grade = "C";
  const getPosition = (g: string) => {
    let sumBefore = 0;
    for (const key of grades) {
      if (key === g) break;
      sumBefore += weights[key];
    }
    return (sumBefore / totalWeight) * 100;
  };

  return (
    <section className={`w-100 py-5 py-md-5 ${styles.bgOverlay}`}>
      <div className="container">
        <div className="row align-items-center gx-5">
          {/* LEFT SIDE */}
          <div
            className={`col-md-6  mb-md-0 font-manrope pr-5 ${styles.leftContainer}`}
          >
            <h2 className={`fw-bold ${styles.enterpriseTitle}`}>
              Enterprise: <br />
              <span className={styles.enterpriseSubtitle}>
                A Plan For Any Team
              </span>
            </h2>
            <p className="text-secondary my-4" style={{ fontSize: "16px" }}>
              Make everyone a collaborator — and make more video
            </p>

            <div className="row row-cols-1 row-cols-sm-2 g-3 mt-3 text-secondary">
              {/* List items */}
              {[
                { icon: Lock, label: "SSO and SCIM" },
                { icon: Users, label: "Dedicated account representative" },
                { icon: FileText, label: "Custom invoicing options" },
                { icon: Clock, label: "Priority support (with SLA)" },
                { icon: Shield, label: "Security review" },
                { icon: Link, label: "Descript service agreement" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="col d-flex align-items-center gap-2"
                    style={{ fontSize: "16px" }}
                  >
                    <div className={`${styles.iconCircle}`}>
                      <Icon className={`${styles.iconColor}`} />
                    </div>
                    <h6 className="mb-0" style={{ fontSize: "16px" }}>
                      {item.label}
                    </h6>
                  </div>
                );
              })}
            </div>

            <button
              className={`btn btn-primary rounded-pill px-5 py-3 fw-bold mt-5`}
            >
              Contact us to learn more
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 d-flex flex-column gap-4 font-inter">
            {/* Upper Section  */}
            <div className=" d-flex flex-column flex-md-row gap-4 font-inter">
              {/* Left Column */}
              <div className="d-flex flex-column align-items-center w-100">
                {/* Toggle Buttons */}
                <div className={`d-flex gap-2 ${styles.toggleWrapper} mb-3`}>
                  <button
                    className={`${styles.toggleBtn} btn btn-light d-flex align-items-center gap-2`}
                  >
                    <Monitor style={{ color: "#0ABD8B" }} />{" "}
                    <span>Desktop</span>
                  </button>
                  <button
                    className={`${styles.toggleBtn} btn  d-flex align-items-center gap-2`}
                  >
                    <Smartphone /> <span>Mobile</span>
                  </button>
                </div>

                {/* Upper Circle */}
                <div className="p-3" style={{ width: "176px", height: "156px" }}>
                  <CircularProgressbar
                    value={92}
                    text="92"
                    strokeWidth={12}
                    styles={buildStyles({
                      pathColor: "#0ABD8B",
                      textColor: "#111",
                      trailColor: "#e5e7eb",
                      strokeLinecap: "round",
                      textSize: "18px",
                    })}
                  />
                </div>

                {/* Legend */}
                <div className="d-flex justify-content-center gap-3 mt-4 small text-secondary">
                  <div className="d-flex align-items-center gap-1">
                    <span className={`${styles.legendRed}`}></span> 0–49
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <span className={`${styles.legendYellow}`}></span> 50–89
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <span className={`${styles.legendGreen}`}></span> 90–100
                  </div>
                </div>

                {/* Lower Circle */}
                <h6 className="text-center fw-semibold mt-3">Page Authority</h6>
                <div className="p-3" style={{ width: "136px", height: "136px" }}>
                  <CircularProgressbar
                    value={60}
                    text="60%"
                    strokeWidth={10}
                    styles={buildStyles({
                      pathColor: "#0ABD8B",
                      textColor: "#111",
                      trailColor: "#e5e7eb",
                      strokeLinecap: "round",
                      textSize: 15,
                    })}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="d-flex flex-column align-items-center w-100">
                <h6 className="text-center fw-semibold mb-3">
                  Domain Authority
                </h6>
                <div className="p-3" style={{ width: "136px", height: "136px" }}>
                  <CircularProgressbar
                    value={60}
                    text="60%"
                    strokeWidth={11}
                    styles={buildStyles({
                      pathColor: "#0ABD8B",
                      textColor: "#111",
                      trailColor: "#e5e7eb",
                      strokeLinecap: "round",
                      textSize: 13,
                    })}
                  />
                </div>

                <div className="d-flex gap-2 align-items-center py-3">
                  <h2 className="fw-bold mb-0">60</h2>
                  <span className={styles.badgeGreen}>
                    very good and niche relevant
                  </span>
                </div>

                {/* Radar Chart */}
                <div className="w-100 mt-3" style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="75%"
                      data={radarData}
                    >
                      <PolarGrid
                        stroke="#e5e7eb"
                        gridType="circle"
                        radialLines={false}
                      />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fontSize: 12, fill: "#374151" }}
                        stroke="none"
                      />
                      <Radar
                        dataKey="value"
                        stroke="#16a34a"
                        strokeWidth={2}
                        fill="#16a34a"
                        fillOpacity={0.25}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* Bottom Section  */}
            <div className="d-flex align-items-center justify-content-center">
              <div className={styles.scaleWrapper}>
                {/* Labels */}
                {grades.map((g) => (
                  <div
                    key={g}
                    className={styles.label}
                    style={{
                      flex: weights[g],
                    }}
                  >
                    {g}
                  </div>
                ))}

                {/* Pointer */}
                <div
                  className={styles.pointer}
                  style={{
                    left: `${getPosition(grade)}%`,
                  }}
                >
                  {grade}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
