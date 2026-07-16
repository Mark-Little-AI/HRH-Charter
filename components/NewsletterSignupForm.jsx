"use client";

import { useState } from "react";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function NewsletterSignupForm({ className = "nl-form", inputId = "newsletter-email", buttonLabel = "Sign up", source = "newsletter", compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, source, page: window.location.pathname })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Sorry, something went wrong. Please try again.");
      }

      setEmail("");
      setStatus("success");
      setMessage("Thank you — you’re on the list.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <form className={compact ? `${className} compact` : className} onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor={inputId}>Email address</label>
        <input
          id={inputId}
          type="email"
          name="email"
          value={email}
          placeholder="name@example.com"
          autoComplete="email"
          aria-invalid={status === "error" ? "true" : "false"}
          aria-describedby={message ? `${inputId}-status` : undefined}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "submitting"}
          required
        />
      </div>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : buttonLabel}
      </button>
      {message ? (
        <p id={`${inputId}-status`} className={`newsletter-status newsletter-status-${status}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
