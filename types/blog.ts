export interface Author {
   name: string;
   avatar: string;
}

export interface Post {
   id: number;
   title: string;
   description: string;
   imageUrl: string;
   tags: string[];
   author: Author;
   date: string;
}

export interface Blog {
   heading: string;
   subheading: string;
   posts: Post[];
}

export interface SeoData {
   title: string;
   meta: {
      name: string;
      content: string;
   };
}

export interface BlogPageData {
   data: Blog;
   seo: SeoData;
}
