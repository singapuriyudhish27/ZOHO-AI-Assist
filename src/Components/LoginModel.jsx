"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function LoginModel({ isOpen, onClose, onSwitchToRegister, onSwitchToForgot }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Mock login success logic here if needed
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>
        <div className="auth-card fade-up visible">
          {/* Close Button */}
          <button className="close-modal" onClick={onClose} aria-label="Close modal">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="auth-header">
            <div className="nav-logo" style={{ marginBottom: "12px", justifyContent: "center" }}>
              <div className="nav-logo-icon">Z</div>
              <span className="nav-logo-text">
                ZohoAI <span>Assistant</span>
              </span>
            </div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Enter your credentials to access your command centre.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">              
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text">Remember for 30 days</span>
              </label>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToForgot();
                }} 
                className="forgot-link-btn"
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn-gold auth-submit">
              Sign In
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don&apos;t have an account?{" "}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToRegister();
                }} 
                className="auth-link-btn"
              >
                Create a New Account
              </button>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 12, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .auth-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-card {
           background: #ffffff;
          border-radius: 24px;
          padding: 48px 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        :global(.dark) .auth-card {
          background: #1e1e22;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .close-modal {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: var(--slate);
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-modal:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--charcoal);
        }

        .close-modal svg {
          width: 20px;
          height: 20px;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          text-decoration: none;
        }

        .nav-logo-icon {
          width: 32px;
          height: 32px;
          background: var(--gold);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: 800;
          font-size: 18px;
        }

        .nav-logo-text {
          font-family: var(--font-cormorant), serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--charcoal);
        }

        .nav-logo-text span {
          color: var(--gold);
          font-weight: 400;
        }

        .auth-title {
          font-family: var(--font-cormorant), serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .auth-subtitle {
          font-size: 14px;
          color: var(--slate);
          font-weight: 300;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal-mid);
        }

        .forgot-link-btn {
          font-size: 13px;
          color: var(--gold);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .forgot-link-btn:hover {
          color: var(--gold-light);
        }

        .password-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          background: transparent;
          border: none;
          color: var(--slate);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          transition: color 0.2s;
        }

        .password-toggle:hover {
          color: var(--gold);
        }

        .password-toggle svg {
          width: 18px;
          height: 18px;
        }

        input[type="email"],
        input[type="text"],
        input[type="password"] {
          width: 100%;
          padding: 12px 16px;
          padding-right: 44px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--white);
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: var(--charcoal);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(184, 132, 42, 0.1);
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }

        .label-text {
          font-size: 13px;
          color: var(--slate);
          font-weight: 300;
        }

        .auth-submit {
          margin-top: 12px;
          width: 100%;
          border: none;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 500;
          cursor: pointer;
          height: 48px;
          border-radius: 12px;
        }

        .auth-footer {
          margin-top: 24px;
          text-align: center;
        }

        .auth-footer p {
          font-size: 13px;
          color: var(--slate);
          font-weight: 300;
        }

        .auth-link-btn {
          background: transparent;
          border: none;
          color: var(--gold);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
          padding: 0;
          font-size: 13px;
        }

        .auth-link-btn:hover {
          color: var(--gold-light);
        }

        /* Checkbox styling */
        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          height: 18px;
          width: 18px;
          background-color: var(--white);
          border: 1px solid var(--border);
          border-radius: 4px;
          position: relative;
        }

        .checkbox-container input:checked ~ .checkmark {
          background-color: var(--gold);
          border-color: var(--gold);
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }

        .checkbox-container .checkmark:after {
          left: 6px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 440px) {
          .auth-card {
            padding: 32px 24px;
            border-radius: 0;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}
