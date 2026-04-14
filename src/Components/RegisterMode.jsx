"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterMode({ isOpen, onClose, onSwitchToLogin }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    password: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
    // Redirect to onboarding after successful registration mockup
    onClose();
    router.push("/auth/onboarding");
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
            <Link href="/" className="nav-logo" style={{ marginBottom: "10px", justifyContent: "center" }}>
              <div className="nav-logo-icon">Z</div>
              <span className="nav-logo-text">
                ZohoAI <span>Assistant</span>
              </span>
            </Link>
            <h1 className="auth-title">Create Your Workspace</h1>
            <p className="auth-subtitle">Join 1,200+ businesses using AI to unify their Zoho ecosystem.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Acme Corp"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                <span className="label-text">I agree to the Terms and Privacy Policy</span>
              </label>
            </div>

            <button type="submit" className="btn-gold auth-submit">
              Create a New Account
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchToLogin();
                }} 
                className="auth-link-btn"
              >
                Sign In
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
          max-width: 480px;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 38px 30px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        /* Dark mode adjustment if detected via class or media */
        :global(.dark) .auth-card {
          background: #1e1e22;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .close-modal {
          position: absolute;
          top: 20px;
          right: 20px;
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
          margin-bottom: 25px;
        }

        .auth-title {
          font-family: var(--font-cormorant), serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 5px;
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
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal-mid);
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px 14px;
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
          margin-top: 8px;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }

        .label-text {
          font-size: 12px;
          color: var(--slate);
          font-weight: 300;
        }

        .auth-submit {
          margin-top: 8px;
          width: 100%;
          border: none;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 500;
          cursor: pointer;
          height: 48px;
          border-radius: 12px;
        }

        .auth-footer {
          margin-top: 20px;
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

        .auth-link {
          color: var(--gold);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .auth-link:hover {
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

        @media (max-width: 480px) {
          .auth-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </div>
  );
}
