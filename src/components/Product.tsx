import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string; // Add imgUrl property
  onAddToCart: (product: ProductProps) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imgUrl, onAddToCart }) => {
  return (
    <div className="product">
      <img src={imgUrl} alt={name} /> {/* Render the product image */}
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart({ id, name, price, imgUrl })}>Add to Cart</button>
    </div>
  );
};

export default Product;
