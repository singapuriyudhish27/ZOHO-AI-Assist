"use client";
import React, { useState } from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("Account");
    const [twoFA, setTwoFA] = useState(true);

    const admins = [
        { id: 1, name: "Super Root", email: "root@aiassist.io", role: "Owner", lastActive: "Now" },
        { id: 2, name: "System Admin", email: "sysadmin@aiassist.io", role: "Manage Access", lastActive: "10 mins ago" },
        { id: 3, name: "Support Manager", email: "support@aiassist.io", role: "Support Overrides", lastActive: "Oct 24, 2025" }
    ];

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Management Governance</h1>
                        <p className="page-subtitle">Master controls for platform identity, security, and administrative oversight.</p>
                    </div>
                    <button className="primary-action-btn">Save Settings</button>
                </div>

                {/* Tabbed Navigation */}
                <div className="tabs-bar">
                    {["Account", "Branding", "Team", "Maintenance"].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "Account" && (
                    <div className="config-sections">
                        <div className="platform-card">
                            <h2 className="card-title">Super Admin Profile</h2>
                            <div className="grid-2">
                                <div className="input-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" defaultValue="Super Root" className="form-input" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label">Root Email Address</label>
                                    <input type="email" defaultValue="root@aiassist.io" className="form-input" />
                                </div>
                            </div>
                            <div className="input-group mt-16">
                                <label className="form-label">Update Password</label>
                                <input type="password" placeholder="••••••••••••" className="form-input" />
                                <p className="form-hint">Leave blank to keep current password.</p>
                            </div>
                        </div>

                        <div className="platform-card mt-32">
                            <h2 className="card-title">Administrative Security</h2>
                            <div className="security-row">
                                <div className="s-info">
                                    <span className="s-label">Two-Factor Authentication (2FA)</span>
                                    <span className="s-desc">Require a secure code to access the Super Admin workspace.</span>
                                </div>
                                <button onClick={() => setTwoFA(!twoFA)} className={`switch ${twoFA ? 'on' : ''}`}></button>
                            </div>
                            <div className="session-list mt-32">
                                <h3 className="sub-title">Active Workstation Sessions</h3>
                                <div className="session-item">
                                    <span className="ss-icon">💻</span>
                                    <div className="ss-info">
                                        <span className="ss-name">Chrome on Windows (Current)</span>
                                        <span className="ss-meta">IP: 192.168.1.1 — Mumbai, India</span>
                                    </div>
                                    <button className="ss-revoke">Revoke</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Branding" && (
                    <div className="config-sections">
                        <div className="platform-card">
                            <h2 className="card-title">Platform Identity & Visual Assets</h2>
                            <div className="branding-grid">
                                <div className="brand-uploader">
                                    <label className="form-label">Platform Logo</label>
                                    <div className="logo-preview-box">
                                        <span className="preview-label">Logotype</span>
                                    </div>
                                    <button className="secondary-action-btn w-100">Upload New Logo</button>
                                </div>
                                <div className="brand-uploader">
                                    <label className="form-label">App Favicon</label>
                                    <div className="favicon-preview-box">
                                        <span className="preview-label">Favicon</span>
                                    </div>
                                    <button className="secondary-action-btn w-100">Upload Icon</button>
                                </div>
                            </div>
                            <div className="input-group mt-32">
                                <label className="form-label">System Brand Color</label>
                                <div className="color-picker-row">
                                    <div className="color-box" style={{ background: '#B8842A' }}></div>
                                    <input type="text" defaultValue="#B8842A" className="form-input" style={{ width: '120px' }} />
                                    <p className="form-hint">This color is used for buttons, links, and accented indicators.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Team" && (
                    <div className="platform-card full-card">
                        <div className="card-header-flex">
                            <h2 className="card-title">Administrative Team</h2>
                            <button className="secondary-action-btn">+ Invite Super Admin</button>
                        </div>
                        <div className="table-wrapper">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Name / Email</th>
                                        <th>Access Role</th>
                                        <th>Last Active</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map(admin => (
                                        <tr key={admin.id}>
                                            <td>
                                                <div className="ad-identity">
                                                    <span className="ad-name">{admin.name}</span>
                                                    <span className="ad-email">{admin.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`role-badge ${admin.role.toLowerCase().replace(' ', '-')}`}>
                                                    {admin.role}
                                                </span>
                                            </td>
                                            <td className="ad-date">{admin.lastActive}</td>
                                            <td><button className="text-red-btn">Remove</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === "Maintenance" && (
                    <div className="config-sections">
                        <div className="platform-card">
                            <h2 className="card-title">System Integrity & Integrity</h2>
                            <div className="maintenance-list">
                                <div className="m-row">
                                    <div className="m-info">
                                        <span className="m-label">Database Backup</span>
                                        <span className="m-desc">Download a full timestamped dump of the system database.</span>
                                    </div>
                                    <button className="secondary-action-btn">Download .SQL</button>
                                </div>
                                <div className="m-row mt-24">
                                    <div className="m-info">
                                        <span className="m-label">Platform Maintenance Mode</span>
                                        <span className="m-desc">Inform all tenants of scheduled maintenance. Disables dashboard access.</span>
                                    </div>
                                    <button className="switch"></button>
                                </div>
                            </div>
                        </div>

                        <div className="platform-card mt-32">
                            <h2 className="card-title">Legal & Compliance URLs</h2>
                            <div className="grid-2">
                                <div className="input-group">
                                    <label className="form-label">Terms of Service URL</label>
                                    <input type="text" defaultValue="https://aiassist.io/terms" className="form-input" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label">Privacy Policy URL</label>
                                    <input type="text" defaultValue="https://aiassist.io/privacy" className="form-input" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --input-bg: #F8F9FA;
                    --platform-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --item-bg-hover: #F8F9FA;
                    --preview-bg: #F1F5F9;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --input-bg: #252529;
                    --platform-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --item-bg-hover: #252529;
                    --preview-bg: #252529;
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

                .page-header { display: flex; justify-content: space-between; align-items: flex-end; }
                .page-title { font-family: var(--font-cormorant), serif; font-size: 32px; font-weight: 600; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.5px; }
                .page-subtitle { font-size: 15px; color: var(--text-sub); font-weight: 300; }

                .primary-action-btn { 
                    padding: 12px 24px; 
                    background: var(--gold); 
                    color: white; 
                    border: none; 
                    border-radius: 8px; 
                    font-size: 14px; 
                    font-weight: 600; 
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                    transition: all 0.2s;
                }
                .primary-action-btn:hover { 
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                /* Tabs */
                .tabs-bar { display: flex; border-bottom: 1px solid var(--border-main); gap: 32px; transition: border 0.3s; }
                .tab-item { padding: 12px 0; border: none; background: transparent; font-size: 14px; font-weight: 600; color: var(--text-sub); cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.2s; }
                .tab-item.active { color: var(--gold); border-bottom-color: var(--gold); }

                /* Cards */
                .platform-card { background: var(--bg-card); border: 1px solid var(--border-main); border-radius: 16px; padding: 32px; box-shadow: var(--platform-shadow); transition: all 0.3s; }
                .card-title { font-size: 11px; text-transform: uppercase; color: var(--text-sub); font-weight: 700; letter-spacing: 1px; margin-bottom: 24px; }
                .sub-title { font-size: 13px; font-weight: 700; color: var(--text-main); opacity: 0.8; margin-bottom: 16px; }

                /* Forms */
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                .input-group { display: flex; flex-direction: column; gap: 8px; }
                .form-label { font-size: 14px; font-weight: 600; color: var(--text-main); opacity: 0.8; }
                .form-input { padding: 12px; border: 1px solid var(--border-main); border-radius: 8px; background: var(--input-bg); outline: none; font-size: 14px; color: var(--text-main); transition: all 0.3s; }
                .form-input:focus { border-color: var(--gold); }
                .form-hint { font-size: 12px; color: var(--text-sub); margin-top: 4px; }

                /* Security Toggle */
                .security-row, .m-row { display: flex; justify-content: space-between; align-items: center; }
                .s-info, .m-info { display: flex; flex-direction: column; }
                .s-label, .m-label { font-size: 15px; font-weight: 700; color: var(--text-main); display: block; margin-bottom: 4px; }
                .s-desc, .m-desc { font-size: 13px; color: var(--text-sub); line-height: 1.4; }

                .switch { width: 44px; height: 24px; background: var(--border-main); border-radius: 12px; position: relative; border: none; cursor: pointer; transition: all 0.3s; }
                .switch::after { content: ''; width: 18px; height: 18px; background: white; border-radius: 50%; position: absolute; left: 3px; top: 3px; transition: transform 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .switch.on { background: #10B981; }
                .switch.on::after { transform: translateX(20px); }

                /* Sessions */
                .session-list { display: flex; flex-direction: column; border-top: 1px solid var(--border-main); padding-top: 24px; margin-top: 24px; opacity: 0.9; }
                .session-item { display: flex; align-items: center; gap: 16px; padding: 16px; background: var(--bg-page); border-radius: 10px; border: 1px solid var(--border-main); }
                .ss-icon { font-size: 20px; }
                .ss-info { flex: 1; display: flex; flex-direction: column; }
                .ss-name { font-size: 14px; font-weight: 700; color: var(--text-main); }
                .ss-meta { font-size: 12px; color: var(--text-sub); }
                .ss-revoke { font-size: 11px; font-weight: 700; color: #EF4444; border: none; background: transparent; cursor: pointer; transition: opacity 0.2s; }
                .ss-revoke:hover { opacity: 0.7; }

                /* Branding */
                .branding-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
                .brand-uploader { display: flex; flex-direction: column; gap: 12px; }
                .logo-preview-box, .favicon-preview-box { height: 120px; background: var(--preview-bg); border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 2px dashed var(--border-main); transition: all 0.3s; }
                .preview-label { font-size: 12px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; }

                .color-picker-row { display: flex; align-items: center; gap: 16px; }
                .color-box { width: 44px; height: 44px; border-radius: 8px; border: 2px solid white; box-shadow: 0 0 0 1px var(--border-main); }

                /* Admin Team Table */
                .card-header-flex { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
                .table-wrapper { width: 100%; overflow-x: auto; }
                .admin-table { width: 100%; border-collapse: collapse; text-align: left; }
                .admin-table th { padding: 12px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); border-bottom: 2px solid var(--border-main); }
                .admin-table td { padding: 20px 12px; border-bottom: 1px solid var(--border-main); font-size: 14px; vertical-align: middle; color: var(--text-main); }
                .admin-table tr:hover { background: var(--item-bg-hover); }

                .ad-name { font-weight: 700; color: var(--text-main); display: block; }
                .ad-email { font-size: 12px; color: var(--text-sub); }
                .ad-date { color: var(--text-sub); }

                .role-badge { padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; border: 1px solid transparent; }
                .role-badge.owner { background: rgba(194, 65, 12, 0.1); color: #C2410C; border-color: rgba(194, 65, 12, 0.2); }
                .role-badge.manage-access { background: rgba(3, 105, 161, 0.1); color: #0369A1; border-color: rgba(3, 105, 161, 0.2); }
                .role-badge.support-overrides { background: rgba(16, 185, 129, 0.1); color: #10B981; border-color: rgba(16, 185, 129, 0.2); }

                .text-red-btn { font-size: 12px; font-weight: 700; color: #EF4444; border: none; background: transparent; cursor: pointer; transition: opacity 0.2s; }
                .text-red-btn:hover { opacity: 0.7; }

                .secondary-action-btn { 
                    padding: 10px 20px; 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-main); 
                    border-radius: 8px; 
                    font-weight: 600; 
                    cursor: pointer; 
                    font-size: 13px; 
                    color: var(--text-main);
                    transition: all 0.2s;
                }
                .secondary-action-btn:hover { border-color: var(--gold); background: var(--item-bg-hover); }
                
                .w-100 { width: 100%; }
                .mt-16 { margin-top: 16px; }
                .mt-24 { margin-top: 24px; }
                .mt-32 { margin-top: 32px; }
            `}</style>
        </div>
    );
}
