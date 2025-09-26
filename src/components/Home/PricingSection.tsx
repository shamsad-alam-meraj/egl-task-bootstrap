"use client";

import { planList } from "@/lib/Plans";
import { ChevronRight, CircleCheck } from "lucide-react";
import { useState } from "react";
import "@/app/globals.css";
import styles from "@/styles/pricingStyle.module.css";

export default function PricingSection() {
  const plans = planList;
  const [yearly, setYearly] = useState(false);

  return (
    <section className="w-100 pt-5 font-manrope">
      <div className="container-xl text-center">
        <h2 className="fs-1 fs-md-1 fw-bold text-capitalize">
          Select the pricing plan that <br /> best suits your needs.
        </h2>

        {/* Toggle */}
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="d-flex gap-3 position-relative p-4">
            <span className="fw-medium fs-7">Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`${styles.toogleBtn} ${
                yearly ? `${styles.active}` : ""
              }`}
              type="button"
            >
              <span className={`${styles.toggleKnob}`} />
            </button>
            <span className="fw-medium fs-7">Yearly</span>

            <p className={`${styles.saveBadge} `}>Save 40%</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 mb-5">
          {plans.map((plan, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div
                className={`text-start shadow-sm transition  ${
                  plan.highlight
                    ? `p-4 bg-white ${styles.highlightCard} rounded-4`
                    : `p-4 hover-translate-y hover-shadow-lg ${styles.otherCard} ${styles.hoverTranslateY} ${styles.hoverShadowLG}`
                }`}
              >
                <h5 className="fs-4 fw-bold mb-3">{plan.name}</h5>
                <p className="text-muted small mb-4">
                  {plan.description} <br /> {plan.description2}
                </p>

                <h1 className="fw-bold text-dark mb-3">
                  ${yearly ? 115.2 : plan.price}
                </h1>
                <p className="text-muted fw-bold mb-4">{plan.description3}</p>

                <button
                  className={`w-100 py-3 fw-bold rounded-pill transition ${
                    plan.highlight
                      ? "btn btn-primary"
                      : "btn btn-outline-primary"
                  }`}
                >
                  Get Started
                </button>

                <ul className="list-unstyled mt-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center gap-2 mb-2"
                    >
                      <CircleCheck className="me-2 text-dark" />
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom extra cards */}
        <div className="row g-4 mt-4">
          <div className="col-12 col-md-6">
            <div className="rounded-4 py-5 px-4 text-start border d-flex align-items-center hover-shadow-lg transition">
              <div>
                <h5 className="fs-5 fw-bold">Free</h5>
                <p className="display-4 fw-bold my-2">$0</p>
                <h6 className="text-muted fw-semibold fs-6">
                  Get started on your creative journey with text-based editing
                  and give our AI tools a spin. 1 person included.
                </h6>
              </div>
              <div className="ms-4">
                <ChevronRight className="fs-5 text-dark" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="rounded-4 py-5 px-4 text-start border d-flex align-items-center hover-shadow-lg transition">
              <div>
                <h5 className="fs-5 fw-bold">Enterprise</h5>
                <p className="display-4 fw-bold my-2">Custom</p>
                <h6 className="text-muted fw-semibold fs-6">
                  Get started on your creative journey with text-based editing
                  and give our AI tools a spin. 1 person included.
                </h6>
              </div>
              <div className="ms-4">
                <ChevronRight className="fs-5 text-dark" />
              </div>
            </div>
          </div>
        </div>

        <button
          className={`mt-5 btn btn-primary rounded-pill fw-bold px-5 py-3`}
        >
          Compare All Features And Plans
        </button>
      </div>
    </section>
  );
}
