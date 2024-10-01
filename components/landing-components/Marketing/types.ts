export interface MarketingItemType {
  title: string;
  url: string;
  linkStrength?: number;
  description: VNode;
}

export interface MarketingTableProps {
    marketingItems: MarketingItemType[];
    columns: string[];
}