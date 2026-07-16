"use client";

import Link from "next/link";
import { createContext, useCallback, useEffect, useState } from "react";
import { LaunchSignupPopup, hasDismissedLaunchPopup, markLaunchPopupDismissed } from "@/components/LaunchSignupPopup";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

function Wordmark() {
  const returnHome = (event) => {
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="/" className="wordmark" aria-label="CHARTER home" onClick={returnHome}>
      <img src="/charter-wordmark-navy.svg" alt="CHARTER" />
    </Link>
  );
}

export function SiteShell({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [modal, setModal] = useState(null);
  const [launchSignupOpen, setLaunchSignupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openLaunchSignup = useCallback(() => {
    setLaunchSignupOpen(true);
  }, []);

  const closeLaunchSignup = useCallback(() => {
    markLaunchPopupDismissed();
    setLaunchSignupOpen(false);
  }, []);

  const openContact = () => setModal("Please email info@charterfarms.co.uk");
  const openDesignAssets = () => setModal("Design assets will be available later this year.");

  useEffect(() => {
    if (hasDismissedLaunchPopup()) return;

    const timer = window.setTimeout(() => {
      setLaunchSignupOpen(true);
    }, 60000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="site-header">
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          Menu
        </button>
        <div className="mobile-header-wordmark">
          <Wordmark />
        </div>
        <nav className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          <Link href="/our-standard" onClick={() => setMenuOpen(false)}>Our Standard</Link>
          <Link href="/farmers" onClick={() => setMenuOpen(false)}>Farmers</Link>
          <div className="nav-wordmark">
            <Wordmark />
          </div>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        </nav>
        <button className="account-button" onClick={openLaunchSignup} aria-label="Sign in">
          <svg aria-hidden="true" viewBox="0 0 28 28" focusable="false">
            <circle cx="14" cy="7" r="4" />
            <path d="M5 26c0-7.2 3.8-11 9-11s9 3.8 9 11" />
            <path d="M3 27h22" />
          </svg>
        </button>
      </header>
      <LaunchSignupContext.Provider value={{ openLaunchSignup }}>
        <CartContext.Provider value={{ cartCount, setCartCount }}>
          <main>{children}</main>
        </CartContext.Provider>
      </LaunchSignupContext.Provider>
      <Footer openSignup={openLaunchSignup} openContact={openContact} openDesignAssets={openDesignAssets} />
      {modal ? <Modal message={modal} onClose={() => setModal(null)} /> : null}
      <LaunchSignupPopup open={launchSignupOpen} onClose={closeLaunchSignup} />
    </>
  );
}

export const CartContext = createContext({ cartCount: 0, setCartCount: () => {} });
export const LaunchSignupContext = createContext({ openLaunchSignup: () => {} });

function Footer({ openSignup, openContact, openDesignAssets }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Wordmark />
        <p>One field at a time.</p>
      </div>
      <div className="footer-right">
        <nav aria-label="Footer navigation">
          <button onClick={openContact}>Contact</button>
          <Link href="/blog">Blog</Link>
          <button onClick={openDesignAssets}>Design assets</button>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <div className="footer-socials" aria-label="Social links">
          <button onClick={openSignup} aria-label="Facebook">
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M14.2 8.2h2.5V4.4c-.4-.1-1.9-.2-3.5-.2-3.5 0-5.9 2.1-5.9 6v3.4H3.5v4.2h3.8V24h4.7v-6.2h3.7l.6-4.2H12v-3c0-1.2.4-2.4 2.2-2.4Z" />
            </svg>
          </button>
          <button onClick={openSignup} aria-label="Instagram">
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3.8" />
              <circle cx="16.8" cy="7.2" r="0.9" />
            </svg>
          </button>
          <button onClick={openSignup} aria-label="LinkedIn">
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d="M5 9h4v11H5zM7 4.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM11.2 9h3.8v1.6c.6-1 1.8-1.9 3.7-1.9 3.8 0 4.6 2.5 4.6 5.8V20h-4v-5c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V20h-4.1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="footer-legal">
        <span>© 2026 CHARTER</span>
      </div>
    </footer>
  );
}

export function NewsletterForm({ compact = false }) {
  return <NewsletterSignupForm className="newsletter-form" compact={compact} inputId="modal-newsletter-email" source="modal-newsletter" />;
}

function Modal({ message, onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="modal" role="dialog" aria-modal="true" aria-label="CHARTER notice" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close notice">Close</button>
        <p>{message}</p>
        {message.includes("sign up") ? <NewsletterForm compact /> : null}
      </section>
    </div>
  );
}
