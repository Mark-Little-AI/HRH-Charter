"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SESSION_DISMISSED_KEY = "charterLaunchPopupDismissed";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function LaunchSignupPopup({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement;
    const firstFocusable = dialogRef.current?.querySelector(focusableSelector);
    firstFocusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [...(dialogRef.current?.querySelectorAll(focusableSelector) ?? [])];
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [onClose, open]);

  if (!open) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, source: "launch-popup", page: window.location.pathname })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Sorry, something went wrong. Please try again.");
      }

      setSubmitted(true);
      window.sessionStorage.setItem(SESSION_DISMISSED_KEY, "true");
    } catch (error) {
      setError(error.message || "Sorry, something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="launch-popup-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        ref={dialogRef}
        className="launch-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="launch-popup-title"
        aria-describedby="launch-popup-copy"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="launch-popup-close" type="button" onClick={onClose} aria-label="Close mailing list popup">
          Close
        </button>
        {submitted ? (
          <div className="launch-popup-success" role="status">
            <p>Thank you — you’re on the list.</p>
          </div>
        ) : (
          <>
            <p className="launch-popup-kicker">Charter</p>
            <div className="launch-popup-intro">
              <h2 id="launch-popup-title">Launching late 2026.</h2>
              <div className="launch-popup-image">
                <Image
                  src="/assets/charter-home/optimised/cows-road.webp"
                  alt="Highland cattle standing on a farm track in the Highlands"
                  fill
                  sizes="170px"
                />
              </div>
            </div>
            <div id="launch-popup-copy" className="launch-popup-copy">
              <p>We’re building Charter to help establish a new standard for British regenerative meat, starting with the fifth quarter: the useful, nutrient-rich parts of the animal too often treated as byproducts.</p>
              <p>If you’d like to follow our progress, join the mailing list below. We’ll share occasional updates as we go.</p>
              <p>Thank you for your support.</p>
              <p>Together, we can help create a more transparent, trusted and accountable food system.</p>
            </div>
            <form className="launch-popup-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="launch-email">Email address</label>
              <div className="launch-popup-form-row">
                <input
                  id="launch-email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email address"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "launch-email-error launch-email-note" : "launch-email-note"}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={submitting}
                  required
                />
                <button type="submit" disabled={submitting}>{submitting ? "Sending…" : "Stay in the loop"}</button>
              </div>
              {error ? (
                <p id="launch-email-error" className="launch-popup-error">
                  {error}
                </p>
              ) : null}
              <p id="launch-email-note" className="launch-popup-note">No spam. Just occasional updates.</p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

export function hasDismissedLaunchPopup() {
  return typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_DISMISSED_KEY) === "true";
}

export function markLaunchPopupDismissed() {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(SESSION_DISMISSED_KEY, "true");
  }
}
