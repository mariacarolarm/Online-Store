import { useState, useEffect } from 'react';
import { ProductCartType } from './types';

type ProductCartProp = {
  product: ProductCartType,
  onItemRemove: (productId: string) => void;
};

function ClientCart({ product, onItemRemove }: ProductCartProp) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    const currentCart: ProductCartType[] = JSON.parse(localStorage
      .getItem('carrinho') || '[]');

    const updatedCart = currentCart
      .map((item) => (item.id === product.id ? { ...item, quantity } : item));
    localStorage.setItem('carrinho', JSON.stringify(updatedCart));
  }, [quantity, product.id]);

  const updateLocalStorage = () => {
    const newLocalStorage = JSON.parse(localStorage.getItem('carrinho') || '[]')
      .filter((item: ProductCartType) => item.id !== product.id);
    localStorage.setItem('carrinho', JSON.stringify(newLocalStorage));
    onItemRemove(product.id);
  };

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const subQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  return (
    <div>
      <p data-testid="shopping-cart-product-name">
        <button
          onClick={ updateLocalStorage }
          type="button"
          data-testid="remove-product"
        >
          X
        </button>
        Nome do Produto:
        {' '}
        {product.title}
      </p>
      {product.thumbnail && (
        <img
          src={ product.thumbnail }
          alt={ `Thumbnail of ${product.title}` }
        />
      )}
      <p>Quantidade:</p>
      <button
        type="button"
        onClick={ subQuantity }
        data-testid="product-decrease-quantity"
      >
        -
      </button>
      <span data-testid="shopping-cart-product-quantity">{quantity}</span>
      <button
        type="button"
        onClick={ addQuantity }
        data-testid="product-increase-quantity"
      >
        +
      </button>
    </div>
  );
}
export default ClientCart;
