import { Guitar } from '../types/types'


interface GuitarProps {
  guitarras: Guitar;
  addToCart: (item: Guitar) => void;
}

const Guitarra: React.FC<GuitarProps> = ({ 
  guitarras, 
  addToCart 
}) => {

  const { image, name, price } = guitarras

  return ( 
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img 
          className="img-fluid" 
          src={`/img/${image}.jpg`} 
          alt={name} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          {name}
        </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
        <p className="fw-black text-primary fs-3">
          ${price}
        </p>
        <button 
          onClick={() => addToCart(guitarras)}
          type="button"
          className="btn btn-dark w-100">
            Agregar al Carrito
        </button>
      </div>
    </div>
   );
}
 
export default Guitarra;