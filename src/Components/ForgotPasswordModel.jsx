"use client";

import React, { useState, useEffect } from "react";

export default function ForgotPasswordModel({ isOpen, onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
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
            <h1 className="auth-title">Reset Password</h1>
            <p className="auth-subtitle">
              {isSubmitted 
                ? "If an account exists for this email, you will receive reset instructions shortly." 
                : "Enter your work email and we'll send you instructions to reset your password."}
            </p>
          </div>

          {!isSubmitted ? (
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

              <button type="submit" className="btn-gold auth-submit">
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <p className="success-text">Email sent to {email}</p>
            </div>
          )}

          <div className="auth-footer">
            <p>
              Remember your password?{" "}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
                }} 
                className="auth-link-btn"
              >
                Return to Sign In
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
          margin-bottom: 24px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
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
          line-height: 1.6;
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

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal-mid);
        }

        input[type="email"] {
          width: 100%;
          padding: 12px 16px;
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

        .success-state {
          text-align: center;
          padding: 24px;
          background: rgba(184, 132, 42, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(184, 132, 42, 0.2);
        }

        .success-icon {
          width: 48px;
          height: 48px;
          background: var(--gold);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 16px;
        }

        .success-text {
          font-size: 14px;
          color: var(--charcoal);
          font-weight: 500;
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
