import { ItemType, ProductCartType } from '../components/types';

export const addToCart = (productDetails: ItemType) => {
  const getLocalStorage: ProductCartType[] = JSON
    .parse(localStorage.getItem('carrinho') || '[]');
  const index = getLocalStorage
    .findIndex((elem) => elem.id === productDetails.id);

  if (index >= 0) {
    getLocalStorage[index].quantity += 1;
  } else {
    getLocalStorage.push({ ...productDetails, quantity: 1 });
  }

  const setLocalStorage = JSON.stringify(getLocalStorage);
  localStorage.setItem('carrinho', setLocalStorage);
};
