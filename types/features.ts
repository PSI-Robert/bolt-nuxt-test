export interface Benefit {
   icon: 'call' | 'heart' | 'thumbs-up';
   title: string;
   description: string;
}

export interface Feature {
   title: string;
   description: string;
   imageUrl: string;
   benefits: Benefit[];
}
