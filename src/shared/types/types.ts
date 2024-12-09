export type TService = {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  sale:number;
};

export interface IServicesTitles  {
  title: string
}

export type TCategory = {
  id: string
  name: string
  imageUrl:string
}


export interface IImage {
  id: number;
  imageUrl: string;
  altText: string;
  services?: IServicesTitles[];
}