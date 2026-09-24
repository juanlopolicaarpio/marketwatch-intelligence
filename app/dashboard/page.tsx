"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, BarChart3, RefreshCw, Sparkles, TrendingDown, TrendingUp } from "lucide-react";

import type { MarketOverview } from "@/lib/market-data";

type DashboardData = MarketOverview & {
  selected: { category: string; platform: string };
  disclosure: string;
};

const money = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  notation: "compact",
  maximumFractionDigits: 1,
});

function Metric({ label, value, change }: { label: string; value: string; change?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-white/45">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
      {change && <p className="mt-2 text-xs text-emerald-300">{change}</p>}
    </div>
  );
}

export default function MarketDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [category, setCategory] = useState("Personal Care");
  const [platform, setPlatform] = useState("All platforms");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ category, platform });
      const response = await fetch(`/api/market/overview?${params}`);
      if (!response.ok) throw new Error("Unable to load the market view");
      setData(await response.json());
    } finally {
      setLoading(false);
    }
  }, [category, platform]);

  useEffect(() => {
    void load();
  }, [load]);

  const maxTrend = useMemo(
    () => Math.max(...(data?.trend.map((point) => point.sales) ?? [1])),
    [data],
  );

  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <header className="border-b border-white/10 bg-[#07111F]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <Link href="/" className="rounded-full border border-white/10 p-2 text-white/60 transition hover:text-white" aria-label="Back to product page">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-lg font-semibold">MarketWatch</p>
              <p className="text-xs text-white/45">Category intelligence · {data?.asOf ?? "Synthetic release"}</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-200">Synthetic market data</span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#53E0C1]">Market overview</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">See category movement before the next review.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">Compare market size, brand position, platform mix, and product momentum from one normalized view.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-white/10 bg-[#0C1929] px-4 py-2.5 text-sm text-white outline-none">
              {(data?.filters.categories ?? [category]).map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={platform} onChange={(event) => setPlatform(event.target.value)} className="rounded-xl border border-white/10 bg-[#0C1929] px-4 py-2.5 text-sm text-white outline-none">
              {(data?.filters.platforms ?? [platform]).map((item) => <option key={item}>{item}</option>)}
            </select>
            <button onClick={() => void load()} className="rounded-xl border border-white/10 p-2.5 text-white/60 transition hover:text-white" aria-label="Refresh market data">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </section>

        {!data ? (
          <div className="mt-12 rounded-2xl border border-white/10 p-10 text-center text-white/50">Loading market view…</div>
        ) : (
          <>
            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Metric label="Tracked category sales" value={money.format(data.summary.trackedSales)} change={`↑ ${data.summary.monthlyGrowth}% month over month`} />
              <Metric label="Tracked units" value={data.summary.trackedUnits.toLocaleString()} />
              <Metric label="Active brands" value={String(data.summary.activeBrands)} />
              <Metric label="Leading brand share" value={`${data.brandShare[0].share}%`} change={data.brandShare[0].brand} />
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center justify-between">
                  <div><p className="font-medium">Category sales trend</p><p className="mt-1 text-xs text-white/45">Tracked monthly sales · PHP millions</p></div>
                  <BarChart3 className="h-5 w-5 text-[#3AA7FF]" />
                </div>
                <div className="mt-8 flex h-56 items-end gap-3">
                  {data.trend.map((point) => (
                    <div key={point.month} className="flex flex-1 flex-col items-center gap-2">
                      <span className="text-[11px] text-white/45">{point.sales.toFixed(1)}</span>
                      <div className="w-full rounded-t-lg bg-gradient-to-t from-[#3AA7FF] to-[#53E0C1]" style={{ height: `${(point.sales / maxTrend) * 170}px` }} />
                      <span className="text-xs text-white/45">{point.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-medium">Platform mix</p>
                <p className="mt-1 text-xs text-white/45">Share of tracked sales</p>
                <div className="mt-7 space-y-6">
                  {data.platformMix.map((item) => (
                    <div key={item.platform}>
                      <div className="mb-2 flex justify-between text-sm"><span className="text-white/70">{item.platform}</span><span>{item.share}%</span></div>
                      <div className="h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full" style={{ width: `${item.share}%`, backgroundColor: item.color }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.055] p-6">
                <div className="flex items-center gap-2 text-emerald-200"><Sparkles className="h-4 w-4" /><span className="text-xs uppercase tracking-[0.16em]">Decision brief</span></div>
                <h2 className="mt-4 text-xl font-medium leading-7">{data.insight.headline}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{data.insight.body}</p>
                <div className="mt-5 space-y-3">
                  {data.insight.actions.map((action) => <div key={action} className="flex gap-3 text-sm text-white/70"><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />{action}</div>)}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="border-b border-white/10 px-6 py-5"><p className="font-medium">Top products</p><p className="mt-1 text-xs text-white/45">Ranked by tracked sales for the selected view</p></div>
                <div className="divide-y divide-white/[0.07]">
                  {data.topProducts.map((product) => (
                    <div key={product.product} className="grid grid-cols-[28px_1fr_auto] items-center gap-3 px-6 py-4 text-sm">
                      <span className="text-white/35">{product.rank}</span>
                      <div><p className="font-medium text-white/85">{product.product}</p><p className="mt-1 text-xs text-white/40">{product.brand} · {product.platform}</p></div>
                      <div className="text-right"><p>{money.format(product.sales)}</p><p className={`mt-1 flex items-center justify-end gap-1 text-xs ${product.growth >= 0 ? "text-emerald-300" : "text-rose-300"}`}>{product.growth >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}{product.growth}%</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
