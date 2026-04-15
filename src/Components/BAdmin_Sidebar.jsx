import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Bell } from "lucide-react";

export default function BAdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/Pages/BAdmin" className="logo-link" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div className="logo-icon">Z</div>
          <span className="logo-text">ZohoAI</span>
        </Link>
        <button className={`alert-button ${pathname === '/Pages/BAdmin/Alerts' ? 'active' : ''}`} onClick={() => router.push("/Pages/BAdmin/Alerts")}>
          <Bell size={18} />
        </button>
      </div>

      <div className="workspace-block">
        <div className="org-avatar">AC</div>
        <div className="org-details">
          <span className="org-name">Acme Corp</span>
          <div className="org-meta">
            <span className="org-plan">Basic Plan</span>
            <span className="org-dot">•</span>
            <span className="org-members">3 Members</span>
          </div>
        </div>
      </div>

      <div className="sidebar-nav">
        <div className="nav-section">
          <span className="section-label">Workspace</span>
          <div className="nav-group">
            <button onClick={() => router.push('/Pages/BAdmin')} className={`nav-item ${pathname === '/Pages/BAdmin' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/AI-Assist')} className={`nav-item ${pathname === '/Pages/BAdmin/AI-Assist' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              AI Assist
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/Automations')} className={`nav-item ${pathname === '/Pages/BAdmin/Automations' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Automations
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/Reports')} className={`nav-item ${pathname === '/Pages/BAdmin/Reports' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </button>
            {/* <button onClick={() => router.push('/Pages/BAdmin/Alerts')} className={`nav-item ${pathname === '/Pages/BAdmin/Alerts' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Alerts
            </button> */}
          </div>
        </div>

        <div className="nav-section">
          <span className="section-label">Management</span>
          <div className="nav-group">
            <button onClick={() => router.push('/Pages/BAdmin/Team')} className={`nav-item ${pathname === '/Pages/BAdmin/Team' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Team
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/Integrations')} className={`nav-item ${pathname === '/Pages/BAdmin/Integrations' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Integrations
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/Settings')} className={`nav-item ${pathname === '/Pages/BAdmin/Settings' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>
            <button onClick={() => router.push('/Pages/BAdmin/Billing')} className={`nav-item ${pathname === '/Pages/BAdmin/Billing' ? 'active' : ''}`}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Billing
            </button>
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="theme-switcher border-bottom">
          <span className="theme-label">Appearance</span>
          <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Appearance">
            {theme === "light" ? (
              <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
        </div>
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Sarah Jenkins</span>
            <span className="user-role">Business Admin</span>
          </div>
          <button onClick={() => router.push('/')} className="icon-btn logout-btn" title="Logout">
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          background-color: var(--charcoal);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          color: white;
          font-family: var(--font-outfit), sans-serif;
          position: sticky;
          top: 0;
        }

        .sidebar-header {
          padding: 24px 20px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 13px;
          font-family: var(--font-cormorant), serif;
          font-weight: 600;
        }

        .logo-text {
          font-family: var(--font-cormorant), serif;
          font-size: 18px;
          font-weight: 600;
          color: white;
          letter-spacing: 0.5px;
        }

        .alert-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .alert-button:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .alert-button.active {
          background: rgba(184, 132, 42, 0.1);
          border-color: rgba(184, 132, 42, 0.2);
          color: white;
        }

        .workspace-block {
          margin: 0 16px 16px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .org-avatar {
          width: 36px;
          height: 36px;
          background: rgba(184, 132, 42, 0.2);
          color: var(--gold-light);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
        }

        .org-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .org-name {
          font-size: 14px;
          font-weight: 500;
          color: white;
        }

        .org-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
        }

        .org-plan {
          color: var(--gold-light);
        }

        .org-dot {
          font-size: 8px;
        }

        .sidebar-nav {
          flex: 1;
          padding: 0 16px 24px;
          overflow-y: auto;
        }

        .nav-section {
          margin-bottom: auto;
        }

        .section-label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 8px;
          padding-left: 12px;
          font-weight: 500;
        }

        .nav-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .border-top {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.04);
        }

        .nav-item.active {
          color: white;
          background: rgba(184, 132, 42, 0.1);
          border-color: rgba(184, 132, 42, 0.2);
          font-weight: 500;
        }

        .nav-item.active .nav-icon {
          color: var(--gold-light);
        }

        .nav-icon {
          width: 18px;
          height: 18px;
          opacity: 0.8;
          flex-shrink: 0;
        }

        .sidebar-footer {
          padding: 16px;
          background: rgba(0, 0, 0, 0.1);
        }

        .theme-switcher {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          margin-bottom: 16px;
        }

        .theme-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 600;
        }

        .theme-toggle-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--gold-light);
          padding: 6px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .theme-toggle-btn:hover {
          background: rgba(184, 132, 42, 0.2);
          border-color: var(--gold-light);
          transform: scale(1.1);
        }

        .theme-icon {
          width: 16px;
          height: 16px;
        }

        .user-profile {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 14px;
          font-weight: 500;
          color: white;
        }

        .user-role {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        
        .logout-btn:hover {
          color: #ff5f57;
          background: rgba(255, 95, 87, 0.1);
        }

        /* Custom Scrollbar */
        .sidebar-nav::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-nav::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </aside>
  );
}
