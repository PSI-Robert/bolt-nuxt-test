export interface ToolItem {
   icon: string;
   name: string;
   url: string;
}

export interface BannerData {
   badge: {
      label: string;
      content: string;
   };
   heading: string;
   subheading: string;
   tools: ToolItem[];
}

export interface Benefit {
   icon: string;
   title: string;
   description: string;
}

export interface Feature {
   id: string;
   title: string;
   description: string;
   imageUrl: string;
   benefits: Benefit[];
   reversed?: boolean;
   loading?: boolean;
}

export interface featureSection {
   heading: string;
   subheading: string;
   features: Feature[];
}

export interface earlyAccessSection {
   heading: string;
   subheading: string;
}

export interface SeoData {
   title: string;
   meta: {
      name: string;
      content: string;
   };
}

export interface HomePageData {
   banner: BannerData;
   featureSection: featureSection;
   earlyAccessSection: earlyAccessSection;
   seo: SeoData;
}
