"use client";

import { useContext } from "react";
import { LaunchSignupContext } from "@/components/SiteShell";

export function AddToCartButton({ productName }) {
  const { openLaunchSignup } = useContext(LaunchSignupContext);

  return (
    <button
      className="link-u add-cart-button"
      type="button"
      onClick={openLaunchSignup}
      aria-label={`Add ${productName} to cart`}
    >
      Add to cart
    </button>
  );
}
