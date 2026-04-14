"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#beranda" className="navbar-logo">
          <div className="navbar-logo-box">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <div className="navbar-logo-text">
            <span className="navbar-logo-title">KOMANDO SIWeb</span>
            <span className="navbar-logo-subtitle">Monitoring Armada Dunia</span>
          </div>
        </a>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* Nav Links */}
        <ul className={`navbar-nav ${mobileOpen ? "open" : ""}`}>
          <li><a href="#tentang" onClick={() => setMobileOpen(false)}>Tentang</a></li>
          <li><a href="#fitur" onClick={() => setMobileOpen(false)}>Fitur</a></li>
          <li><a href="#keunggulan" onClick={() => setMobileOpen(false)}>Keunggulan</a></li>
          <li>
            <a href="#masuk" className="btn-primary" onClick={() => setMobileOpen(false)}>
              MASUK SISTEM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
