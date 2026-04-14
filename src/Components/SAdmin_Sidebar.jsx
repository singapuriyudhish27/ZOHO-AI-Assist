import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function SAdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();


  const isActive = (path) => pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/Pages/SAdmin" className="logo-link" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div className="logo-icon">Z</div>
          <span className="logo-text">ZohoAI</span>
        </Link>
        <span className="role-badge">Super Admin</span>
      </div>

      <div className="sidebar-nav">
        <div className="nav-group">
          <button 
            onClick={() => router.push('/Pages/SAdmin')} 
            className={`nav-item ${isActive('/Pages/SAdmin') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </button>
          <button 
            onClick={() => router.push('/Pages/SAdmin/BCustomers')} 
            className={`nav-item ${isActive('/Pages/SAdmin/BCustomers') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Business Customers
          </button>
          <button 
            onClick={() => router.push('/Pages/SAdmin/Analytics')} 
            className={`nav-item ${isActive('/Pages/SAdmin/Analytics') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </button>
          <button 
            onClick={() => router.push('/Pages/SAdmin/Subscriptions')} 
            className={`nav-item ${isActive('/Pages/SAdmin/Subscriptions') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Subscriptions
          </button>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="theme-switcher border-top">
          <span className="theme-label">Appearance</span>
          <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Appearance">
            {theme === "light" ? (
              <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
        </div>
        <div className="nav-group border-top">
          <button 
            onClick={() => router.push('/Pages/SAdmin/Configurations')} 
            className={`nav-item ${isActive('/Pages/SAdmin/Configurations') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configurations
          </button>
          <button 
            onClick={() => router.push('/Pages/SAdmin/Settings')} 
            className={`nav-item ${isActive('/Pages/SAdmin/Settings') ? 'active' : ''}`}
          >
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Settings
          </button>
          <button onClick={() => router.push('/')} className="nav-item logout-btn">
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
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
          padding: 24px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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

        .role-badge {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(255, 255, 255, 0.1);
          padding: 3px 6px;
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .sidebar-nav {
          flex: 1;
          padding: 24px 16px;
          overflow-y: auto;
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
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .theme-switcher {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
        }

        .theme-label {
          font-size: 10px;
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
          width: 14px;
          height: 14px;
        }

        .logout-btn {
          width: 100%;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
        }
        
        .logout-btn:hover {
          color: #ff5f57 !important;
          background: rgba(255, 95, 87, 0.1) !important;
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
