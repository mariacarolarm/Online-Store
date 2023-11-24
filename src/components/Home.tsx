import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <input type="text" />
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.

      </p>
      <Link to="/ShoppingCart" data-testid="shopping-cart-button">
        <button>Ir para o Carrinho</button>
      </Link>
    </>
  );
}

export default Home;
