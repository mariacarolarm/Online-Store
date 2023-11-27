export type ItemType = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

export type ProductCartType = ItemType & {
  quantity: number;
};
