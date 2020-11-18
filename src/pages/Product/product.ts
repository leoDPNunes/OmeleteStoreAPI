export interface IProduct {
  id: string;
  defaultPrice: string;
  images:Image;
  name: string;
  salePrice?: number;
  uri: string;
}

export interface Image  {
id: number[];
position: number[];
type: string[];
url: string[];
}
