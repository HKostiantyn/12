export type NewsType = {
  title: string;
  publishOn: string;
  gettyImageUrl: string;
  commentCount: number;
  isLockedPro: boolean;
  videoPreviewUrl: string | null;
  videoDuration: string | null;
  isPaywalled: boolean;
  lastModified: string;
  status: string;
  content: string;
  metered: boolean;
  correctionReason: null;
  audioDuration: number;
  author: {
    id: string;
    type: string;
  };
};

export type SlugType = {
  id: number;
  slug: string;
  name: string;
};

export type WatchType = {
  TopGainers: SlugType[];
  TopLosers: SlugType[];
  CryptoCurrency: SlugType[];
  MostActive: SlugType[];
  InNews: SlugType[];
};

// export default NewsType;
