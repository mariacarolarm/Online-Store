import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCartType } from '../../components/types';

const INITIAL_VALUE = {
  name: '',
  cpf: '',
  email: '',
  phone: '',
  cep: '',
  adress: '',
  complement: '',
  number: '',
  city: '',
  state: '',
  method: '',
};

function Checkout() {
  const [cart, setCart] = useState<ProductCartType[]>([]);
  const [client, setClient] = useState(INITIAL_VALUE);
  const [error, setError] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setClient({ ...client, [name]: value });
  }

  useEffect(() => {
    const productCart = JSON.parse(localStorage.getItem('carrinho') || '[]');
    if (productCart.length) {
      setCart(productCart);
    }
  }, []);

  const handleSubmit = () => {
    if (client === INITIAL_VALUE || !paymentMethod) {
      setError('Campos inválidos');
    } else {
      setError('');
      localStorage.removeItem('carrinho');
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Link to="/ShoppingCart">
        <button>
          Voltar
        </button>
      </Link>
      <div className="review-container">
        <p>Revise seus Produtos</p>
        <ul>
          { cart.length > 0 && cart.map((product) => (
            <div key={ product.id }>
              <p>{product.title}</p>
              <p>
                Total:
                {' '}
                R$
                {' '}
                {product.price}
              </p>
            </div>
          ))}
        </ul>
      </div>
      <div className="buyer-information-container">
        <p>Informações do Comprador</p>
        <form action="submit">
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
            name="fullName"
            defaultValue={ client.name }
            onChange={ handleInputChange }
            required
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            name="cpf"
            defaultValue={ client.cpf }
            onChange={ handleInputChange }
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={ client.email }
            required
          />
          <input
            data-testid="checkout-phone"
            type="text"
            placeholder="Telefone"
            name="phone"
            defaultValue={ client.phone }
            required
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            name="cep"
            defaultValue={ client.cep }
            required
          />
          <input
            data-testid="checkout-address"
            type="tex"
            placeholder="Endereço"
            name="adress"
            defaultValue={ client.adress }
            required
          />
          <input
            type="text"
            placeholder="Complemento"
            name="complement"
            defaultValue={ client.complement }
          />
          <input
            type="text"
            placeholder="Número"
            name="number"
            defaultValue={ client.number }
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            name="city"
            defaultValue={ client.city }
            required
          />
          <select>
            <option defaultValue="rj">RJ</option>
            <option defaultValue="sp">SP</option>
            <option defaultValue="mg">MG</option>
          </select>
        </form>
      </div>
      <div className="payment-method-container">
        <div className="ticket-container">
          <p>Boleto</p>
          <label>
            <input
              data-testid="ticket-payment"
              type="radio"
              name="method"
              onChange={ () => setPaymentMethod('ticket') }
              checked={ paymentMethod === 'ticket' }
            />
            Ticket
          </label>
        </div>
        <div className="credit-container">
          <p>Cartão de Crédito</p>
          <label>
            <input
              data-testid="visa-payment"
              type="radio"
              name="method"
              onChange={ () => setPaymentMethod('visa') }
              checked={ paymentMethod === 'visa' }
            />
            Visa
          </label>
          <label>
            <input
              data-testid="master-payment"
              type="radio"
              name="method"
              onChange={ () => setPaymentMethod('master') }
              checked={ paymentMethod === 'master' }
            />
            MasterCard
          </label>
          <label>
            <input
              data-testid="elo-payment"
              type="radio"
              name="method"
              onChange={ () => setPaymentMethod('elo') }
              checked={ paymentMethod === 'elo' }
            />
            Elo
          </label>
        </div>
      </div>
      {error && <p data-testid="error-msg">{error}</p>}
      <button
        data-testid="checkout-btn"
        type="submit"
        onClick={ handleSubmit }
      >
        Comprar
      </button>
    </div>
  );
}

export default Checkout;
