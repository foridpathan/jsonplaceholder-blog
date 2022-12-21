import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  console.log(router);

  return (
    <header className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <i className="fas fa-times fa-2x"></i>
          </div>
          <h1 className="text-center">SofTic Blog</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">
          <ul>
            <li
              className={`tm-nav-item ${
                router.pathname === "/" ? "active" : ""
              }`}>
              <Link href="/" className="tm-nav-link">
                <i className="fas fa-home"></i>
                Blog Home
              </Link>
            </li>
            <li
              className={`tm-nav-item ${
                router.pathname === "/post/[id]" ? "active" : ""
              }`}>
              <Link href="/post/1" className="tm-nav-link">
                <i className="fas fa-pen"></i>
                Single Post
              </Link>
            </li>
          </ul>
        </nav>
        <div className="tm-mb-65">
          <a
            rel="nofollow"
            href="https://facebook.com/"
            className="tm-social-link">
            <i className="fab fa-facebook tm-social-icon"></i>
          </a>
          <a href="https://twitter.com" className="tm-social-link">
            <i className="fab fa-twitter tm-social-icon"></i>
          </a>
          <a href="https://instagram.com" className="tm-social-link">
            <i className="fab fa-instagram tm-social-icon"></i>
          </a>
          <a href="https://linkedin.com" className="tm-social-link">
            <i className="fab fa-linkedin tm-social-icon"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
