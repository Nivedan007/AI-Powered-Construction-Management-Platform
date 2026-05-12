"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  IndianRupee,
  ShieldAlert,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
  Clock,
  Target
} from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ProgressChart } from "@/components/charts/ProgressChart";
import { AnimatedMetricCard, PulsingBadge, RotatingIcon, ScalingProgressBar } from "@/components/animations/ClientAnimationWrapper";

const actions = [
  { title: "Approve revised budget", project: "Metro Link Station Block", risk: "High", owner: "Finance" },
  { title: "Resolve material shortage", project: "Skyline Towers Phase A", risk: "Medium", owner: "Procurement" },
  { title: "Close overdue safety audit", project: "Green Residences", risk: "High", owner: "Safety Lead" }
];

const updates = [
  { label: "Concrete QA cleared for Tower A", time: "12m ago", type: "success" },
  { label: "Rain alert issued for Bengaluru site", time: "34m ago", type: "warning" },
  { label: "Vendor invoice mismatch detected", time: "1h ago", type: "error" },
  { label: "Crew utilization reached 93%", time: "2h ago", type: "success" }
];

const metrics = [
  { icon: TrendingUp, label: "Productivity", value: "94%", change: "+5.2%", color: "text-emerald-300" },
  { icon: Zap, label: "Efficiency", value: "87%", change: "+2.1%", color: "text-cyan-300" },
  { icon: Clock, label: "On-time Rate", value: "82%", change: "-1.3%", color: "text-amber-300" },
  { icon: Target, label: "Budget Control", value: "79%", change: "+3.7%", color: "text-blue-300" }
];

export default function DashboardPage() {
  return (
    <main className="pb-20">
      <TopBar />
      <section className="mx-auto mt-10 w-[92%] max-w-7xl space-y-8">
        <div className="panel overflow-hidden rounded-3xl px-6 py-6 md:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Executive Overview</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Program Health Is Stable, 3 Critical Actions Pending
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                AI prediction confidence improved by 9.4% this week. Cross-functional blockers are concentrated in
                procurement and weather-sensitive milestones.
              </p>
            </div>
            <div className="grid gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-3 text-sm md:min-w-72">
              <p className="font-semibold text-cyan-100">Forecast Update</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-200">On-time completion probability</span>
                <span className="font-semibold text-cyan-200">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-200">Risk trend</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
                  Improving <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AnimatedCard title="Active Projects" value="12" subtitle="+2 this week" />
          <AnimatedCard title="At-Risk Projects" value="3" subtitle="Needs immediate review" />
          <AnimatedCard title="Workforce On-site" value="187" subtitle="93% attendance" />
          <AnimatedCard title="Budget Utilization" value="64%" subtitle="Within target range" />
        </div>

        {/* Real-time Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <AnimatedMetricCard key={metric.label}>
                <div className="card-gradient group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                    <PulsingBadge>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full">{metric.change}</span>
                    </PulsingBadge>
                  </div>
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="text-3xl font-bold text-slate-100 mt-2">{metric.value}</p>
                  <div className="mt-3">
                    <ScalingProgressBar percentage={94} />
                  </div>
                </div>
              </AnimatedMetricCard>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-500/40 transition"><Building2 className="text-cyan-300" /> Multi-site tracking</div>
          <div className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-500/40 transition"><AlertTriangle className="text-amber-300" /> Delay signals monitored</div>
          <div className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-500/40 transition"><Users className="text-emerald-300" /> Role-based collaboration</div>
          <div className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-500/40 transition"><IndianRupee className="text-blue-300" /> Budget health insights</div>
        </div>

        <ProgressChart />

        <div className="grid gap-6 xl:grid-cols-3">
          <article className="panel rounded-2xl p-5 xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Action Center</h3>
              <PulsingBadge><span className="badge text-amber-300">Priority Queue</span></PulsingBadge>
            </div>
            <div className="space-y-3">
              {actions.map((action) => (
                <div key={action.title} className="rounded-xl border border-slate-700/60 bg-slate-950/30 p-4 hover:bg-slate-950/60 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{action.title}</p>
                    <span className={`badge ${action.risk === "High" ? "text-rose-300" : "text-amber-300"}`}>
                      {action.risk} Risk
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-300">{action.project}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">Owner: {action.owner}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel rounded-2xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Live Feed</h3>
              <RotatingIcon><Sparkles className="h-4 w-4 text-cyan-300" /></RotatingIcon>
            </div>
            <div className="space-y-3">
              {updates.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-700/60 bg-slate-950/35 px-3 py-2.5">
                  <div className="flex items-start gap-2">
                    {item.type === "success" && <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />}
                    {item.type === "warning" && <CalendarClock className="mt-0.5 h-4 w-4 text-amber-300" />}
                    {item.type === "error" && <ShieldAlert className="mt-0.5 h-4 w-4 text-rose-300" />}
                    <div>
                      <p className="text-sm text-slate-200">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
