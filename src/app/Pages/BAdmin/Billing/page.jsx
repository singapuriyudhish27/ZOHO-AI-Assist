"use client";
import React from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Billing() {
    
    const plans = [
        {
            name: "Starter",
            price: "$49",
            seats: "1 Admin + 3 Team Members",
            features: ["Connect up to 5 Zoho Apps", "Basic AI Chat (Limited)", "Basic Dashboard"],
            current: false,
            cta: "Downgrade"
        },
        {
            name: "Professional",
            price: "$99",
            seats: "1 Admin + 10 Team Members",
            features: ["All Zoho Apps", "Full AI Chat Assistant", "BI Dashboard", "Automations & Alerts"],
            current: true,
            cta: "Current Plan"
        },
        {
            name: "Business",
            price: "$249",
            seats: "1 Admin + 25 Team Members",
            features: ["Everything in Pro", "Custom Report Builder", "Scheduled Reports", "Priority Support"],
            current: false,
            cta: "Upgrade"
        },
        {
            name: "Enterprise",
            price: "Custom",
            seats: "Unlimited Team Members",
            features: ["Everything in Business", "Dedicated Onboarding", "Custom AI Instructions", "Full API Access"],
            current: false,
            cta: "Contact Sales"
        }
    ];

    const invoices = [
        { id: "INV-2026-001", date: "Oct 01, 2026", amount: "$99.00", status: "Paid" },
        { id: "INV-2026-002", date: "Sep 01, 2026", amount: "$99.00", status: "Paid" },
        { id: "INV-2026-003", date: "Aug 01, 2026", amount: "$99.00", status: "Paid" }
    ];

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Billing & Subscription</h1>
                        <p className="page-subtitle">Manage your plan, seat usage, and payment history.</p>
                    </div>
                </div>

                {/* Top Section: Overview & Usage */}
                <div className="billing-grid-top">
                    {/* Current Plan Card */}
                    <div className="billing-card current-plan-summary">
                        <div className="card-label">Current Plan</div>
                        <div className="plan-identity">
                            <h2 className="active-plan-name">Professional Plan</h2>
                            <span className="status-badge">Active</span>
                        </div>
                        <p className="renewal-text">Next renewal on <strong>Nov 01, 2026</strong> for <strong>$99.00/mo</strong>.</p>
                        <div className="card-actions">
                            <button className="text-link-btn">Change billing cycle</button>
                            <button className="text-link-btn text-danger">Cancel Subscription</button>
                        </div>
                    </div>

                    {/* Usage Progress Card */}
                    <div className="billing-card usage-stats">
                        <h3 className="card-title">Workspace Limits</h3>
                        
                        <div className="usage-item">
                            <div className="usage-label">
                                <span>Team Seats</span>
                                <span className="usage-val">3 / 10 used</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '30%' }}></div>
                            </div>
                        </div>

                        <div className="usage-item">
                            <div className="usage-label">
                                <span>Connected Zoho Apps</span>
                                <span className="usage-val">7 / Unlimited</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        <div className="usage-item">
                            <div className="usage-label">
                                <span>AI Monthly Tokens</span>
                                <span className="usage-val">45,000 / 100,000</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plan Comparison Grid */}
                <div className="plans-section">
                    <h2 className="section-title">Available Subscription Plans</h2>
                    <div className="plans-grid">
                        {plans.map(plan => (
                            <div key={plan.name} className={`plan-card ${plan.current ? 'active' : ''}`}>
                                {plan.current && <div className="current-ribbon">Recommended</div>}
                                <div className="plan-header">
                                    <h3 className="plan-type">{plan.name}</h3>
                                    <div className="plan-price">
                                        <span className="amt">{plan.price}</span>
                                        {plan.name !== 'Enterprise' && <span className="period">/mo</span>}
                                    </div>
                                    <p className="plan-seats">{plan.seats}</p>
                                </div>
                                <ul className="plan-features">
                                    {plan.features.map(f => (
                                        <li key={f}>
                                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`plan-cta ${plan.current ? 'current' : ''}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Payment & History */}
                <div className="billing-grid-bottom">
                    {/* Payment Method */}
                    <div className="billing-card payment-method">
                        <h3 className="card-title">Default Payment Method</h3>
                        <div className="payment-display">
                            <div className="card-icon">
                                <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                            </div>
                            <div className="card-details">
                                <p className="card-num">Visa ending in <strong>4242</strong></p>
                                <p className="card-expiry">Expires 12 / 2028</p>
                            </div>
                        </div>
                        <button className="secondary-action-btn mt-16">Update Payment Method</button>
                    </div>

                    {/* Billing History */}
                    <div className="billing-card history-card">
                        <h3 className="card-title">Billing History</h3>
                        <div className="table-wrapper">
                            <table className="history-table">
                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map(inv => (
                                        <tr key={inv.id}>
                                            <td>{inv.id}</td>
                                            <td>{inv.date}</td>
                                            <td>{inv.amount}</td>
                                            <td><span className="paid-badge">{inv.status}</span></td>
                                            <td className="text-right">
                                                <button className="icon-btn" title="Download PDF">
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                    --billing-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --billing-shadow: 0 10px 40px rgba(0,0,0,0.3);
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

                /* Top Grid */
                .billing-grid-top {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .billing-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 16px;
                    padding: 32px;
                    box-shadow: var(--billing-shadow);
                    transition: all 0.3s;
                }

                .card-label {
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 8px;
                }

                .plan-identity {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 12px;
                }

                .active-plan-name {
                    font-size: 24px;
                    font-weight: 600;
                    margin: 0;
                    color: var(--text-main);
                }

                .status-badge {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10B981;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 10px;
                    border-radius: 12px;
                    text-transform: uppercase;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .renewal-text {
                    font-size: 15px;
                    color: var(--text-main);
                    opacity: 0.8;
                    margin-bottom: 24px;
                }

                .card-actions {
                    display: flex;
                    gap: 16px;
                }

                .text-link-btn {
                    background: transparent;
                    border: none;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--gold);
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.2s;
                }

                .text-link-btn:hover { text-decoration: underline; }
                .text-link-btn.text-danger { color: #EF4444; }

                /* Usage meters */
                .usage-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .card-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0 0 8px 0;
                    color: var(--text-main);
                }

                .usage-item {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .usage-label {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                }

                .usage-val { font-weight: 600; color: var(--text-main); }

                .progress-bar {
                    height: 8px;
                    background: var(--bg-page);
                    border-radius: 4px;
                    overflow: hidden;
                    border: 1px solid var(--border-main);
                }

                .progress-fill {
                    height: 100%;
                    background: var(--gold);
                    border-radius: 4px;
                    box-shadow: 0 0 10px rgba(184, 132, 42, 0.2);
                }

                /* Plan Comparison Section */
                .plans-section {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .section-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .plans-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                .plan-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 16px;
                    padding: 32px 24px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    transition: all 0.3s;
                    box-shadow: var(--billing-shadow);
                }

                .plan-card.active {
                    border-color: var(--gold);
                    box-shadow: 0 12px 40px rgba(184, 132, 42, 0.1);
                    transform: translateY(-4px);
                }

                .current-ribbon {
                    position: absolute;
                    top: 0;
                    right: 24px;
                    background: var(--gold);
                    color: white;
                    font-size: 10px;
                    font-weight: 700;
                    padding: 4px 10px;
                    border-radius: 0 0 6px 6px;
                    text-transform: uppercase;
                }

                .plan-header { margin-bottom: 24px; }

                .plan-type { font-size: 18px; font-weight: 700; margin: 0 0 12px 0; color: var(--text-main); }

                .plan-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: 8px; color: var(--text-main); }
                .plan-price .amt { font-size: 32px; font-weight: 700; font-family: var(--font-cormorant); }
                .plan-price .period { font-size: 14px; color: var(--text-sub); }

                .plan-seats { font-size: 13px; color: var(--text-sub); margin: 0; }

                .plan-features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 32px 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .plan-features li {
                    display: flex;
                    gap: 10px;
                    font-size: 13px;
                    color: var(--text-main);
                    opacity: 0.8;
                    line-height: 1.4;
                }

                .plan-features svg { color: var(--gold); flex-shrink: 0; margin-top: 2px; }

                .plan-cta {
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-family: inherit;
                }

                .plan-cta.current {
                    background: transparent;
                    border: 2px solid var(--gold);
                    color: var(--gold);
                }

                .plan-cta:not(.current) {
                    background: var(--text-main);
                    color: var(--bg-card);
                    border: none;
                }

                .plan-cta:hover:not(.current) {
                    background: var(--gold);
                    color: white;
                    transform: translateY(-1px);
                }

                /* Bottom grid */
                .billing-grid-bottom {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 24px;
                }

                .payment-display {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    background: var(--bg-page);
                    padding: 24px;
                    border-radius: 12px;
                    margin-top: 16px;
                    border: 1px solid var(--border-main);
                }

                .card-icon { color: var(--gold); }
                .card-num { font-size: 15px; margin: 0 0 2px 0; color: var(--text-main); }
                .card-expiry { font-size: 12px; color: var(--text-sub); margin: 0; }

                .mt-16 { margin-top: 16px; }

                .secondary-action-btn {
                    width: 100%;
                    padding: 10px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-action-btn:hover { background: var(--bg-page); border-color: var(--gold); }

                /* History Table */
                .table-wrapper { margin-top: 16px; }
                .history-table { width: 100%; border-collapse: collapse; text-align: left; }
                .history-table th { padding: 12px 16px; font-size: 12px; color: var(--text-sub); text-transform: uppercase; border-bottom: 1px solid var(--border-main); }
                .history-table td { padding: 16px; font-size: 14px; color: var(--text-main); border-bottom: 1px solid var(--border-main); }
                .paid-badge { background: rgba(16, 185, 129, 0.1); color: #10B981; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.2); }
                .text-right { text-align: right; }
                .icon-btn { background: transparent; border: none; cursor: pointer; color: var(--text-sub); padding: 4px; transition: all 0.2s; }
                .icon-btn:hover { color: var(--gold); transform: scale(1.1); }
            `}</style>
        </div>
    );
}
