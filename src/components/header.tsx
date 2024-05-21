import { CartProps } from "../types/types";
import Cart from "./cart";
import Empty from "./empty";


const Header: React.FC<CartProps> = ({ 
  cart, 
  cartEmpty, 
  removeToCart, 
  increseQuantity, 
  drementQuantity 
}) => {
  return ( 
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
              <a href="index.html">
                  <img className="img-fluid" src="./img/logo.svg" alt="imagen logo" />
              </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div 
                className="carrito"
            >
                <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />
                
                { 
                cart.length === 0 
                  ? <Empty />
                  : <Cart 
                      cart={cart}
                      cartEmpty={cartEmpty}
                      removeToCart={removeToCart}
                      increseQuantity={increseQuantity}
                      drementQuantity={drementQuantity}
                    /> 
                }

            </div>
          </nav>
        </div>
      </div>
    </header>
   );
}
 
export default Header;