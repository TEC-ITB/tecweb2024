export interface ResponsiveImage {
  width: number;
  webpSrcSet: string;
  title: string;
  srcSet: string;
  sizes: string;
  src: string;
  height: number;
  bgColor: string;
  base64: string;
  aspectRatio: number;
  alt: string;
}

export interface r1Member {
  id: string;
  name: string;
  post: string;
  profilePic: {
    responsiveImage: ResponsiveImage;
  };
}

export interface otherMember {
  id: string;
  name: string;
  post: string;
  division: string;
  profilePic: {
    responsiveImage: ResponsiveImage;
  };
}