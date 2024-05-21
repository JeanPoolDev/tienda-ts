export interface Guitar {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export interface ItemCart extends Guitar{
  quantity: number
}

export interface CartProps{
  cart: ItemCart[];
  cartEmpty: () => void;
  removeToCart: (id: Guitar['id']) => void;
  increseQuantity: (id: Guitar['id']) => void;
  drementQuantity: (id: Guitar['id']) => void;
}