"use client";
import { useState } from "react";
import { person } from "@/content/site";
export function CopyEmail() {
  const [message, setMessage] = useState("");
  return (
    <span className="copy-email">
      <button
        type="button"
        className="text-button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(person.email);
            setMessage("Email copied");
          } catch {
            setMessage("Please select the visible email address to copy it.");
          }
        }}
      >
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <span className="copy-message" role="status">
        {message}
      </span>
    </span>
  );
}
