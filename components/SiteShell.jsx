"use client";

import Link from "next/link";
import { createContext, useState } from "react";

function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="CHARTER home">
      <span>CHARTER</span>
      <i aria-hidden="true" />
      <small>One field at a time</small>
    </Link>
  );
}

export function SiteShell({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openSignup = () => setModal("We launch later this year. To stay in the loop, sign up below.");
  const openContact = () => setModal("Please email info@charterfarms.co.uk");

  return (
    <>
      <header className="site-header">
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>
          Menu
        </button>
        <nav className={menuOpen ? "primary-nav primary-nav-left is-open" : "primary-nav primary-nav-left"} aria-label="Primary navigation">
          <Link href="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/farmers" onClick={() => setMenuOpen(false)}>Farmers</Link>
        </nav>
        <Wordmark />
        <nav className={menuOpen ? "primary-nav primary-nav-right is-open" : "primary-nav primary-nav-right"} aria-label="Secondary navigation">
          <Link href="/living-certificate" onClick={() => setMenuOpen(false)}>Living Certificate</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        </nav>
        <button className="account-button" onClick={openSignup} aria-label="Sign in">
          <span aria-hidden="true" />
        </button>
      </header>
      <CartContext.Provider value={{ cartCount, setCartCount }}>
        <main>{children}</main>
      </CartContext.Provider>
      <Footer openSignup={openSignup} openContact={openContact} />
      {modal ? <Modal message={modal} onClose={() => setModal(null)} /> : null}
    </>
  );
}

export const CartContext = createContext({ cartCount: 0, setCartCount: () => {} });

function Footer({ openSignup, openContact }) {
  return (
    <footer className="site-footer">
      <div>
        <Wordmark />
        <p>Food you can trust, from land you can name.</p>
      </div>
      <NewsletterForm compact />
      <nav aria-label="Footer navigation">
        <Link href="/products">Products</Link>
        <Link href="/living-certificate">Living Certificate</Link>
        <Link href="/farmers">Farmers</Link>
        <Link href="/blog">Blog</Link>
        <button onClick={openContact}>Contact</button>
      </nav>
      <div className="footer-socials" aria-label="Social links">
        <button onClick={openSignup}>Instagram</button>
        <button onClick={openSignup}>Facebook</button>
        <button onClick={openSignup}>LinkedIn</button>
      </div>
      <div className="footer-legal">
        <span>© 2026 CHARTER</span>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}

export function NewsletterForm({ compact = false }) {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <form
      className={compact ? "newsletter-form compact" : "newsletter-form"}
      onSubmit={(event) => {
        event.preventDefault();
        setSignedUp(true);
      }}
    >
      <label>
        <span>Email address</span>
        <input type="email" name="email" placeholder="name@example.com" required />
      </label>
      <button type="submit">Sign up</button>
      {signedUp ? <p role="status">You are on the list. Good work.</p> : null}
    </form>
  );
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
