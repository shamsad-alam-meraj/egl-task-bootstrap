"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  message?: string;
}

export default function ErrorPage({
  message = "Something went wrong!",
}: ErrorPageProps) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100 bg-light text-center px-3">
      <AlertCircle className="mb-4 text-danger" size={80} />
      <h1 className="fw-bold mb-2 fs-2">Oops!</h1>
      <p className="fs-5 text-muted mb-4">{message}</p>
      <Link
        href="/"
        className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}
