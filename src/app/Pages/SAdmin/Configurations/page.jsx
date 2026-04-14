"use client";
import React, { useState } from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function Configurations() {
    const [activeTab, setActiveTab] = useState("AI Engine");
    
    const [globalToggles, setGlobalToggles] = useState({
        voiceAssistant: true,
        fileAnalysis: true,
        maintenanceMode: false,
        debugLogging: false
    });

    const aiModels = ["Claude 3.5 Sonnet (Default)", "Claude 3 Opus", "GPT-4o", "GPT-4 Turbo", "Gemini 1.5 Pro"];
    
    const appMatrix = [
        { app: "Zoho CRM", starter: true, pro: true, business: true, enterprise: true },
        { app: "Zoho Books", starter: false, pro: true, business: true, enterprise: true },
        { app: "Zoho Desk", starter: false, pro: true, business: true, enterprise: true },
        { app: "Zoho Projects", starter: false, pro: false, business: true, enterprise: true },
        { app: "Zoho Inventory", starter: false, pro: false, business: true, enterprise: true },
        { app: "Zoho People", starter: false, pro: false, business: false, enterprise: true }
    ];

    const keyVault = [
        { service: "Anthropic API", key: "sk-ant-••••p21x", status: "Active", usage: "$412.50 / $1000" },
        { service: "OpenAI API", key: "sk-proj-••••k892", status: "Active", usage: "$185.00 / $500" },
        { service: "Google Cloud (Gemini)", key: "AIzaSy••••qW01", status: "Active", usage: "$12.00 / $100" }
    ];

    const toggleFeature = (feature) => {
        setGlobalToggles(prev => ({ ...prev, [feature]: !prev[feature] }));
    };

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Platform Configurations</h1>
                        <p className="page-subtitle">Govern global AI engine logic, feature availability, and API credentials.</p>
                    </div>
                    <button className="primary-action-btn">Save Changes</button>
                </div>

                {/* Tabbed Navigation */}
                <div className="tabs-bar">
                    {["AI Engine", "App Matrix", "Compliance"].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "AI Engine" && (
                    <div className="config-sections">
                        
                        {/* Master AI Engine Config */}
                        <div className="platform-card">
                            <h2 className="card-title">Master engine Settings</h2>
                            <div className="input-group">
                                <label className="form-label">Default Platform Model</label>
                                <select className="form-input">
                                    {aiModels.map(m => <option key={m}>{m}</option>)}
                                </select>
                            </div>
                            <div className="grid-2 mt-24">
                                <div className="input-group">
                                    <label className="form-label">Global Temperature</label>
                                    <input type="range" min="0" max="1" step="0.1" className="range-slider" />
                                    <div className="range-vals"><span>Precise (0)</span><span>Creative (1)</span></div>
                                </div>
                                <div className="input-group">
                                    <label className="form-label">Global Max Response (Tokens)</label>
                                    <input type="number" defaultValue={2048} className="form-input" />
                                </div>
                            </div>
                        </div>

                        {/* Secure Key Vault */}
                        <div className="platform-card mt-32">
                            <h2 className="card-title">Secure Key Vault</h2>
                            <div className="key-list">
                                {keyVault.map(v => (
                                    <div key={v.service} className="key-row">
                                        <div className="key-main">
                                            <span className="key-service">{v.service}</span>
                                            <code className="key-val">{v.key}</code>
                                        </div>
                                        <div className="key-meta">
                                            <span className="k-usage">{v.usage}</span>
                                            <span className="k-status active">{v.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="secondary-action-btn mt-32">+ Rotate/Update Keys</button>
                        </div>

                    </div>
                )}

                {activeTab === "App Matrix" && (
                    <div className="platform-card full-card">
                        <h2 className="card-title">Zoho Application Availability Matrix</h2>
                        <p className="card-desc">Define exactly which Zoho integrations are accessible to each subscription tier.</p>
                        
                        <div className="matrix-wrapper">
                            <table className="matrix-table">
                                <thead>
                                    <tr>
                                        <th>Zoho Application</th>
                                        <th>Starter</th>
                                        <th>Pro</th>
                                        <th>Business</th>
                                        <th>Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appMatrix.map(row => (
                                        <tr key={row.app}>
                                            <td className="app-name"><strong>{row.app}</strong></td>
                                            <td><input type="checkbox" defaultChecked={row.starter} className="matrix-check" /></td>
                                            <td><input type="checkbox" defaultChecked={row.pro} className="matrix-check" /></td>
                                            <td><input type="checkbox" defaultChecked={row.business} className="matrix-check" /></td>
                                            <td><input type="checkbox" defaultChecked={row.enterprise} className="matrix-check" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === "Compliance" && (
                    <div className="config-sections">
                        {/* Global Feature Toggles */}
                        <div className="platform-card">
                            <h2 className="card-title">Feature Control Center</h2>
                            <div className="toggle-list">
                                <div className="toggle-row">
                                    <div className="t-info">
                                        <span className="t-label">Enable Voice Assistant</span>
                                        <span className="t-desc">Globally enable/disable voice-to-text input across all tenants.</span>
                                    </div>
                                    <button onClick={() => toggleFeature('voiceAssistant')} className={`switch ${globalToggles.voiceAssistant ? 'on' : ''}`}></button>
                                </div>
                                <div className="toggle-row">
                                    <div className="t-info">
                                        <span className="t-label">File Analysis (Vision)</span>
                                        <span className="t-desc">Allows users to upload PDFs/Images for AI context.</span>
                                    </div>
                                    <button onClick={() => toggleFeature('fileAnalysis')} className={`switch ${globalToggles.fileAnalysis ? 'on' : ''}`}></button>
                                </div>
                                <div className="toggle-row danger">
                                    <div className="t-info">
                                        <span className="t-label">Global Maintenance Mode</span>
                                        <span className="t-desc">Shut down frontend access for all tenants immediately.</span>
                                    </div>
                                    <button onClick={() => toggleFeature('maintenanceMode')} className={`switch ${globalToggles.maintenanceMode ? 'on' : ''}`}></button>
                                </div>
                            </div>
                        </div>

                        {/* Data Retention */}
                        <div className="platform-card mt-32">
                            <h2 className="card-title">Governance & Data Retention</h2>
                            <div className="input-group">
                                <label className="form-label">Auto-Expire Conversation History (Days)</label>
                                <input type="number" defaultValue={90} className="form-input" style={{ maxWidth: '120px' }} />
                                <p className="form-hint">Conversation records will be purged from the vector DB after this limit.</p>
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
                    --key-bg: #F8F9FA;
                    --key-code-bg: #FFFFFF;
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
                    --key-bg: #252529;
                    --key-code-bg: #121214;
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
                    border: none; 
                    border-radius: 8px; 
                    color: white; 
                    font-weight: 700; 
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
                .card-desc { font-size: 14px; color: var(--text-sub); margin-bottom: 32px; }

                /* Form Elements */
                .input-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
                .form-label { font-size: 14px; font-weight: 600; color: var(--text-main); opacity: 0.8; }
                .form-input { padding: 12px; border: 1px solid var(--border-main); border-radius: 8px; font-size: 14px; background: var(--input-bg); outline: none; color: var(--text-main); transition: all 0.3s; }
                .form-input:focus { border-color: var(--gold); }
                .form-hint { font-size: 12px; color: var(--text-sub); margin-top: 4px; }

                .range-slider { width: 100%; height: 6px; background: var(--bg-page); border-radius: 3px; cursor: pointer; appearance: none; border: 1px solid var(--border-main); }
                .range-slider::-webkit-slider-thumb { appearance: none; width: 16px; height: 16px; background: var(--gold); border-radius: 50%; cursor: pointer; border: 2px solid var(--bg-card); }
                .range-vals { display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: var(--text-sub); margin-top: 4px; }

                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

                /* Key Vault */
                .key-list { display: flex; flex-direction: column; gap: 16px; }
                .key-row { display: flex; justify-content: space-between; align-items: center; padding: 16px; background: var(--key-bg); border-radius: 10px; border: 1px solid var(--border-main); transition: all 0.3s; }
                .key-service { font-weight: 700; font-size: 14px; display: block; margin-bottom: 4px; color: var(--text-main); }
                .key-val { font-size: 12px; color: var(--gold); background: var(--key-code-bg); padding: 4px 8px; border-radius: 4px; font-family: monospace; border: 1px solid var(--border-main); }
                .key-meta { text-align: right; }
                .k-usage { font-size: 11px; color: var(--text-sub); display: block; margin-bottom: 4px; }
                .k-status { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #10B981; }

                /* Matrix Table */
                .matrix-table { width: 100%; border-collapse: collapse; }
                .matrix-table th { padding: 12px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); text-align: center; border-bottom: 2px solid var(--border-main); }
                .matrix-table th:first-child { text-align: left; }
                .matrix-table td { padding: 16px 12px; border-bottom: 1px solid var(--border-main); text-align: center; color: var(--text-main); }
                .matrix-table tr:hover { background: var(--item-bg-hover); }
                .matrix-table td.app-name { text-align: left; font-size: 14px; color: var(--text-main); }

                .matrix-check { width: 18px; height: 18px; cursor: pointer; accent-color: var(--gold); }

                /* Toggle Switches */
                .toggle-list { display: flex; flex-direction: column; gap: 24px; }
                .toggle-row { display: flex; justify-content: space-between; align-items: center; }
                .t-info { display: flex; flex-direction: column; }
                .t-label { font-size: 15px; font-weight: 700; display: block; margin-bottom: 4px; color: var(--text-main); }
                .t-desc { font-size: 13px; color: var(--text-sub); }

                .switch { width: 44px; height: 24px; background: var(--border-main); border-radius: 12px; position: relative; border: none; cursor: pointer; transition: all 0.3s; }
                .switch::after { content: ''; width: 18px; height: 18px; background: white; border-radius: 50%; position: absolute; left: 3px; top: 3px; transition: transform 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                .switch.on { background: #10B981; }
                .switch.on::after { transform: translateX(20px); }

                .danger .t-label { color: #EF4444; }

                .secondary-action-btn { 
                    padding: 10px 20px; 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-main); 
                    border-radius: 8px; 
                    font-weight: 600; 
                    cursor: pointer; 
                    color: var(--text-main);
                    transition: all 0.2s;
                }
                .secondary-action-btn:hover { border-color: var(--gold); background: var(--item-bg-hover); }

                /* Utility */
                .mt-16 { margin-top: 16px; }
                .mt-24 { margin-top: 24px; }
                .mt-32 { margin-top: 32px; }
            `}</style>
        </div>
    );
}
