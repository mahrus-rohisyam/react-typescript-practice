import { StrapiImageType, StrapiMetaPageType } from "./StrapiType";

export type ArticleAruna = {
  data: {
    id: number;
    attributes: {
      articleTtitle: string;
      slug: string;
      excerpt: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      featuredImage: {
        data: StrapiImageType;
      };
    };
  };
  meta: StrapiMetaPageType
};
