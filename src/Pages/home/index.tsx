import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemType } from '../../components/types';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function Home() {
  const [result, setResult] = useState(false);
  const [resultadoAPI, setResultadoAPI] = useState<ItemType[]>([]);
  const [busca, setBusca] = useState<string>('');// depois conferir se deve trocar para search,setSearch
  const handleBusca = async (event: React.FormEvent) => {
    event.preventDefault();
    const API_SEARCH = await getProductsFromCategoryAndQuery('', busca);
    const response = API_SEARCH.results;
    if (!response || response.length === 0) {
      setResult(true);
    }
    setResultadoAPI(response);
  };
  return (
    <>
      <input
        type="text"
        name=""
        id="input-search"
        value={ busca }
        onChange={ ({ target }) => setBusca(target.value) }
        data-testid="query-input"
      />
      {' '}
      <button data-testid="query-button" onClick={ handleBusca }>Buscar</button>
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link to="/ShoppingCart" data-testid="shopping-cart-button">
        <button>Ir para o Carrinho</button>
      </Link>
      {result === true && <h2>Nenhum produto foi encontrado</h2>}

      {resultadoAPI.length > 0
        && resultadoAPI.map((obj) => (
          <div key={ obj.id } data-testid="product">
            <p>
              Produto:
              {' '}
              { obj.title }
            </p>
            <p>
              Preço:
              {' '}
              {obj.price}
            </p>
            <img src={ obj.thumbnail } alt="" />
          </div>
        ))}
    </>
  );
}

export default Home;
