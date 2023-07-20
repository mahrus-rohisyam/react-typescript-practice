export type ArticleType = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
  updated_at: Date;
  created_at: Date;
};
