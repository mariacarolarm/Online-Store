import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type ListCategoryType = {
  id: string,
  name: string,
};

type ListCategoryProps = {
  onCategorySelect: (categoryId: string) => void; // Adicionando prop para a função de seleção de categoria
};

function ListCategory({ onCategorySelect }: ListCategoryProps) {
  const [categories, setCategories] = useState<ListCategoryType[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };
    fetchApi();
  }, []);

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li key={ category.id }>
            <label htmlFor={ category.id } data-testid="category">
              <input
                type="radio"
                id={ category.id }
                name="categoryButton"
                value={ category.name }
                onChange={ () => onCategorySelect(category.id) }
              />
              { category.name }
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCategory;
