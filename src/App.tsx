import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import pastaProducts from './components/pastaProducts.json';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const updateQuantity = (product: Product, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotalSum = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const calculateDiscount = () => {
    return 0;
  };

  const handleBuy = () => {
    setPurchaseSuccess(true);
    setCart([]);
    setTimeout(() => {
      setPurchaseSuccess(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} totalPrice={calculateTotalSum()} onReservationClick={() => alert('Reservation button clicked')} />
      <h1>Get your pasta TODAY!</h1>
      <div className="main-content">
        <div className="products">
          {pastaProducts.map((product) => (
            <Product key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>
        <Cart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
          totalSum={calculateTotalSum()}
          discount={calculateDiscount()}
          onBuy={handleBuy}
        />
      </div>
      {purchaseSuccess && <p>Purchase successful! Cart cleared.</p>}
    </div>
  );
}

export default App;
