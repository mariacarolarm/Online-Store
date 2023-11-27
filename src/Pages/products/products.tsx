import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { addToCart } from '../../services/addToCart';

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchProductDetails() {
      if (id) {
        try {
          const productDetails = await getProductById(id);
          setProduct(productDetails);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      }
    }

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 data-testid="product-detail-name">{product.title}</h1>
      <img
        data-testid="product-detail-image"
        src={ product.thumbnail }
        alt={ product.title }
      />
      <p
        data-testid="product-detail-price"
      >
        R$:
        {' '}
        {product.price}
      </p>
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => addToCart(product) }
      >
        Adicionar ao Carrinho
      </button>
      <Link to="/ShoppingCart">
        <button data-testid="shopping-cart-button">Ir para o Carrinho</button>
      </Link>
    </div>
  );
}

export default ProductDetails;
