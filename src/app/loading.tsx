"use client";

import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center bg-light">
      <Loader
        className="spinner-border text-primary"
        style={{ width: "4rem", height: "4rem" }}
      />
    </div>
  );
}
