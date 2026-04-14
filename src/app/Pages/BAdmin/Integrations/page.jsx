"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Integrations() {
    const zohoApps = [
        { id: 1, name: "Zoho CRM", sub: "Sales pipeline & contacts", icon: "🤝", connected: true, lastSync: "2 mins ago" },
        { id: 2, name: "Zoho Books", sub: "Invoices, revenue & expenses", icon: "📚", connected: true, lastSync: "5 mins ago" },
        { id: 3, name: "Zoho Desk", sub: "Support tickets & SLAs", icon: "🎧", connected: true, lastSync: "1 hour ago" },
        { id: 4, name: "Zoho Projects", sub: "Tasks & milestones", icon: "📋", connected: true, lastSync: "10 mins ago" },
        { id: 5, name: "Zoho Mail", sub: "Email drafting & reading", icon: "📧", connected: true, lastSync: "1 min ago" },
        { id: 6, name: "Zoho Inventory", sub: "Stock levels & POs", icon: "📦", connected: true, lastSync: "4 hours ago" },
        { id: 7, name: "Zoho Cliq", sub: "Internal chat & broadcasting", icon: "💬", connected: false, lastSync: null }
    ];

    const thirdPartyApps = [
        { id: 101, name: "Stripe", sub: "Payment gateways", icon: "💳" },
        { id: 102, name: "Slack", sub: "Channel notifications", icon: "💬" },
        { id: 103, name: "Microsoft Teams", sub: "Team collaboration", icon: "👥" },
        { id: 104, name: "Google Workspace", sub: "Docs & Calendar", icon: "📅" }
    ];

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="main-content">
                
                {/* Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Integrations & Data Sources</h1>
                        <p className="page-subtitle">Manage OAuth connections to power your AI Workspace.</p>
                    </div>
                    <button className="primary-action-btn">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                        Sync All Data
                    </button>
                </div>

                {/* Zoho Suite Ecosystem */}
                <section className="integration-section">
                    <div className="section-header">
                        <h2 className="section-title">Zoho Suite Ecosystem</h2>
                        <span className="badge-count">6 connected</span>
                    </div>

                    <div className="integration-grid">
                        {zohoApps.map(app => (
                            <div key={app.id} className={`integration-card ${app.connected ? 'active' : 'inactive'}`}>
                                <div className="card-top">
                                    <div className="app-icon-wrapper">{app.icon}</div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked={app.connected} />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                
                                <div className="app-info">
                                    <h3 className="app-name">{app.name}</h3>
                                    <p className="app-sub">{app.sub}</p>
                                </div>

                                <div className="card-footer border-top">
                                    {app.connected ? (
                                        <div className="sync-status">
                                            <span className="sync-dot green"></span>
                                            Last synced: {app.lastSync}
                                        </div>
                                    ) : (
                                        <div className="sync-status text-slate">
                                            Not Connected
                                        </div>
                                    )}
                                    <button className="icon-btn text-charcoal" title="Configure Field Mapping">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Third-Party Coming Soon */}
                <section className="integration-section margin-top">
                    <div className="section-header">
                        <h2 className="section-title text-slate">Third-Party Integrations <span className="coming-soon-badge">Coming Soon</span></h2>
                    </div>

                    <div className="integration-grid">
                        {thirdPartyApps.map(app => (
                            <div key={app.id} className="integration-card upcoming">
                                <div className="card-top">
                                    <div className="app-icon-wrapper monochrome">{app.icon}</div>
                                    <button className="notify-btn">Notify Me</button>
                                </div>
                                
                                <div className="app-info">
                                    <h3 className="app-name">{app.name}</h3>
                                    <p className="app-sub">{app.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --int-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --int-shadow: 0 10px 40px rgba(0,0,0,0.3);
                }

                .app-container {
                    display: flex;
                    height: 100vh;
                    background-color: var(--bg-page);
                    overflow: hidden;
                    transition: background-color 0.3s;
                }

                .main-content {
                    flex: 1;
                    padding: 40px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .page-title {
                    font-family: var(--font-cormorant), serif;
                    font-size: 32px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin-bottom: 6px;
                    letter-spacing: -0.5px;
                }

                .page-subtitle {
                    font-size: 15px;
                    color: var(--text-sub);
                    font-weight: 300;
                }

                .primary-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--gold);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                    transition: all 0.2s;
                }

                .primary-action-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                .integration-section {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .margin-top {
                    margin-top: 24px;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .section-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .text-slate { color: var(--text-sub); }

                .badge-count {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10B981;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .coming-soon-badge {
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    color: var(--text-sub);
                    padding: 4px 10px;
                    border-radius: 10px;
                    font-size: 11px;
                    margin-left: 8px;
                    vertical-align: middle;
                }

                .integration-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                }

                .integration-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: var(--int-shadow);
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    transition: all 0.3s;
                }

                .integration-card.active {
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .integration-card.active:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(16, 185, 129, 0.1);
                    border-color: #10B981;
                }

                .integration-card.inactive {
                    background: var(--bg-page);
                    opacity: 0.7;
                }

                .integration-card.upcoming {
                    background: transparent;
                    border-style: dashed;
                    opacity: 0.5;
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .app-icon-wrapper {
                    width: 44px;
                    height: 44px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: all 0.2s;
                }

                .app-icon-wrapper.monochrome {
                    filter: grayscale(100%);
                    opacity: 0.7;
                }

                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 22px;
                }

                .toggle-switch input { opacity: 0; width: 0; height: 0; }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: var(--bg-page);
                    transition: .3s;
                    border-radius: 22px;
                    border: 1px solid var(--border-main);
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 14px;
                    width: 14px;
                    left: 3px;
                    bottom: 3px;
                    background-color: var(--text-sub);
                    transition: .3s;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                input:checked + .slider { background-color: #10B981; border-color: #10B981; }
                input:checked + .slider:before { transform: translateX(18px); background-color: white; }

                .notify-btn {
                    background: transparent;
                    border: 1px solid var(--border-main);
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 500;
                    color: var(--text-sub);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .notify-btn:hover { background: var(--bg-page); color: var(--text-main); }

                .app-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    flex: 1;
                }

                .app-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .app-sub {
                    font-size: 13px;
                    color: var(--text-sub);
                    margin: 0;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 16px;
                    border-top: 1px solid var(--border-main);
                }

                .sync-status {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    color: var(--text-sub);
                    font-weight: 500;
                }

                .sync-dot.green {
                    width: 8px;
                    height: 8px;
                    background: #10B981;
                    border-radius: 50%;
                    box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
                }

                .icon-btn {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .icon-btn:hover { background: var(--bg-page); color: var(--gold); }
                .icon-btn.text-charcoal { color: var(--text-sub); }
                .icon-btn.text-charcoal:hover { color: var(--text-main); }
            `}</style>
        </div>
    );
}
