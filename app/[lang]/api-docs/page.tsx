'use client';

import React from 'react';
import { 
  Terminal, 
  Shield, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight, 
  Code2, 
  Database,
  Workflow,
  Globe,
  Settings
} from 'lucide-react';

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-white text-slate-500 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 card-light rounded-full mb-6 border-brand-GOLD/20">
            <Settings className="w-3 h-3 text-brand-GOLD" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">System Protocol v1.0</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-heading font-black text-brand-950 mb-6 uppercase tracking-tighter italic leading-none">
            OpenClaw <span className="text-brand-GOLD">Interaction</span> Protocol
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mt-6">
            Technical specifications for AI Agents and automated tools to interface with the OpenClaw Dashboard and Automation Service.
          </p>
        </div>

        {/* Quick Links / Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 reveal-on-scroll stagger-1">
          <div className="card-light p-8 rounded-3xl border-brand-100 hover:border-brand-GOLD/30 transition-all group">
            <Cpu className="text-brand-GOLD mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-black uppercase tracking-tighter italic mb-2">Automated Flows</h3>
            <p className="text-sm">Scheduled SEO and Media workflows for all projects.</p>
          </div>
          <div className="card-light p-8 rounded-3xl border-brand-100 hover:border-brand-GOLD/30 transition-all group">
            <Workflow className="text-brand-GOLD mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-black uppercase tracking-tighter italic mb-2">Task Lifecycle</h3>
            <p className="text-sm">Discovery, execution, and status reporting logic.</p>
          </div>
          <div className="card-light p-8 rounded-3xl border-brand-100 hover:border-brand-GOLD/30 transition-all group">
            <Globe className="text-brand-GOLD mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-white font-black uppercase tracking-tighter italic mb-2">Public API</h3>
            <p className="text-sm">Endpoints for fetching projects and updating tasks.</p>
          </div>
        </div>

        {/* Architecture Section */}
        <section className="mb-20 reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
                <Layers className="text-brand-GOLD" />
                <h2 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">System Architecture</h2>
            </div>
            <div className="card-light p-8 rounded-[2.5rem] border-brand-100 bg-white/5 backdrop-blur-sm">
                <p className="mb-6 leading-relaxed">
                    The ecosystem consists of three primary components working in tandem to deliver autonomous project management:
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px]">1. Project Service</div>
                        <p className="text-sm">The central source of truth for projects, skills, and tasks. Hosts the Dashboard UI.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px]">2. Automation Service</div>
                        <p className="text-sm">Handles scheduled workflows (SEO, Media) and maintains the internal task queue.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-brand-GOLD font-bold uppercase tracking-widest text-[10px]">3. AI Agents</div>
                        <p className="text-sm">Autonomous actors (like Antigravity) that process tasks via code modification or external APIs.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Authentication */}
        <section className="mb-20 reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
                <Shield className="text-brand-GOLD" />
                <h2 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">Authentication</h2>
            </div>
            <div className="card-light p-8 rounded-[2.5rem] border-brand-100">
                <p className="mb-6 leading-relaxed">Integrations must include the following header for all API requests:</p>
                <div className="bg-brand-50/80 p-6 rounded-2xl border border-brand-100 font-mono text-sm group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <Code2 className="text-brand-GOLD" size={20} />
                    </div>
                    <span className="text-brand-GOLD">X-API-KEY:</span> dev-key-123
                </div>
                <p className="mt-4 text-[10px] text-slate-500 italic uppercase tracking-widest">* Note: Replace with environment-specific keys in production environments.</p>
            </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-20 reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
                <Database className="text-brand-GOLD" />
                <h2 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">API Reference</h2>
            </div>
            
            <div className="space-y-12">
                <div className="p-8 card-light border-brand-100 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">GET</span>
                        <code className="text-brand-950 font-black text-xl tracking-tighter">/api/projects</code>
                    </div>
                    <p className="text-sm mb-4 leading-relaxed">Fetch all active projects and their associated metadata including skills and current status.</p>
                </div>

                <div className="p-8 card-light border-brand-100 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">GET</span>
                        <code className="text-brand-950 font-black text-xl tracking-tighter">/api/projects/:id/tasks</code>
                    </div>
                    <p className="text-sm mb-6 leading-relaxed">Retrieve pending tasks for a specific project based on its unique identifier.</p>
                    <div className="bg-brand-50/80 p-6 rounded-2xl border border-brand-100 font-mono text-xs overflow-x-auto">
                        <pre className="text-brand-GOLD">
{`[
  {
    "id": "task-001",
    "title": "Optimize Meta Tags",
    "status": "pending",
    "skillId": "seo"
  }
]`}
                        </pre>
                    </div>
                </div>

                <div className="p-8 card-light border-brand-100 rounded-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">PUT</span>
                        <code className="text-brand-950 font-black text-xl tracking-tighter">/api/tasks/:id</code>
                    </div>
                    <p className="text-sm mb-6 leading-relaxed">Update a task status to <span className="text-green-400 font-bold uppercase">completed</span> or <span className="text-red-400 font-bold uppercase">failed</span>.</p>
                    <div className="bg-brand-50/80 p-6 rounded-2xl border border-brand-100 font-mono text-xs overflow-x-auto">
                        <pre className="text-brand-GOLD">
{`{
  "status": "completed",
  "result": "Applied metadata to contact/page.tsx",
  "timestamp": "2026-03-22T23:01:14Z"
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>

        {/* Task Workflow */}
        <section className="mb-20 reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
                <Terminal className="text-brand-GOLD" />
                <h2 className="text-2xl font-black text-brand-950 uppercase italic tracking-tighter">Agent Execution Flow</h2>
            </div>
            <div className="grid gap-6">
                {[
                    { step: "01", title: "Polling", desc: "Agents discover pending tasks via the Project Service API." },
                    { step: "02", title: "Context Retrieval", desc: "Agents fetch project files and current codebase state." },
                    { step: "03", title: "Action", desc: "Agents perform the required modifications (e.g., SEO updates)." },
                    { step: "04", title: "Reporting", desc: "Agents submit result logs and update task status to finished." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-8 items-center p-8 card-light rounded-3xl border-brand-100 hover:bg-white/5 transition-all text-left">
                        <span className="text-brand-GOLD font-heading font-black text-5xl italic opacity-30">{item.step}</span>
                        <div>
                            <h4 className="text-white font-black uppercase tracking-tighter italic text-xl mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Footer / CTA */}
        <div className="text-center py-20 border-t border-brand-100 reveal-on-scroll">
            <Zap className="text-brand-GOLD mx-auto mb-8 animate-pulse" size={60} />
            <h2 className="text-4xl md:text-7xl font-heading font-black text-brand-950 mb-10 tracking-tighter uppercase italic leading-none">
                Autonomous <br /> <span className="text-brand-GOLD">INTELLIGENCE</span>
            </h2>
            <div className="flex justify-center gap-8">
                 <button className="btn-3d btn-3d-gold px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl">
                    SYSTEM DASHBOARD
                 </button>
            </div>
            <p className="mt-12 text-[9px] uppercase tracking-[0.4em] font-black text-slate-600">Generated by OpenClaw Agent Intelligence 2026</p>
        </div>
      </div>
    </div>
  );
}
