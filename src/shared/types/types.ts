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



export type ImageType = {
  directus_files_id: {
    id: string;
    title: string;
    width: number | null;
    type: string;
    height: number | null;
  };
};