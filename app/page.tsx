'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  LayoutGrid,
  ShoppingBag,
  Target,
  TrendingDown,
  TrendingUp,
  BarChart3,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const sectionClass = 'mx-auto w-full max-w-7xl px-6 md:px-8';

const nav = [
  { label: 'Product', href: '#product' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Sample Report', href: '#sample-report' },
  { label: 'Contact', href: '#contact' },
];

const pains = [
  {
    title: 'Internal reporting does not reveal true market position',
    body: 'Most brands can see their own sales. Far fewer can see how large the category is, who is leading, and where they truly stand in-market.',
    icon: Eye,
  },
  {
    title: 'Marketplace competition is fragmented across platforms',
    body: 'Performance can vary meaningfully across Shopee, Lazada, and TikTok Shop. Without a unified view, shifts in platform mix are hard to spot early.',
    icon: LayoutGrid,
  },
  {
    title: 'Share shifts and leadership changes happen before teams notice',
    body: 'Category concentration, brand momentum, and product winners can change quickly — often before internal dashboards make the market story visible.',
    icon: Target,
  },
  {
    title: 'Product winners are difficult to track without external intelligence',
    body: 'Knowing which products lead by revenue or units sold is critical for assortment, pricing, media, and competitor response.',
    icon: ShoppingBag,
  },
];

const featureCards = [
  {
    title: 'Category Size',
    body: 'See tracked market size and units sold to understand the scale of the category you are competing in.',
  },
  {
    title: 'Market Share',
    body: 'Benchmark brand position through estimated sales, units sold, market share, and growth.',
  },
  {
    title: 'Market Leaders',
    body: 'Identify the current leader, category concentration, and how leadership is shifting over time.',
  },
  {
    title: 'Top Products',
    body: 'See which products are leading by revenue or by units sold across the market.',
  },
];

const roles = [
  {
    role: 'E-commerce Heads',
    body: 'Track category position, leaders, platform mix, and market movement to guide channel, assortment, and growth decisions.',
  },
  {
    role: 'Marketing Directors',
    body: 'See where momentum is shifting across platforms and brands to support sharper marketplace strategy and investment priorities.',
  },
  {
    role: 'Brand Managers',
    body: 'Monitor brand share, competitor momentum, and top-performing products within the categories that matter most.',
  },
  {
    role: 'Agencies & Strategy Teams',
    body: 'Use structured external market intelligence to support planning, benchmarking, category reviews, and executive recommendations.',
  },
];



function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
        <div className="absolute bottom-[9px] left-[8px] h-[10px] w-[4px] rounded-full bg-[#53E0C1]" />
        <div className="absolute bottom-[9px] left-[15px] h-[14px] w-[4px] rounded-full bg-[#3AA7FF]" />
        <div className="absolute bottom-[9px] left-[22px] h-[18px] w-[4px] rounded-full bg-white/80" />
      </div>
      <div className="text-[17px] font-semibold tracking-[-0.02em] text-white">MarketWatch</div>
    </div>
  );
}

function Button({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href="/dashboard"
      className={[
        'group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300',
        secondary
          ? 'border border-white/12 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]'
          : 'bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.16)]',
      ].join(' ')}
    >
      {children}
      <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${secondary ? 'text-white/70 group-hover:translate-x-0.5' : 'text-slate-900 group-hover:translate-x-0.5'}`} />
    </a>
  );
}

function FilterPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/35">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function MetricCard({ title, value, change, positive = false }: { title: string; value: string; change: string; positive?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
      <div className="text-xs text-white/45">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">{value}</div>
      <div className={`mt-2 inline-flex items-center gap-1 text-xs ${positive ? 'text-emerald-300' : 'text-white/55'}`}>
        {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
        {change}
      </div>
    </div>
  );
}

function Panel({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-white">{title}</div>
          <div className="mt-1 text-xs text-white/45">{subtitle}</div>
        </div>
        <div className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/50">Dashboard view</div>
      </div>
      {children}
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(58,167,255,0.18),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(83,224,193,0.10),transparent_24%)]" />
      <div className="rounded-[30px] border border-white/10 bg-[#0B1423]/95 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 md:p-6">
          <div className="mb-5 grid gap-3 md:grid-cols-4">
            <FilterPill label="Platform" value="All Platforms" />
            <FilterPill label="Category" value="Consumer Electronics" />
            <FilterPill label="Subcategory" value="TWS Earbuds" />
            <FilterPill label="Period" value="February 2026" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard title="Tracked Market Size" value="₱182.4M" change="+8.4% vs prior period" positive />
            <MetricCard title="Market Leader" value="Brand A" change="31.8% share" positive />
            <MetricCard title="Top 3 Concentration" value="68.2%" change="High concentration" positive />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Panel title="Tracked Market Share by Brand" subtitle="A cleaner view of brand position within the category">
              <MarketShareTable compact />
            </Panel>
            <Panel title="Top Products" subtitle="A focused snapshot of category winners">
              <TopProductsPanel compact />
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketShareTable({ compact = false }: { compact?: boolean }) {
  const rows = compact
    ? [
        ['1', 'Brand A', '₱58.1M', '31.8%', '+4.2%'],
        ['2', 'Brand B', '₱36.9M', '20.2%', '-1.4%'],
        ['3', 'Brand C', '₱29.5M', '16.2%', '+2.1%'],
      ]
    : [
        ['1', 'Brand A', '₱58.1M', '121K', '31.8%', '+4.2%'],
        ['2', 'Brand B', '₱36.9M', '83K', '20.2%', '-1.4%'],
        ['3', 'Brand C', '₱29.5M', '71K', '16.2%', '+2.1%'],
        ['4', 'Brand D', '₱18.0M', '44K', '9.9%', '+0.6%'],
      ];

  return compact ? (
    <div className="overflow-hidden rounded-2xl border border-white/6 bg-[#0A1320]">
      <div className="grid grid-cols-[0.5fr_1.4fr_1fr_0.8fr_0.8fr] border-b border-white/6 px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-white/35">
        <div>Rank</div><div>Brand</div><div>Sales</div><div>Share</div><div>Growth</div>
      </div>
      {rows.map((row) => (
        <div key={row[1]} className="grid grid-cols-[0.5fr_1.4fr_1fr_0.8fr_0.8fr] items-center border-b border-white/[0.05] px-4 py-4 text-sm last:border-b-0">
          <div className="text-white/55">{row[0]}</div>
          <div className="font-medium text-white">{row[1]}</div>
          <div className="text-white/75">{row[2]}</div>
          <div className="text-white">{row[3]}</div>
          <div className={String(row[4]).startsWith('+') ? 'text-emerald-300' : 'text-rose-300'}>{row[4]}</div>
        </div>
      ))}
    </div>
  ) : (
    <div className="overflow-hidden rounded-2xl border border-white/6 bg-[#0A1320]">
      <div className="grid grid-cols-[0.5fr_1.3fr_1fr_1fr_0.9fr_0.8fr] border-b border-white/6 px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-white/35">
        <div>Rank</div><div>Brand</div><div>Sales</div><div>Units</div><div>Share</div><div>Growth</div>
      </div>
      {rows.map((row) => (
        <div key={row[1]} className="grid grid-cols-[0.5fr_1.3fr_1fr_1fr_0.9fr_0.8fr] items-center border-b border-white/[0.05] px-4 py-4 text-sm last:border-b-0">
          <div className="text-white/55">{row[0]}</div>
          <div className="font-medium text-white">{row[1]}</div>
          <div className="text-white/75">{row[2]}</div>
          <div className="text-white/75">{row[3]}</div>
          <div className="text-white">{row[4]}</div>
          <div className={String(row[5]).startsWith('+') ? 'text-emerald-300' : 'text-rose-300'}>{row[5]}</div>
        </div>
      ))}
    </div>
  );
}

function PlatformDistribution() {
  const items = [
    { label: 'Shopee', value: 46, color: '#3AA7FF' },
    { label: 'Lazada', value: 31, color: '#53E0C1' },
    { label: 'TikTok Shop', value: 23, color: 'rgba(255,255,255,0.7)' },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div className="mx-auto h-36 w-36 rounded-full bg-[conic-gradient(#3AA7FF_0_46%,#53E0C1_46%_77%,rgba(255,255,255,0.7)_77%_100%)] p-5">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0A1320] text-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Platform Mix</div>
            <div className="mt-1 text-lg font-semibold text-white">100%</div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5 text-sm">
            <div className="flex items-center gap-2 text-white/75">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
              {item.label}
            </div>
            <div className="font-medium text-white">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopProductsPanel({ compact = false }: { compact?: boolean }) {
  const rows = compact
    ? [
        ['Brand A Pro Buds', '₱12.8M'],
        ['Brand B Air Lite', '₱9.6M'],
        ['Brand C Sonic Go', '₱8.9M'],
      ]
    : [
        ['Brand A Pro Buds', '₱12.8M', '18.4K'],
        ['Brand B Air Lite', '₱9.6M', '21.2K'],
        ['Brand C Sonic Go', '₱8.9M', '15.7K'],
        ['Brand D Fit Pods', '₱7.4M', '13.8K'],
      ];

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-full border border-white/8 bg-[#0A1320] p-1 text-xs">
        <div className="rounded-full bg-white px-3 py-1.5 font-medium text-slate-900">By Revenue</div>
        <div className="px-3 py-1.5 text-white/55">By Units Sold</div>
      </div>
      <div className="space-y-2">
        {compact
          ? rows.map((row, i) => (
              <div key={row[0]} className="grid grid-cols-[0.45fr_1.7fr_0.9fr] items-center rounded-xl border border-white/6 bg-[#0A1320] px-4 py-4 text-sm">
                <div className="text-white/45">{i + 1}</div>
                <div className="font-medium text-white">{row[0]}</div>
                <div className="text-right text-white/75">{row[1]}</div>
              </div>
            ))
          : rows.map((row, i) => (
              <div key={row[0]} className="grid grid-cols-[0.45fr_1.6fr_1fr_0.8fr] items-center rounded-xl border border-white/6 bg-[#0A1320] px-4 py-4 text-sm">
                <div className="text-white/45">{i + 1}</div>
                <div className="font-medium text-white">{row[0]}</div>
                <div className="text-white/75">{row[1]}</div>
                <div className="text-right text-white/60">{row[2]}</div>
              </div>
            ))}
      </div>
    </div>
  );
}

function ReportPreview({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-[#0B1423]/85 p-4">
      <div className="h-56 rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4">
        {children}
      </div>
      <div className="mt-4 text-lg font-medium text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/55">{subtitle}</div>
    </div>
  );
}

function ReportMiniPage({ variant }: { variant: 'summary' | 'share' | 'leaderboard' | 'platform' | 'products' }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">Preview</div>
      <div className="mt-3 space-y-2">
        {variant === 'summary' && (
          <>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-white/[0.07]" />
              <div className="h-10 rounded-lg bg-white/[0.07]" />
            </div>
            <div className="h-24 rounded-xl bg-[#09121E]" />
          </>
        )}
        {variant === 'share' && <div className="h-36 rounded-xl bg-[#09121E]" />}
        {variant === 'leaderboard' && (
          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-white/[0.07]" />
            <div className="h-8 rounded-lg bg-white/[0.07]" />
            <div className="h-8 rounded-lg bg-white/[0.07]" />
          </div>
        )}
        {variant === 'platform' && <div className="mx-auto h-32 w-32 rounded-full bg-[conic-gradient(#3AA7FF_0_46%,#53E0C1_46%_77%,rgba(255,255,255,0.7)_77%_100%)] p-5"><div className="h-full w-full rounded-full bg-[#09121E]" /></div>}
        {variant === 'products' && (
          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-white/[0.07]" />
            <div className="h-8 rounded-lg bg-white/[0.07]" />
            <div className="h-8 rounded-lg bg-white/[0.07]" />
          </div>
        )}
      </div>
    </div>
  );
}



export default function MarketWatchLandingPage() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white antialiased">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(58,167,255,0.12),transparent_28%),linear-gradient(180deg,#07111F_0%,#08111D_45%,#07111F_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07111F]/80 backdrop-blur-xl">
        <div className={`${sectionClass} flex h-20 items-center justify-between`}>
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/65 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button>Book a Demo</Button>
          </div>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 md:hidden">Menu</button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-16 md:pt-24">
          <div className={sectionClass}>
            <div className="mx-auto max-w-5xl text-center">
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.18em] text-white/60 uppercase">
                  <BarChart3 className="h-3.5 w-3.5 text-[#53E0C1]" />
                  The Market Intelligence Platform for Philippine E-Commerce
                </div>
                <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-7xl">
                  See Who’s Winning Your Category Across Philippine E-Commerce
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#A8B5C8] md:text-xl">
                  MarketWatch helps brands monitor category size, market share, platform distribution, market leaders, and top-performing products across the Philippines’ leading marketplaces.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button>Book a Demo</Button>
                  <Button secondary>Request a Sample Report</Button>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }} className="mt-16 md:mt-20">
              <HeroMockup />
            </motion.div>
          </div>
        </section>

        <section className="pt-16 md:pt-20">
          <div className={sectionClass}>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.025] p-6 md:p-7">
                  <div className="text-sm tracking-[0.18em] text-[#53E0C1] uppercase">What you can see</div>
                  <h3 className="mt-4 text-2xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/58">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 md:py-32">
          <div className={sectionClass}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">The problem</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Most Brands Can See Their Sales. Few Can See the Market.
              </h2>
              <p className="mt-5 text-lg text-white/58">
                Internal reporting is necessary. It is not enough. Market leadership requires a clearer view of category position, concentration, and competitive movement.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {pains.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.025] p-6 md:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]">
                      <Icon className="h-5 w-5 text-[#53E0C1]" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/58">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="product" className="border-y border-white/[0.06] bg-white/[0.02] py-28 md:py-32">
          <div className={sectionClass}>
            <div className="max-w-3xl">
              <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">Product</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Market share and category intelligence, presented more clearly.
              </h2>
              <p className="mt-5 text-lg text-white/58">
                MarketWatch gives teams a focused view of category size, brand position, platform mix, and product leadership without forcing them to piece the market together manually.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="rounded-[28px] border border-white/8 bg-[#0B1423]/85 p-6 md:p-8">
                <div className="mb-6 max-w-xl">
                  <div className="text-sm tracking-[0.18em] text-[#53E0C1] uppercase">Section B</div>
                  <h3 className="mt-3 text-3xl font-medium text-white">Market share and category intelligence</h3>
                  <p className="mt-3 leading-7 text-white/58">Track market size, current leader, brand rankings, and market share by brand in a view designed to make competitive position easier to scan.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <MetricCard title="Tracked Market Size" value="₱182.4M" change="+8.4% vs prior period" positive />
                  <MetricCard title="Units Sold" value="413K" change="+5.1% vs prior period" positive />
                  <MetricCard title="Market Leader" value="Brand A" change="31.8% share" positive />
                </div>
                <div className="mt-5">
                  <MarketShareTable />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[#0B1423]/85 p-6 md:p-8">
                <div className="mb-6 max-w-md">
                  <div className="text-sm tracking-[0.18em] text-[#53E0C1] uppercase">Section C</div>
                  <h3 className="mt-3 text-3xl font-medium text-white">Platform distribution and concentration</h3>
                  <p className="mt-3 leading-7 text-white/58">See how the category is split across marketplaces and how concentrated the category is among the leading brands.</p>
                </div>
                <div className="grid gap-4">
                  <MetricCard title="Top 3 Concentration" value="68.2%" change="High concentration" positive />
                  <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                    <PlatformDistribution />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/8 bg-[#0B1423]/85 p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div className="max-w-md">
                  <div className="text-sm tracking-[0.18em] text-[#53E0C1] uppercase">Section D</div>
                  <h3 className="mt-3 text-3xl font-medium text-white">Top products and drilldowns</h3>
                  <p className="mt-3 leading-7 text-white/58">Review the Top 10 Products by revenue or by units sold, then refine the view further by platform, category, subcategory, and period.</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {[
                      ['Platform', 'Shopee'],
                      ['Category', 'Consumer Electronics'],
                      ['Subcategory', 'TWS Earbuds'],
                      ['Period', 'Feb 2026'],
                    ].map((row) => (
                      <div key={row[0]} className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                        <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">{row[0]}</div>
                        <div className="mt-1 text-sm font-medium text-white">{row[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <TopProductsPanel />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-32">
          <div className={sectionClass}>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">How it works</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  A practical flow from filtering to insight.
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  ['01', 'Choose a platform, category, subcategory, and period', 'Start with the exact market slice you want to understand.'],
                  ['02', 'See category size, leaders, share, platform mix, and top products', 'Review the core market outputs in one structured dashboard view.'],
                  ['03', 'Use the insight to guide strategy and execution', 'Apply the market view to assortment, pricing, media, benchmarking, and brand decisions.'],
                ].map((item) => (
                  <div key={item[0]} className="flex gap-4 rounded-[22px] border border-white/8 bg-white/[0.025] p-5 md:p-6">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white/28">{item[0]}</div>
                    <div>
                      <div className="text-lg font-medium text-white">{item[1]}</div>
                      <div className="mt-2 leading-7 text-white/58">{item[2]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="border-y border-white/[0.06] bg-white/[0.02] py-24 md:py-28">
          <div className={sectionClass}>
            <div className="max-w-3xl">
              <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">Use cases</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Built for teams that need a clearer market view.
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {roles.map((item) => (
                <div key={item.role} className="rounded-[24px] border border-white/8 bg-[#0B1423]/85 p-6">
                  <div className="text-lg font-medium text-white">{item.role}</div>
                  <p className="mt-3 leading-7 text-white/58">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className="py-28 md:py-32">
          <div className={sectionClass}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">Methodology</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  Built on structured marketplace intelligence.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/58">
                  MarketWatch provides directional market intelligence across Shopee, Lazada, and TikTok Shop through category and subcategory views, time-based filtering, brand rankings, product rankings, and platform distribution outputs designed for benchmarking and strategy.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-[#0B1423]/85 p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ['Platform Coverage', 'Shopee, Lazada, TikTok Shop'],
                    ['Views Available', 'Category and subcategory drilldowns'],
                    ['Time Filtering', 'Period-based analysis and comparison'],
                    ['Outputs', 'Brand share, leaders, platform mix, top products'],
                  ].map((item, i) => (
                    <div key={i} className="rounded-[22px] border border-white/8 bg-white/[0.02] p-5">
                      <div className="text-sm text-white/42">{item[0]}</div>
                      <div className="mt-3 text-xl font-medium text-white">{item[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sample-report" className="border-y border-white/[0.06] bg-white/[0.02] py-28 md:py-32">
          <div className={sectionClass}>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">Sample report</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  See how the category story comes together.
                </h2>
                <p className="mt-5 text-lg text-white/58">
                  Preview the kinds of pages leaders can use to review category size, market share, leaderboards, platform mix, and top products.
                </p>
              </div>
              <Button secondary>Request a Sample Report</Button>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-5">
              <ReportPreview title="Executive Summary" subtitle="A concise snapshot for leadership teams.">
                <ReportMiniPage variant="summary" />
              </ReportPreview>
              <ReportPreview title="Category Market Share" subtitle="Share estimates and category position.">
                <ReportMiniPage variant="share" />
              </ReportPreview>
              <ReportPreview title="Brand Leaderboard" subtitle="Top brands and competitive ranking movement.">
                <ReportMiniPage variant="leaderboard" />
              </ReportPreview>
              <ReportPreview title="Platform Distribution" subtitle="How the category splits across marketplaces.">
                <ReportMiniPage variant="platform" />
              </ReportPreview>
              <ReportPreview title="Top Products" subtitle="Top performers by revenue or units sold.">
                <ReportMiniPage variant="products" />
              </ReportPreview>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-28">
          <div className={sectionClass}>
            <div className="rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(83,224,193,0.10),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-8 py-14 text-center md:px-12 md:py-16">
              <div className="mx-auto max-w-4xl">
                <div className="text-sm tracking-[0.2em] text-[#53E0C1] uppercase">Final call to action</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                  Turn Marketplace Noise Into Category Clarity
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/58">
                  Benchmark better, see your market position more clearly, and make sharper category decisions with MarketWatch.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button>Book a Demo</Button>
                  <Button secondary>Request a Sample Report</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-10">
        <div className={`${sectionClass} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <Logo />
          <div className="flex flex-wrap gap-5 text-sm text-white/48">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#use-cases" className="hover:text-white">Use Cases</a>
            <a href="#methodology" className="hover:text-white">Methodology</a>
            <a href="#sample-report" className="hover:text-white">Sample Report</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
