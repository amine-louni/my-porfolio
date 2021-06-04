export type Merge<P, T> = Omit<P, keyof T> & T;
export interface IPost {
  logo: [{ url: string }];
  title: string;
  slug: string;
  updatedAt: string;
}
