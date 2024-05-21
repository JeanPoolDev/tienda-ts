import './App.css'

import Footer from './components/footer'
import Guitarra from './components/guitarra'
import Header from './components/header'
import useCart from '../hooks/useCart'

function App() {

  const {
    data, 
    cart, 
    removeToCart, 
    cartEmpty, 
    increseQuantity, 
    drementQuantity, 
    addToCart } = useCart()

  
  return (
    <>
    <Header 
      cart={cart}
      removeToCart={removeToCart}
      cartEmpty={cartEmpty}
      increseQuantity={increseQuantity}
      drementQuantity={drementQuantity}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">
          Nuestra Colección
        </h2>

        <div className="row mt-5">
          {
            data.map( (guitarras) => (
              <Guitarra 
                key={guitarras.id}
                guitarras={guitarras}
                addToCart={addToCart}
              />
            ) )
          }
        </div>
    </main>

    <Footer />

    </>
  )
}

export default App
