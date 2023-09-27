interface CartProps {
  cart: Product[];
  onRemoveFromCart: (product: Product) => void;
  onUpdateQuantity: (product: Product, quantity: number) => void;
  totalSum: number;
  discount: number;
  onBuy: () => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onRemoveFromCart,
  onUpdateQuantity,
  totalSum,
  discount,
  onBuy,
}) => {
  return (
    <aside className="cart-aside">
      <h2>Cart</h2>
      <ul>
      {cart.map((item) => (
  <li key={item.id}>
    <div className="product-details">
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="product-actions">
      <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      <input
        type="number"
        value={item.quantity || 1}
        onChange={(e) => onUpdateQuantity(item, +e.target.value)}
        min={1}
      />
    </div>
  </li>
))}
      </ul>
      <div className="discount">
        <label>Discount Coupon:</label>
        <input type="text" />
      </div>
      <div className="total">
        <p>Total Sum: ${totalSum.toFixed(2)}</p>
        <p>Discount: ${discount.toFixed(2)}</p>
      </div>
      <button onClick={onBuy}>Buy</button>
    </aside>
  );
};

export default Cart;
