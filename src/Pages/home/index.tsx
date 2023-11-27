import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListCategory from '../../components/ListCategory';
import { ItemType } from '../../components/types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { addToCart } from '../../services/addToCart';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [result, setResult] = useState(false);
  const [resultAPI, setResultAPI] = useState<ItemType[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId);
    const API_SEARCH = await getProductsFromCategoryAndQuery(categoryId, search);
    setResultAPI(API_SEARCH.results);
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const API_SEARCH = await getProductsFromCategoryAndQuery('', search);
    const response = API_SEARCH.results;
    if (!response || response.length === 0) {
      setResult(true);
    }
    setResultAPI(response);
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
      <Link
        to="/ShoppingCart"
        data-testid="shopping-cart-button"
      >
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

      {resultAPI.length > 0
        && resultAPI.map((obj) => (
          <Link
            to={ `/product/${obj.id}` }
            key={ obj.id }
            data-testid="product-detail-link"
          >
            <div data-testid="product">
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
              <button
              data-testid="product-add-to-cart"
              onClick={ () => addToCart(obj) }
            >
              Adicionar ao Carrinho
            </button>
            </div>
          </Link>
        ))}
    </>
  );
}

export default Home;
