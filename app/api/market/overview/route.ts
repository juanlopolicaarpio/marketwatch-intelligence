import { NextResponse } from "next/server";

import { marketOverview } from "@/lib/market-data";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? marketOverview.filters.categories[0];
  const platform = searchParams.get("platform") ?? marketOverview.filters.platforms[0];

  if (!marketOverview.filters.categories.includes(category)) {
    return NextResponse.json({ error: "Unsupported category" }, { status: 400 });
  }
  if (!marketOverview.filters.platforms.includes(platform)) {
    return NextResponse.json({ error: "Unsupported platform" }, { status: 400 });
  }

  const topProducts = platform === "All platforms"
    ? marketOverview.topProducts
    : marketOverview.topProducts.filter((product) => product.platform === platform);

  return NextResponse.json({
    ...marketOverview,
    selected: { category, platform },
    topProducts,
    disclosure: "Synthetic market dataset; no company or marketplace records.",
  });
}
