export interface frontmatter {
  title: string;
  subtitle: string;
  date: Date;
  updated: Date;
  keywords: string[];
  slug: string;
  featured: boolean;
  ringColor?: string;
  image?: string;
  imageAlt?: string;
}

export interface PostInterface {
  slug: string;
  frontmatter: frontmatter;
}
