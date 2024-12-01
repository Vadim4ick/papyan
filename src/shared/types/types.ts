export type TService = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export interface IServicesTitles  {
  title: string
}

export type TCategory = {
  id: string
  name: string
}


export interface IImage {
  id: number;
  imageUrl: string;
  altText: string;
  services?: IServicesTitles[];
}