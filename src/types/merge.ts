export type Merge<P, T> = Omit<P, keyof T> & T;
export interface IPost {
  logo: [{ url: string }];
  thumbnail: [{ url: string }];

  title: string;
  slug: string;
  updatedAt: string;
  keywords: string;

  summary: string;
}
