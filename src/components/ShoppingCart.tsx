import { useState } from 'react';
import ClientCart from './ClientCart';
import { ProductCartType } from './types';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<ProductCartType[]>(
    JSON.parse(localStorage.getItem('carrinho') || '[]'),
  );

  const handleItemRemove = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('carrinho', JSON.stringify(updatedCart));
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div key={ product.id }>
            <ClientCart
              product={ product }
              onItemRemove={ handleItemRemove } // Passando a função de remoção
            />
          </div>
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </div>
  );
}

export default ShoppingCart;
