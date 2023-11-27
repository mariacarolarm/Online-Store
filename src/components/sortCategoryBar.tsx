import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/api';

function SortCategoryBar() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories.map((category: { name: any; }) => category.name));
    }

    fetchCategories();
  }, []);
  return (

    <div>
      <p>Categorias:</p>
      {categories.map((category) => (
        <div key={ category }>

          <input
            type="radio"
            id="categoryName"
            name="categoryOptions"
          />
          <label htmlFor="category" data-testid="category">{ category }</label>

        </div>
      ))}
    </div>

  );
}

export default SortCategoryBar;
