import { useState, useEffect } from 'react'
import db from '../src/data/db';
import { Guitar ,ItemCart } from '../src/types/types'; 

const useCart = () => {
  
  const initialCart = () : ItemCart[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }
  
  const MAX = 5;
  const MIN = 1;

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  const addToCart = (item: Guitar) => {

    const itemExists = cart.findIndex(guitarra => guitarra.id === item.id );

    if( itemExists >= 0 ){
      if(cart[itemExists].quantity >= MAX) return;
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
      
    }else{
      const newItem : ItemCart = {...item, quantity: 1}
      setCart([...cart, newItem])  
    }
  }

  const removeToCart = (id: Guitar['id']) => {
    setCart(cart.filter(guitarra => guitarra.id !== id))
  }


  const drementQuantity = (id: Guitar['id']) => {
    const updateCart = cart.map((item) => {
      if(item.id === id && item.quantity > MIN){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  const increseQuantity = (id: Guitar['id']) => {
    const updateCart = cart.map((item) => {
      if(item.id === id && item.quantity < MAX){
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  const cartEmpty = () => {
    setCart([]);
  }

  return { 
    data, 
    cart, 
    addToCart, 
    removeToCart, 
    increseQuantity, 
    drementQuantity, 
    cartEmpty
  }
}
 
export default useCart;