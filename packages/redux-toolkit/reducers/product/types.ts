export type GetProductProps = {
  productId: string;
};

export type AddProductProps = {
  productName: string;
  productUrl: string;
  category: string;
  videoUrl: string;
  videoDuration?: string;
  thumbnail: string;
  videoCaption: string;
  brand: string;
  theme: string;
  subTheme: string;
  ref: string;
};
