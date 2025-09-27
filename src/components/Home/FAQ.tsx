"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "@/styles/faq.module.css"; // custom CSS

const faqs = [
  {
    id: "01",
    question: "Is This Extension Free?",
    answer:
      "Yes! The core version with key metrics is free. We offer a Pro plan with more in-depth data and historical trends.",
  },
  {
    id: "02",
    question: "Which Browsers Do You Support?",
    answer:
      "We support Chrome, Firefox, and Edge. Safari support is in development.",
  },
  {
    id: "03",
    question: "How Accurate Is The Data?",
    answer:
      "We use multiple trusted sources and update data frequently to ensure accuracy.",
  },
  {
    id: "04",
    question: "What Are My Homeownership Program Obligations?",
    answer:
      "Your obligations depend on the specific program. Typically, you must maintain residency and stay current on payments.",
  },
  {
    id: "05",
    question: "How Long Does The Homeownership Program Process Take?",
    answer:
      "The process length varies but typically takes between 30–90 days depending on your situation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container py-5">
      <h2 className={`text-center mb-5 ${styles.title}`}>
        Frequently Asked Questions
      </h2>

      <div>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`d-flex flex-column justify-content-center py-3 ${
              index < faqs.length - 1 ? "border-bottom" : ""
            }`}
          >
            <button
              className="d-flex align-items-start w-100 text-start gap-3 btn btn-link text-decoration-none p-0"
              onClick={() => toggleFAQ(index)}
            >
              <span className={`me-3 ${styles.faqId}`}>{faq.id}</span>
              <div className="flex-grow-1">
                <h3 className={styles.question}>{faq.question}</h3>
                {openIndex === index && (
                  <p className={styles.answer}>{faq.answer}</p>
                )}
              </div>
              <div className="ms-auto d-flex align-items-center">
                {openIndex === index ? (
                  <Minus className={styles.plusMinusIcon} />
                ) : (
                  <Plus className={styles.plusMinusIcon} />
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
