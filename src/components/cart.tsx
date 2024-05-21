import { useMemo } from "react";
import { CartProps } from "../types/types";

const Cart: React.FC<CartProps> = ({
   cart, 
   cartEmpty, 
   removeToCart, 
   drementQuantity, 
   increseQuantity 
  }) => {
  const cartTotal = useMemo(() => {
    return cart.reduce( (total, item) => total + (item.quantity * item.price) , 0 );
  }, [cart])

  return ( 
    <div id="carrito" className="bg-white p-3">
        <table className="w-100 table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {
                cart.map((guitarra) => (
                  <tr key={guitarra.id}>
                    <td>
                      <img 
                      className="img-fluid" 
                      src={`./img/${guitarra.image}.jpg`}
                      alt="imagen guitarra" />
                    </td>
                    <td>{guitarra.name}</td>
                    <td className="fw-bold">
                            ${guitarra.price}
                    </td>
                    <td className="flex align-items-start gap-4">
                      <button
                          onClick={() => drementQuantity(guitarra.id)}
                          type="button"
                          className="btn btn-dark"
                      >
                          -
                      </button>
                          {guitarra.quantity}
                      <button
                      onClick={() => increseQuantity(guitarra.id)}
                          type="button"
                          className="btn btn-dark"
                      >
                          +
                      </button>
                  </td>
                  <td>
                    <button
                    onClick={() => removeToCart(guitarra.id)}
                        className="btn btn-danger"
                        type="button"
                    >
                        X
                    </button>
                  </td>
                </tr>
                ))
              }
            </tbody>
        </table>

        <p className="text-end">
          Total pagar: 
          <span className="fw-bold">
            $ {cartTotal}
          </span>
        </p>
        <button 
          onClick={cartEmpty}
          className="btn btn-dark w-100 mt-3 p-2">
            Vaciar Carrito
        </button>
    </div>
   );
}
 
export default Cart;