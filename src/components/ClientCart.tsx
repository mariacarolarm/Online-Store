import { ProductCartType } from './types';

type ProductCartProp = {
  product: ProductCartType,
};

function ClientCart({ product }: ProductCartProp) {
  return (
    <div>
      <p data-testid="shopping-cart-product-name">
        Nome do Produto:
        {' '}
        {product.title}
      </p>
      {product.thumbnail && (
        <img
          src={ product.thumbnail }
          alt={ product.thumbnail }
        />
      )}
      <p data-testid="shopping-cart-product-quantity">
        Quantidade:
        {' '}
        {product.quantity}
      </p>
    </div>
  );
}

export default ClientCart;
