interface Category { // interface para tipar o retorno da função getCategories
  id: string;
  name: string;
}

export async function getCategories(): Promise<Category[]> {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories'; // endpoint da API
  const response = await fetch(endpoint);
  const categories: Category[] = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`; // endpoint da API
  const response = await fetch(endpoint);
  const products = await response.json();
  return products;
}

export async function getProductById(productId: string) {
  const endpoint = `https://api.mercadolibre.com/items/${productId}`; // endpoint da API
  const response = await fetch(endpoint);
  const product = await response.json();
  return product;
}
