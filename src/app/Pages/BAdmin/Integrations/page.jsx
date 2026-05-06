"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";
import NewIntegrationModal from "@/Components/NewIntegrationModal";

export default function Integrations() {
    const [activeTab, setActiveTab] = useState("zoho");
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);

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

                {/* Tab Switcher - Visual Update: Underline Style */}
                <div className="tabs-container">
                    <div className="tabs-list">
                        <button 
                            className={`tab-item ${activeTab === 'zoho' ? 'active' : ''}`}
                            onClick={() => setActiveTab('zoho')}
                        >
                            <svg className="tab-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            Zoho Apps
                        </button>
                        <button 
                            className={`tab-item ${activeTab === 'others' ? 'active' : ''}`}
                            onClick={() => setActiveTab('others')}
                        >
                            <svg className="tab-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                            </svg>
                            Other Integrations
                        </button>
                    </div>
                </div>

                {/* Zoho Suite Ecosystem */}
                {activeTab === 'zoho' && (
                    <div className="fade-in">
                        <section className="integration-section">
                            <div className="section-header">
                                <h2 className="section-title">Zoho Suite Ecosystem</h2>
                                <span className="badge-count">
                                    {zohoApps.filter(a => a.connected).length} connected
                                </span>
                            </div>

                            <div className="integration-grid">
                                {zohoApps.filter(app => app.connected).map(app => (
                                    <div key={app.id} className="integration-card active">
                                        <div className="card-top">
                                            <div className="app-icon-wrapper">{app.icon}</div>
                                            <div className="card-actions">
                                                <button className="icon-btn text-charcoal" title="Configure Field Mapping">
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                                </button>
                                                <button className="action-btn btn-disconnect">Disconnect</button>
                                            </div>
                                        </div>
                                        
                                        <div className="app-info">
                                            <h3 className="app-name">{app.name}</h3>
                                            <p className="app-sub">{app.sub}</p>
                                            
                                            <div className="sync-info">
                                                <span className="sync-status compact">
                                                    <span className="sync-dot green"></span>
                                                    {app.lastSync}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="integration-section margin-top">
                            <div className="section-header">
                                <h2 className="section-title text-slate">Disconnected ZOHO Apps</h2>
                                <p className="section-subtitle">Apps available in your ZOHO subscription</p>
                            </div>

                            <div className="integration-grid">
                                {zohoApps.filter(app => !app.connected).map(app => (
                                    <div key={app.id} className="integration-card inactive">
                                        <div className="card-top">
                                            <div className="app-icon-wrapper monochrome">{app.icon}</div>
                                            <div className="card-actions">
                                                <button className="action-btn btn-connect">Connect</button>
                                            </div>
                                        </div>
                                        
                                        <div className="app-info">
                                            <h3 className="app-name">{app.name}</h3>
                                            <p className="app-sub">{app.sub}</p>
                                            <div className="sync-info">
                                                <span className="sync-status compact text-slate">Not Connected</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'others' && (
                    <section className="integration-section margin-top fade-in">
                        <div className="section-header space-between">
                            <h2 className="section-title text-slate">Third-Party Integrations <span className="coming-soon-badge">Coming Soon</span></h2>
                            <button className="secondary-action-btn" onClick={() => setIsNewModalOpen(true)}>
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                                New Integration
                            </button>
                        </div>

                        <div className="integration-grid">
                            {thirdPartyApps.map(app => (
                                <div key={app.id} className="integration-card upcoming">
                                    <div className="card-top">
                                        <div className="app-icon-wrapper monochrome">{app.icon}</div>
                                        <button className="action-btn btn-connect coming-soon">Connect</button>
                                    </div>
                                    
                                    <div className="app-info">
                                        <h3 className="app-name">{app.name}</h3>
                                        <p className="app-sub">{app.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

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
                    --text-sub: rgba(255,255,255,0.4);
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

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
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

                .secondary-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: transparent;
                    color: var(--gold);
                    border: 1px solid var(--gold);
                    border-radius: 8px;
                    font-family: inherit;
                    font-weight: 600;
                    font-size: 13px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-action-btn:hover {
                    background: var(--gold);
                    color: white;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                }

                /* Visual Update: Underline Tabs */
                .tabs-container {
                    border-bottom: 1px solid var(--border-main);
                    margin-bottom: 16px;
                }

                .tabs-list {
                    display: flex;
                    gap: 40px;
                }

                .tab-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 0;
                    background: transparent;
                    border: none;
                    color: var(--text-sub);
                    font-size: 16px;
                    font-weight: 500;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s;
                    border-bottom: 2px solid transparent;
                }

                .tab-item:hover {
                    color: var(--text-main);
                }

                .tab-item.active {
                    color: var(--gold);
                    border-bottom-color: var(--gold);
                }

                :global(.dark) .tab-item.active {
                    color: var(--gold);
                    border-bottom-color: var(--gold);
                }

                .tab-icon {
                    opacity: 0.7;
                    transition: all 0.2s;
                }

                .tab-item.active .tab-icon {
                    opacity: 1;
                    color: var(--gold);
                }

                .fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
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

                .section-header.space-between {
                    justify-content: space-between;
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
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 16px;
                }

                .integration-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 16px;
                    box-shadow: var(--int-shadow);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    transition: all 0.3s;
                }

                .integration-card.active {
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .integration-card.active:hover,
                .integration-card.inactive:hover,
                .integration-card.upcoming:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(16, 185, 129, 0.1);
                    border-color: #10B981;
                    opacity: 1;
                    border-style: solid; /* Ensure dashed border becomes solid on hover if it was upcoming */
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

                .card-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .app-icon-wrapper {
                    width: 36px;
                    height: 36px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    transition: all 0.2s;
                }

                .app-icon-wrapper.monochrome {
                    filter: grayscale(100%);
                    opacity: 0.7;
                }

                .action-btn {
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    border: 1px solid transparent;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .btn-connect {
                    background: var(--gold);
                    color: white;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                }

                .btn-connect:hover {
                    transform: translateY(-1px);
                    filter: brightness(1.1);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                }

                .btn-connect.coming-soon {
                    background: var(--bg-page);
                    border-color: var(--border-main);
                    color: var(--text-sub);
                    opacity: 0.6;
                    cursor: not-allowed;
                    box-shadow: none;
                }

                .btn-disconnect {
                    background: transparent;
                    border-color: var(--border-main);
                    color: var(--text-sub);
                }

                .btn-disconnect:hover {
                    border-color: #EF4444;
                    color: #EF4444;
                    background: rgba(239, 68, 68, 0.05);
                }

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

                .sync-info {
                    margin-top: 4px;
                }

                .sync-status.compact {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 10px;
                    color: var(--text-sub);
                    font-weight: 500;
                    opacity: 0.8;
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

            <NewIntegrationModal
                isOpen={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
            />
        </div>
    );
}
