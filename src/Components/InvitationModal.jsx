"use client";

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

export default function InvitationModal({ isOpen, onClose, token, onSetupSuccess }) {
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (token) {
        verifyToken(token);
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, token]);

  const verifyToken = async (token) => {
    setVerifying(true);
    setError("");
    try {
      const response = await fetch(`/api/invitation?token=${token}`);
      const result = await response.json();

      if (response.ok) {
        setEmail(result.email);
      } else {
        setError(result.error || "This invitation link is invalid or has expired.");
      }
    } catch (err) {
      console.error("Token verification failed:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setVerifying(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/invitation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          fullName: formData.fullName,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Account setup successful!");
        if (onSetupSuccess) {
          onSetupSuccess();
        }
      } else {
        toast.error(result.error || "Setup failed. Please try again.");
      }
    } catch (err) {
      console.error("Invitation completion failed:", err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <ToastContainer position="bottom-right" />
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
            <h1 className="auth-title">Welcome to the Workspace</h1>
            <p className="auth-subtitle">Complete your profile to join your team.</p>
          </div>

          {verifying ? (
            <div className="verifying-container">
              <div className="spinner"></div>
              <p>Verifying invitation...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <p>{error}</p>
              <button onClick={onClose} className="btn-gold auth-submit" style={{ marginTop: "20px" }}>
                Return to Home
              </button>
            </div>
          ) : (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Your Name</label>
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
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={email} readOnly className="readonly-input" />
                <span className="input-hint">Assigned by administrator</span>
              </div>

              <div className="form-group">
                <label htmlFor="password">Create Password</label>
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

              <button type="submit" className="btn-gold auth-submit" disabled={loading}>
                {loading ? "Setting up account..." : "Join Workspace"}
              </button>
            </form>
          )}
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

        label {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal-mid);
        }

        input {
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

        .readonly-input {
          background: rgba(0, 0, 0, 0.03);
          color: var(--slate);
          cursor: not-allowed;
        }

        .input-hint {
          font-size: 11px;
          color: var(--slate);
          margin-top: 4px;
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

        .verifying-container,
        .error-container {
          text-align: center;
          padding: 20px 0;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(184, 132, 42, 0.2);
          border-top-color: var(--gold);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 16px;
        }

        .error-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
