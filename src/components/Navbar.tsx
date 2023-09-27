interface NavbarProps {
  cartCount: number;
  totalPrice: number;
  onReservationClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, totalPrice, onReservationClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">PASTA SHOP</div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="cart">
        <span className="cart-count">{cartCount}</span>
        <span className="cart-total">${totalPrice.toFixed(2)}</span>
        <button>Cart</button>
      </div>
      <button className="reservation-button" onClick={onReservationClick}>Reserve Delivery</button>
    </nav>
  );
};

export default Navbar;
