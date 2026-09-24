export const marketOverview = {
  asOf: "September 2026",
  currency: "PHP",
  filters: {
    categories: ["Personal Care", "Beauty", "Home Care"],
    platforms: ["All platforms", "Shopee", "Lazada", "TikTok Shop"],
  },
  summary: {
    trackedSales: 184_600_000,
    monthlyGrowth: 12.8,
    trackedUnits: 486_200,
    activeBrands: 42,
  },
  brandShare: [
    { brand: "Brand North", share: 22.8, growth: 4.1, sales: 42_090_000 },
    { brand: "Brand Atlas", share: 18.4, growth: -1.7, sales: 33_970_000 },
    { brand: "Brand Ember", share: 15.1, growth: 8.6, sales: 27_870_000 },
    { brand: "Brand Cove", share: 11.6, growth: 2.3, sales: 21_410_000 },
    { brand: "Other tracked brands", share: 32.1, growth: 0.9, sales: 59_260_000 },
  ],
  platformMix: [
    { platform: "Shopee", share: 46, color: "#3AA7FF" },
    { platform: "Lazada", share: 31, color: "#53E0C1" },
    { platform: "TikTok Shop", share: 23, color: "#A78BFA" },
  ],
  trend: [
    { month: "Apr", sales: 128.4 },
    { month: "May", sales: 139.2 },
    { month: "Jun", sales: 145.8 },
    { month: "Jul", sales: 151.6 },
    { month: "Aug", sales: 163.7 },
    { month: "Sep", sales: 184.6 },
  ],
  topProducts: [
    { rank: 1, product: "Hydra Barrier Set", brand: "Brand North", platform: "Shopee", sales: 12_800_000, units: 31_400, growth: 18.2 },
    { rank: 2, product: "Daily Defense Gel", brand: "Brand Atlas", platform: "Lazada", sales: 10_900_000, units: 27_100, growth: -2.4 },
    { rank: 3, product: "Brightening Duo", brand: "Brand Ember", platform: "TikTok Shop", sales: 9_600_000, units: 24_800, growth: 27.6 },
    { rank: 4, product: "Calm Skin Kit", brand: "Brand Cove", platform: "Shopee", sales: 8_700_000, units: 19_900, growth: 6.3 },
    { rank: 5, product: "Renewal Night Set", brand: "Brand North", platform: "Lazada", sales: 7_900_000, units: 16_700, growth: 11.1 },
  ],
  insight: {
    headline: "Growth is concentrating in bundles and creator-led channels",
    body: "Tracked category sales accelerated in September. Brand Ember gained the most share, while TikTok Shop contributed a disproportionate share of incremental growth despite remaining the smallest platform.",
    actions: [
      "Review bundle architecture against the three fastest-growing products.",
      "Separate platform growth from promotional spikes before reallocating media.",
      "Watch Brand Atlas for continued share erosion over the next reporting window.",
    ],
  },
};

export type MarketOverview = typeof marketOverview;
