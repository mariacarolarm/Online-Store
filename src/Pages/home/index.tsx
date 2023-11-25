import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListCategory from '../../components/ListCategory';
import { ItemType } from '../../components/types';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [result, setResult] = useState(false);
  const [resultadoAPI, setResultadoAPI] = useState<ItemType[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId);
    const API_SEARCH = await getProductsFromCategoryAndQuery(categoryId, search);
    setResultadoAPI(API_SEARCH.results);
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const API_SEARCH = await getProductsFromCategoryAndQuery('', search);
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
        value={ search }
        onChange={ ({ target }) => setSearch(target.value) }
        data-testid="query-input"
      />
      {' '}
      <button data-testid="query-button" onClick={ handleSearch }>Buscar</button>
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link to="/ShoppingCart" data-testid="shopping-cart-button">
        <button>Ir para o Carrinho</button>
      </Link>
      {selectedCategory && (
        <p data-testid="selected-category">
          Categoria selecionada:
          {' '}
          {selectedCategory}
        </p>
      )}
      <ListCategory onCategorySelect={ handleCategorySelect } />
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
