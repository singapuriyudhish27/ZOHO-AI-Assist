"use client";
import React, { useState } from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function BCustomers() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const stats = [
        { label: "Total Tenants", value: "1,240", icon: "🏢" },
        { label: "New (30d)", value: "+85", icon: "📈", color: "#10B981" },
        { label: "Churn Rate", value: "1.2%", icon: "📉", color: "#EF4444" }
    ];

    const allCustomers = [
        { id: 1, name: "Acme Corp", email: "sarah@acme.com", plan: "Professional", seats: "8 / 10", mrr: "$99.00", date: "Oct 12, 2025", status: "Active" },
        { id: 2, name: "Global Tech", email: "mike@global.io", plan: "Enterprise", seats: "45 / 50", mrr: "$599.00", date: "Sep 05, 2025", status: "Active" },
        { id: 3, name: "Starlight Inc", email: "admin@starlight.co", plan: "Starter", seats: "3 / 3", mrr: "$49.00", date: "Nov 01, 2025", status: "Trial" },
        { id: 4, name: "Zenith Solutions", email: "hr@zenith.com", plan: "Business", seats: "22 / 25", mrr: "$249.00", date: "Aug 20, 2025", status: "Suspended" },
        { id: 5, name: "Cloud Nine", email: "billing@cloud9.io", plan: "Professional", seats: "8 / 10", mrr: "$99.00", date: "Oct 30, 2025", status: "Active" },
        { id: 6, name: "Aria Systems", email: "ceo@aria.io", plan: "Professional", seats: "5 / 10", mrr: "$99.00", date: "Nov 02, 2025", status: "Active" },
        { id: 7, name: "Blue Ridge", email: "contact@blueridge.com", plan: "Starter", seats: "1 / 3", mrr: "$49.00", date: "Oct 15, 2025", status: "Trial" }
    ];

    const filteredCustomers = allCustomers.filter(c => {
        const matchesTab = activeTab === "All" || c.status === activeTab;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             c.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Business Customer Management</h1>
                        <p className="page-subtitle">Oversee all tenant accounts, manage subscriptions, and system access.</p>
                    </div>
                    <button className="primary-action-btn">+ Register Tenant</button>
                </div>

                {/* Summary Stats */}
                <div className="stats-row">
                    {stats.map(s => (
                        <div key={s.label} className="stat-card">
                            <span className="s-icon">{s.icon}</span>
                            <div className="s-info">
                                <span className="s-label">{s.label}</span>
                                <h3 className="s-val" style={{ color: s.color || 'var(--charcoal)' }}>{s.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search & Filter Bar */}
                <div className="platform-card filter-card">
                    <div className="filter-header">
                        <div className="status-tabs">
                            {["All", "Active", "Trial", "Suspended"].map(tab => (
                                <button 
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="search-box">
                            <svg className="search-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            <input 
                                type="text" 
                                placeholder="Search by name or email..." 
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="master-table">
                            <thead>
                                <tr>
                                    <th>Business / Email</th>
                                    <th>Sub. Plan</th>
                                    <th>Seat Usage</th>
                                    <th>Monthly Rev.</th>
                                    <th>Registered</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomers.map(customer => (
                                    <tr key={customer.id}>
                                        <td>
                                            <div className="cus-identity">
                                                <span className="cus-name">{customer.name}</span>
                                                <span className="cus-email">{customer.email}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`p-badge ${customer.plan.toLowerCase()}`}>
                                                {customer.plan}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="seat-context">
                                                <span className="seat-num">{customer.seats}</span>
                                                <div className="mini-progress">
                                                    <div className="mini-fill" style={{ width: '80%' }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="mrr-val">{customer.mrr}</td>
                                        <td className="reg-date">{customer.date}</td>
                                        <td>
                                            <span className={`status-pill ${customer.status.toLowerCase()}`}>
                                                {customer.status}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="action-dot-btn">
                                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --platform-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --table-head: #FAFAFA;
                    --tab-bg: #F1F5F9;
                    --input-bg: #F8F9FA;
                    --item-bg-hover: #F8F9FA;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --platform-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --table-head: #252529;
                    --tab-bg: #252529;
                    --input-bg: #252529;
                    --item-bg-hover: #252529;
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
                    align-items: center;
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
                    padding: 12px 24px;
                    background: var(--gold);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                }

                .primary-action-btn:hover { 
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                /* Stats row */
                .stats-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .stat-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    box-shadow: var(--platform-shadow);
                    transition: all 0.3s;
                }

                .s-icon { font-size: 24px; }
                .s-label { font-size: 12px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px; }
                .s-val { font-size: 26px; font-weight: 700; margin: 0; font-family: var(--font-cormorant); }

                /* Table Card */
                .platform-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 16px;
                    padding: 32px;
                    box-shadow: var(--platform-shadow);
                    transition: all 0.3s;
                }

                .filter-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 32px;
                }

                .status-tabs {
                    display: flex;
                    background: var(--tab-bg);
                    padding: 4px;
                    border-radius: 10px;
                    gap: 4px;
                    transition: background 0.3s;
                }

                .tab-btn {
                    padding: 6px 16px;
                    border: none;
                    background: transparent;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-sub);
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all 0.2s;
                }

                .tab-btn.active {
                    background: var(--bg-card);
                    color: var(--text-main);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: var(--input-bg);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    padding: 0 16px;
                    width: 300px;
                    transition: all 0.3s;
                }

                .search-input {
                    background: transparent;
                    border: none;
                    padding: 10px 0;
                    font-size: 14px;
                    color: var(--text-main);
                    outline: none;
                    width: 100%;
                }

                .search-icon { color: var(--text-sub); }

                /* Master Table */
                .table-wrapper { overflow-x: auto; }
                .master-table { width: 100%; border-collapse: collapse; text-align: left; }
                .master-table th { padding: 12px 16px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); border-bottom: 2px solid var(--border-main); font-weight: 700; background: var(--table-head); transition: background 0.3s; }
                .master-table td { padding: 20px 16px; border-bottom: 1px solid var(--border-main); vertical-align: middle; color: var(--text-main); }
                .master-table tr:hover { background: var(--item-bg-hover); }

                .cus-identity { display: flex; flex-direction: column; }
                .cus-name { font-size: 15px; font-weight: 700; color: var(--text-main); }
                .cus-email { font-size: 13px; color: var(--text-sub); }

                /* Badges & Pills */
                .p-badge { padding: 4px 10px; border-radius: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; border: 1px solid transparent; }
                .p-badge.starter { background: var(--bg-page); color: var(--text-sub); border-color: var(--border-main); }
                .p-badge.professional { background: rgba(184, 132, 42, 0.1); color: var(--gold); border-color: rgba(184, 132, 42, 0.2); }
                .p-badge.business { background: #1E293B; color: white; }
                :global(.dark) .p-badge.business { background: #334155; }
                .p-badge.enterprise { background: #000; color: #FFF; }
                :global(.dark) .p-badge.enterprise { background: #000; border-color: rgba(255,255,255,0.2); }

                .status-pill { padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; border: 1px solid transparent; }
                .status-pill.active { background: rgba(16, 185, 129, 0.1); color: #10B981; border-color: rgba(16, 185, 129, 0.2); }
                .status-pill.trial { background: rgba(59, 130, 246, 0.1); color: #3B82F6; border-color: rgba(59, 130, 246, 0.2); }
                .status-pill.suspended { background: rgba(239, 68, 68, 0.1); color: #EF4444; border-color: rgba(239, 68, 68, 0.2); }

                .seat-context { display: flex; flex-direction: column; gap: 6px; }
                .seat-num { font-size: 13px; font-weight: 600; color: var(--text-main); }
                .mini-progress { height: 4px; width: 60px; background: var(--bg-page); border-radius: 2px; overflow: hidden; border: 1px solid var(--border-main); }
                .mini-fill { height: 100%; background: var(--gold); border-radius: 2px; }

                .mrr-val { font-size: 14px; font-weight: 700; color: var(--text-main); }
                .reg-date { font-size: 13px; color: var(--text-sub); }

                .action-dot-btn { background: transparent; border: none; cursor: pointer; color: var(--text-sub); padding: 4px; border-radius: 4px; transition: all 0.2s; }
                .action-dot-btn:hover { background: var(--bg-page); color: var(--text-main); }
                .text-right { text-align: right; }
            `}</style>
        </div>
    );
}
