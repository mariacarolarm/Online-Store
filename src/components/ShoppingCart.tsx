import ClientCart from './ClientCart';
import { ProductCartType } from './types';

function ShoppingCart() {
  const getLocalStorage = JSON.parse(localStorage.getItem('carrinho') || '[]');

  console.log(getLocalStorage);

  return (
    <div>
      {
        getLocalStorage.length > 0 ? getLocalStorage.map((product: ProductCartType) => (
          <div key={ product.id }>
            <ClientCart
              product={ product }
            />
          </div>
        )) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )
      }
    </div>
  );
}

export default ShoppingCart;
