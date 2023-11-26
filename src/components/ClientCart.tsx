import { ProductCartType } from './types';

type ProductCartProp = {
  product: ProductCartType,
};

function ClientCart({ product }: ProductCartProp) {
  console.log(product);

  return (
    <div>
      <p data-testid="shopping-cart-product-name">
        Nome do Produto:
        {' '}
        {product.title}
      </p>
      <img
        src={ product.thumbnail }
        alt="Imagem do Produto"
      />
      <p data-testid="shopping-cart-product-quantity">
        Quantidade:
        {' '}
        {product.quantity}
        {' '}
      </p>
    </div>
  );
}

export default ClientCart;
