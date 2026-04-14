"use client";
import React, { useState } from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function Subscriptions() {
    const [selectedTier, setSelectedTier] = useState("Professional");

    const tiers = [
        { name: "Starter", mrr: "$22,050", users: "450", color: "#94A3B8" },
        { name: "Professional", mrr: "$51,480", users: "520", color: "#B8842A", popular: true },
        { name: "Business", mrr: "$52,290", users: "210", color: "#1E293B" },
        { name: "Enterprise", mrr: "$35,940", users: "60", color: "#000000" }
    ];

    const planEdits = {
        Professional: {
            monthly: 99,
            yearly: 990,
            seats: 10,
            tokens: "500,000",
            connections: 5
        }
    };

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Tier & Revenue Management</h1>
                        <p className="page-subtitle">Govern subscription pricing, platform limits, and feature availability.</p>
                    </div>
                    <button className="primary-action-btn">Update Global Tiers</button>
                </div>

                {/* Tier Grid Oversight */}
                <div className="tier-grid">
                    {tiers.map(t => (
                        <div 
                            key={t.name} 
                            onClick={() => setSelectedTier(t.name)}
                            className={`tier-card ${selectedTier === t.name ? 'active' : ''} ${t.popular ? 'tier-highlight' : ''}`}
                        >
                            <div className="tier-head">
                                <span className="t-dot" style={{ backgroundColor: t.color }}></span>
                                <span className="t-name">{t.name}</span>
                                {t.popular && <span className="p-badge">Most Popular</span>}
                            </div>
                            <div className="t-metrics">
                                <div className="t-m-item">
                                    <span className="t-m-val">{t.mrr}</span>
                                    <span className="t-m-label">MRR Contribution</span>
                                </div>
                                <div className="t-m-item">
                                    <span className="t-m-val">{t.users}</span>
                                    <span className="t-m-label">Businesses</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="management-split">
                    
                    {/* Plan Editor */}
                    <div className="platform-card plan-editor">
                        <div className="card-header">
                            <h2 className="card-title">Edit Plan: {selectedTier}</h2>
                            <span className="last-edit">Last Changed: 2 weeks ago</span>
                        </div>

                        <div className="editor-grid">
                            <div className="input-row">
                                <div className="input-group">
                                    <label className="form-label">Monthly Price (USD)</label>
                                    <div className="input-prefix"><span>$</span><input type="number" defaultValue={planEdits.Professional.monthly} className="form-input" /></div>
                                </div>
                                <div className="input-group">
                                    <label className="form-label">Annual Price (USD)</label>
                                    <div className="input-prefix"><span>$</span><input type="number" defaultValue={planEdits.Professional.yearly} className="form-input" /></div>
                                </div>
                            </div>

                            <div className="input-divider"></div>

                            <div className="input-row">
                                <div className="input-group">
                                    <label className="form-label">Max Team Seats</label>
                                    <input type="number" defaultValue={planEdits.Professional.seats} className="form-input" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label">Monthly Token Cap</label>
                                    <input type="text" defaultValue={planEdits.Professional.tokens} className="form-input" />
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="form-label">Zoho App Connections</label>
                                <input type="number" defaultValue={planEdits.Professional.connections} className="form-input" />
                            </div>
                        </div>

                        <button className="save-plan-btn mt-24">Save {selectedTier} Tier Settings</button>
                    </div>

                    {/* Global Billing Logic */}
                    <div className="platform-card global-billing">
                        <h2 className="card-title">Global Billing Logic</h2>
                        <div className="logic-list">
                            <div className="logic-row">
                                <div className="l-info">
                                    <span className="l-label">Trial Duration (Days)</span>
                                    <span className="l-desc">Default period for new Business accounts.</span>
                                </div>
                                <input type="number" defaultValue={14} className="small-input" />
                            </div>
                            <div className="logic-row">
                                <div className="l-info">
                                    <span className="l-label">Master Currency</span>
                                    <span className="l-desc">Platform default for all transactions.</span>
                                </div>
                                <select className="small-select">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                </select>
                            </div>
                            <div className="logic-row">
                                <div className="l-info">
                                    <span className="l-label">Annual Discount (%)</span>
                                    <span className="l-desc">Display savings for yearly billing.</span>
                                </div>
                                <input type="number" defaultValue={20} className="small-input" />
                            </div>
                        </div>
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
                    --input-bg: #F8F9FA;
                    --platform-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --tier-hover: #FAFAFA;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --input-bg: #252529;
                    --platform-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --tier-hover: #252529;
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

                /* Tier Grid */
                .tier-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
                .tier-card { 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-main); 
                    border-radius: 16px; 
                    padding: 24px; 
                    cursor: pointer; 
                    transition: all 0.3s; 
                    position: relative;
                    box-shadow: var(--platform-shadow);
                }
                .tier-card:hover { transform: translateY(-4px); border-color: var(--gold); background: var(--tier-hover); }
                .tier-card.active { border-color: var(--gold); border-width: 2px; padding: 23px; box-shadow: 0 10px 25px rgba(184, 132, 42, 0.15); }
                
                .tier-head { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
                .t-dot { width: 8px; height: 8px; border-radius: 50%; }
                .t-name { font-weight: 700; color: var(--text-main); font-size: 15px; }
                .p-badge { font-size: 9px; font-weight: 700; background: var(--gold); color: white; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; margin-left: auto; }

                .t-metrics { display: flex; flex-direction: column; gap: 16px; }
                .t-m-item { display: flex; flex-direction: column; }
                .t-m-val { font-size: 22px; font-weight: 700; color: var(--text-main); font-family: var(--font-cormorant); }
                .t-m-label { font-size: 11px; color: var(--text-sub); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

                /* Split view */
                .management-split { display: grid; grid-template-columns: 2fr 1.2fr; gap: 24px; }

                .platform-card { background: var(--bg-card); border: 1px solid var(--border-main); border-radius: 16px; padding: 32px; box-shadow: var(--platform-shadow); transition: all 0.3s; }
                .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
                .card-title { font-size: 11px; text-transform: uppercase; color: var(--text-sub); font-weight: 700; letter-spacing: 1px; margin: 0; }
                .last-edit { font-size: 11px; color: var(--text-sub); font-weight: 500; }

                /* Editor */
                .editor-grid { display: flex; flex-direction: column; gap: 24px; }
                .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                .input-divider { height: 1px; background: var(--border-main); width: 100%; opacity: 0.5; }

                .input-group { display: flex; flex-direction: column; gap: 8px; }
                .form-label { font-size: 13px; font-weight: 700; color: var(--text-main); opacity: 0.8; }
                .form-input { padding: 12px; border: 1px solid var(--border-main); border-radius: 8px; background: var(--input-bg); outline: none; font-size: 14px; font-weight: 600; color: var(--text-main); transition: all 0.2s; }
                .form-input:focus { border-color: var(--gold); }

                .input-prefix { display: flex; align-items: center; background: var(--input-bg); border: 1px solid var(--border-main); border-radius: 8px; transition: all 0.2s; }
                .input-prefix:focus-within { border-color: var(--gold); }
                .input-prefix span { padding: 0 12px; color: var(--text-sub); font-weight: 700; border-right: 1px solid var(--border-main); }
                .input-prefix .form-input { border: none; width: 100%; background: transparent; }

                .save-plan-btn { padding: 14px; background: var(--gold); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 12px rgba(184, 132, 42, 0.1); }
                .save-plan-btn:hover { filter: brightness(1.1); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(184, 132, 42, 0.3); }

                /* Global Logic */
                .logic-list { display: flex; flex-direction: column; gap: 24px; }
                .logic-row { display: flex; justify-content: space-between; align-items: center; }
                .l-label { font-size: 14px; font-weight: 700; color: var(--text-main); display: block; margin-bottom: 4px; }
                .l-desc { font-size: 12px; color: var(--text-sub); }

                .small-input { width: 60px; padding: 8px; border: 1px solid var(--border-main); border-radius: 6px; text-align: center; font-weight: 700; outline: none; background: var(--input-bg); color: var(--text-main); }
                .small-select { padding: 8px; border: 1px solid var(--border-main); border-radius: 6px; font-weight: 600; outline: none; background: var(--input-bg); color: var(--text-main); }

                .mt-24 { margin-top: 24px; }
            `}</style>
        </div>
    );
}
