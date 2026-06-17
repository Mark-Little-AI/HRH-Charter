"use client";

import { useContext } from "react";
import { LaunchSignupContext } from "@/components/SiteShell";

export function LaunchSignupButton({ children, className = "", ariaLabel }) {
  const { openLaunchSignup } = useContext(LaunchSignupContext);

  return (
    <button
      className={className}
      type="button"
      aria-label={ariaLabel}
      onClick={() => openLaunchSignup()}
    >
      {children}
    </button>
  );
}

export function LaunchSignupCard({ children, className = "", ariaLabel }) {
  const { openLaunchSignup } = useContext(LaunchSignupContext);

  return (
    <button
      className={className}
      type="button"
      aria-label={ariaLabel}
      onClick={() => openLaunchSignup()}
    >
      {children}
    </button>
  );
}
