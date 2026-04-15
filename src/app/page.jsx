"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/Components/ThemeProvider";
import RegisterMode from "@/Components/RegisterMode";
import LoginModel from "@/Components/LoginModel";
import ForgotPasswordModel from "@/Components/ForgotPasswordModel";
import OnboardingModal from "@/Components/OnBoardingMode";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [typingFinished, setTypingFinished] = useState(false);
  const [typingText, setTypingText] = useState("");
  const typingRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isLoggedIn) {
      setIsOnboardingModalOpen(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setMounted(true);
    // Check for signup trigger from other pages
    if (searchParams.get("signup") === "true") {
      setIsRegisterModalOpen(true);
    }
  }, [searchParams]);

  // Navbar scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    // Initial check to make things visible if they are already in viewport
    const fadeElements = document.querySelectorAll(".fade-up");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" } // Trigger slightly before it hits the view
    );

    fadeElements.forEach((el) => observer.observe(el));

    // Fallback: If 1 second passes and hero is NOT visible, force it
    const fallbackTimer = setTimeout(() => {
      const hero = document.querySelector(".hero-inner");
      if (hero && !hero.classList.contains("visible")) {
        fadeElements.forEach(el => el.classList.add("visible"));
      }
    }, 1500);

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Typing animation for preview
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingFinished(true);
    }, 4000); // 1s delay + 3s typing simulation delay from original script

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">Z</div>
          <span className="nav-logo-text">
            ZohoAI <span>Assistant</span>
          </span>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#integrations">Integrations</a>
          <a href="#roles">Who It&apos;s For</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Docs</a>
        </div>
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
            {!mounted ? null : theme === "light" ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"></path>
              </svg>
            )}
          </button>
          <button onClick={() => setIsLoginModalOpen(true)} className="btn-ghost">
            Sign In
          </button>
          <button onClick={() => setIsRegisterModalOpen(true)} className="btn-primary">
            Get Started Free
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div>
          <div className="hero-inner fade-up">
            <div className="hero-badge">Now supporting all 20+ Zoho applications</div>
            <h1 className="hero-title">
              The <em>intelligent layer</em>
              <br />
              for your entire
              <br />
              Zoho ecosystem
            </h1>
            <p className="hero-subtitle">
              One AI-powered command centre that connects all your Zoho apps, answers questions in plain English, automates tasks, and surfaces business insights — without switching
              between apps.
            </p>
            <div className="hero-cta">
              <button onClick={() => setIsRegisterModalOpen(true)} className="btn-gold">
                Start for free — no credit card
              </button>
              <a href="#" className="btn-outline">
                Watch a 2-min demo
              </a>
            </div>
            <div className="hero-social-proof">
              <div className="proof-avatars">
                <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#8B9EC7,#5C6B8A)" }}></div>
                <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#C9963A,#D4A855)" }}></div>
                <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#7B9E87,#4A7C59)" }}></div>
                <div className="proof-avatar" style={{ background: "linear-gradient(135deg,#9B7EC8,#7B5EA7)" }}></div>
              </div>
              <div className="proof-stars">★★★★★</div>
              <span>Loved by 1,200+ Zoho-powered businesses</span>
            </div>
          </div>

          {/* App Preview */}
          <div className="hero-preview fade-up" style={{ transitionDelay: "0.15s", marginTop: "64px" }}>
            <div className="hero-preview-bar">
              <div className="preview-dot"></div>
              <div className="preview-dot"></div>
              <div className="preview-dot"></div>
              <div className="preview-dot"></div>
            </div>
            <div className="preview-body">
              <div className="preview-sidebar">
                <div className="preview-sidebar-item active">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  Dashboard
                </div>
                <div className="preview-sidebar-item">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  AI Chat
                </div>
                <div className="preview-sidebar-item">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Automations
                </div>
                <div className="preview-sidebar-item">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Alerts
                </div>
                <div className="preview-sidebar-item">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Reports
                </div>
              </div>
              <div className="preview-main">
                <div className="preview-kpi-row">
                  <div className="preview-kpi">
                    <div className="preview-kpi-label">Revenue MTD</div>
                    <div className="preview-kpi-value">₹4.2L</div>
                    <div className="preview-kpi-delta">↑ 12% vs last month</div>
                  </div>
                  <div className="preview-kpi">
                    <div className="preview-kpi-label">Open Deals</div>
                    <div className="preview-kpi-value">38</div>
                    <div className="preview-kpi-delta">₹18.6L pipeline</div>
                  </div>
                  <div className="preview-kpi">
                    <div className="preview-kpi-label">Health Score</div>
                    <div className="preview-kpi-value">82</div>
                    <div className="preview-kpi-delta">↑ 5 pts this week</div>
                  </div>
                </div>
                <div className="preview-chat">
                  <div className="preview-msgs">
                    <div className="preview-msg user">Who are my top 5 customers by revenue this quarter?</div>
                    <div className="preview-msg ai">
                      Based on your Zoho Books data, here are your top 5 customers this quarter — Infosys Ltd leads with ₹82,400, followed by TechCorp at ₹61,200...
                    </div>
                  </div>
                  {!typingFinished ? (
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <div className="preview-msg ai" style={{ margin: 0, boxShadow: "none" }}>
                      ✓ Action confirmed. Payment reminder sent to Infosys Ltd via Zoho Mail.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="trusted">
        <div className="trusted-inner">
          <span className="trusted-label">Trusted by teams using</span>
          <div className="trusted-logos">
            <span className="trusted-logo">Zoho CRM</span>
            <div className="trusted-divider"></div>
            <span className="trusted-logo">Zoho Books</span>
            <div className="trusted-divider"></div>
            <span className="trusted-logo">Zoho Desk</span>
            <div className="trusted-divider"></div>
            <span className="trusted-logo">Zoho Projects</span>
            <div className="trusted-divider"></div>
            <span className="trusted-logo">Zoho Analytics</span>
            <div className="trusted-divider"></div>
            <span className="trusted-logo">Zoho People</span>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-tag">Core Capabilities</div>
            <h2 className="section-title">
              Everything your Zoho team
              <br />
              needs, <em>unified</em>
            </h2>
            <p className="section-subtitle">Six powerful modules working together to replace hours of manual work across every Zoho app you use.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card fade-up">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">AI Chat Assistant</h3>
              <p className="feature-desc">
                Ask anything in plain English. Query your Zoho data, perform actions, draft emails, and get step-by-step Zoho guidance — all in one conversational interface.
              </p>
            </div>
            <div className="feature-card fade-up" style={{ transitionDelay: "0.08s" }}>
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Business Intelligence</h3>
              <p className="feature-desc">
                A real-time unified dashboard pulling from all your Zoho apps. Revenue, pipeline, support health, HR — one AI-curated view with drill-down capability.
              </p>
            </div>
            <div className="feature-card fade-up" style={{ transitionDelay: "0.16s" }}>
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Workflow Automation</h3>
              <p className="feature-desc">
                Create intelligent multi-step automations across Zoho apps. Trigger by events, schedules, or AI-detected patterns — no code required.
              </p>
            </div>
            <div className="feature-card fade-up" style={{ transitionDelay: "0.24s" }}>
              <div className="feature-icon">🔔</div>
              <h3 className="feature-title">Proactive Alerts</h3>
              <p className="feature-desc">
                The AI continuously monitors your Zoho data and alerts you to risks, anomalies, and opportunities before you even think to check.
              </p>
            </div>
            <div className="feature-card fade-up" style={{ transitionDelay: "0.32s" }}>
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Zoho Knowledge Engine</h3>
              <p className="feature-desc">
                Deep AI knowledge of every Zoho app. Get instant tutorials, troubleshooting guides, best practices, and feature explanations — always up to date.
              </p>
            </div>
            <div className="feature-card fade-up" style={{ transitionDelay: "0.40s" }}>
              <div className="feature-icon">📋</div>
              <h3 className="feature-title">Reports & Analytics</h3>
              <p className="feature-desc">
                Generate custom reports by describing what you need. Schedule, share, and export across all your Zoho data with zero manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-section">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-tag">How It Works</div>
            <h2 className="section-title" style={{ color: "white" }}>
              Connected, intelligent,
              <br />
              <em>in minutes</em>
            </h2>
            <p className="section-subtitle">From sign-up to a fully operational AI workspace in three simple steps.</p>
          </div>
          <div className="steps">
            <div className="step fade-up">
              <div className="step-number">01</div>
              <div className="step-content">
                <div className="step-line"></div>
                <h3 className="step-title">Connect Your Zoho</h3>
                <p className="step-desc">
                  Sign up and connect your Zoho account via secure OAuth. Select which apps to enable. Your credentials are never stored — only encrypted tokens.
                </p>
              </div>
            </div>
            <div className="step fade-up" style={{ transitionDelay: "0.12s" }}>
              <div className="step-number">02</div>
              <div className="step-content">
                <div className="step-line"></div>
                <h3 className="step-title">AI Learns Your Business</h3>
                <p className="step-desc">
                  A quick onboarding wizard asks 5–7 questions about your business context. The AI immediately builds a personalised intelligence dashboard from your real Zoho data.
                </p>
              </div>
            </div>
            <div className="step fade-up" style={{ transitionDelay: "0.24s" }}>
              <div className="step-number">03</div>
              <div className="step-content">
                <div className="step-line"></div>
                <h3 className="step-title">Work Smarter Every Day</h3>
                <p className="step-desc">
                  Start each day with an AI briefing. Ask questions, run automations, get alerts, generate reports — all without leaving one unified interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section" id="integrations">
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-tag">Integrations</div>
            <h2 className="section-title">
              Works with <em>every</em>
              <br />
              Zoho app you use
            </h2>
            <p className="section-subtitle">Native integrations across 20+ Zoho applications via official OAuth 2.0 APIs. Connect once, control everything.</p>
          </div>
          <div className="integrations-grid fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho CRM
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Books
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Desk
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Projects
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho People
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Analytics
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Mail
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Cliq
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Inventory
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Campaigns
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Sign
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Creator
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Social
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Recruit
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Subscriptions
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Commerce
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Marketing
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Forms
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Survey
            </div>
            <div className="integration-chip">
              <div className="integration-dot"></div>Zoho Meeting
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="section" id="roles" style={{ background: "var(--cream-dark)" }}>
        <div className="section-inner">
          <div className="fade-up">
            <div className="section-tag">Multi-Tenant Architecture</div>
            <h2 className="section-title">
              Built for
              <br />
              You & Your <em>Organisation's Team</em>
            </h2>
            <p className="section-subtitle">A two-tier architecture that gives you and your team exactly the access, insights and tools you need.</p>
          </div>
          <div className="roles-grid">
            <div className="role-card business fade-up">
              <div className="role-chip">Tier 1</div>
              <h3 className="role-title">Business Admin</h3>
              <p className="role-desc">Paying subscriber managing their isolated Zoho workspace, team, and AI configuration.</p>
              <div className="role-features">
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--gold)" }}>
                    ✓
                  </span>{" "}
                  Connect all Zoho apps via OAuth
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--gold)" }}>
                    ✓
                  </span>{" "}
                  Invite & manage team members
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--gold)" }}>
                    ✓
                  </span>{" "}
                  Configure AI automations
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--gold)" }}>
                    ✓
                  </span>{" "}
                  BI dashboard & reports
                </div>
              </div>
            </div>
            <div className="role-card team fade-up" style={{ transitionDelay: "0.1s" }}>
              <div className="role-chip">Tier 2</div>
              <h3 className="role-title">Team Member</h3>
              <p className="role-desc">Employee using the AI to work faster within the scope their Business Admin has configured.</p>
              <div className="role-features">
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--slate)" }}>
                    ✓
                  </span>{" "}
                  AI Chat & Zoho queries
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--slate)" }}>
                    ✓
                  </span>{" "}
                  Access permitted dashboards
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--slate)" }}>
                    ✓
                  </span>{" "}
                  Run approved automations
                </div>
                <div className="role-feature">
                  <span className="check-icon" style={{ color: "var(--slate)" }}>
                    ✓
                  </span>{" "}
                  Receive proactive alerts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="section-inner">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Pricing
            </div>
            <h2 className="section-title">
              Simple, <em>transparent</em> pricing
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Per workspace billing. Scale your team as you grow. Cancel anytime.
            </p>
          </div>
          <div className="pricing-grid fade-up" style={{ transitionDelay: "0.1s" }}>
            {/* Starter */}
            <div className="pricing-card">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-price">₹1,999</div>
              <div className="pricing-period">per month · 1 workspace</div>
              <div className="pricing-divider"></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> 1 Admin + 3 Team Members
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Connect up to 5 Zoho apps
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> AI Chat (limited)
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Basic Dashboard
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Email support
                </div>
              </div>
              <button onClick={() => setIsRegisterModalOpen(true)} className="btn-pricing btn-pricing-outline">
                Get Started
              </button>
            </div>
            {/* Professional */}
            <div className="pricing-card featured">
              <div className="pricing-featured-badge">Most Popular</div>
              <div className="pricing-plan">Professional</div>
              <div className="pricing-price">₹5,999</div>
              <div className="pricing-period">per month · 1 workspace</div>
              <div className="pricing-divider"></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> 1 Admin + 10 Team Members
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> All 20+ Zoho Apps
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Full AI Chat & Automation
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> BI Dashboard & Alerts
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Priority email support
                </div>
              </div>
              <button onClick={() => setIsRegisterModalOpen(true)} className="btn-pricing btn-pricing-filled">
                Start Free Trial
              </button>
            </div>
            {/* Business */}
            <div className="pricing-card">
              <div className="pricing-plan">Business</div>
              <div className="pricing-price">₹11,999</div>
              <div className="pricing-period">per month · 1 workspace</div>
              <div className="pricing-divider"></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> 1 Admin + 25 Team Members
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Everything in Professional
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Custom & Scheduled Reports
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Advanced Analytics
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Priority support + SLA
                </div>
              </div>
              <button onClick={() => setIsRegisterModalOpen(true)} className="btn-pricing btn-pricing-outline">
                Get Started
              </button>
            </div>
            {/* Enterprise */}
            <div className="pricing-card">
              <div className="pricing-plan">Enterprise</div>
              <div className="pricing-price">Custom</div>
              <div className="pricing-period">annual billing · unlimited seats</div>
              <div className="pricing-divider"></div>
              <div className="pricing-features">
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Unlimited Team Members
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Everything in Business
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Custom AI Instructions
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> API Access & SSO
                </div>
                <div className="pricing-feature">
                  <span className="pricing-feature-check">✓</span> Dedicated onboarding
                </div>
              </div>
              <a href="#" className="btn-pricing btn-pricing-outline">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner fade-up">
          <h2 className="cta-title">
            Ready to make Zoho
            <br />
            work <em>for you?</em>
          </h2>
          <p className="cta-subtitle">Join 1,200+ businesses that have unified their Zoho ecosystem with AI. Setup takes under 10 minutes.</p>
          <div className="cta-buttons">
            <button onClick={() => setIsRegisterModalOpen(true)} className="btn-cta-white">
              Start free — no credit card
            </button>
            <a href="#" className="btn-cta-ghost">
              Schedule a demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">Z</div>
              <span className="footer-logo-text">
                ZohoAI <span>Assistant</span>
              </span>
            </Link>
            <p className="footer-tagline">The intelligent AI layer for businesses running on the Zoho ecosystem. One interface, every app, zero complexity.</p>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <div className="footer-links">
              <a href="#">AI Chat Assistant</a>
              <a href="#">Business Intelligence</a>
              <a href="#">Workflow Automation</a>
              <a href="#">Proactive Alerts</a>
              <a href="#">Reports & Analytics</a>
              <a href="#">Integrations</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal & Support</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Security</a>
              <a href="#">Documentation</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ZohoAI Assistant. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        /* Additional specific styles for typing animation if needed */
        .typing-dots span {
          animation: bounce 1.2s infinite;
        }
        @keyframes bounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <RegisterMode 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
        onSwitchToLogin={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
        onRegisterSuccess={() => {
          setIsRegisterModalOpen(false);
          setIsLoggedIn(true);
        }}
      />

      <LoginModel 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSwitchToRegister={() => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(true);
        }}
        onSwitchToForgot={() => {
          setIsLoginModalOpen(false);
          setIsForgotModalOpen(true);
        }}
        onLoginSuccess={() => {
          setIsLoginModalOpen(false);
          setIsLoggedIn(true);
        }}
      />

      <ForgotPasswordModel 
        isOpen={isForgotModalOpen} 
        onClose={() => setIsForgotModalOpen(false)} 
        onSwitchToLogin={() => {
          setIsForgotModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />

      <OnboardingModal 
        open={isOnboardingModalOpen} 
        setOpen={setIsOnboardingModalOpen} 
      />
    </>
  );
}
