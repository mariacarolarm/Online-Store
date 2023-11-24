interface Category { // Garantindo a tipagem dos dados
  id: string;
  name: string;
}

export const getCategories = async (): Promise<Category[]> => (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();

export const getProductsFromCategoryAndQuery = async (categoryId: string, query: string) => (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();

export const getProductById = async (productId: string) => (await fetch(`https://api.mercadolibre.com/items/${productId}`)).json();
