import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  ShoppingCartSimple,
  Trash,
} from "phosphor-react";
import { CardCoffe, CheckoutContainer } from "./styles";

import { useContext, useEffect, useState } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";
import { EmptyCart } from "../../components/EmptyCart";

export function Checkout() {
  const { coffesCart, setCoffesCart } = useContext(CoffesContext);
  const [valorItensCart, setValorItensCart] = useState(0);
  const [valorFrete, setValorFrete] = useState(5);
  const [valorTotalCart, setValorTotalCart] = useState(0);

  function addAmount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const idCoffee = parseInt(event.currentTarget.value);

    const Newcoffes = coffesCart.map((coffee) => {
      if (idCoffee === coffee.id) coffee.amount = coffee.amount + 1;
      return coffee;
    });
    setCoffesCart(Newcoffes);
  }
  function subAmount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const idCoffee = parseInt(event.currentTarget.value);

    const Newcoffes = coffesCart.map((coffee) => {
      if (idCoffee === coffee.id) {
        coffee.amount = coffee.amount - 1;
      }
      if (coffee.amount <= 0) {
        coffee.amount = 1;
      }
      return coffee;
    });

    setCoffesCart(Newcoffes);
  }
  function removeCoffe(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const idCoffee = parseInt(event.currentTarget.value);

    const Newcoffes = coffesCart.filter((coffee) => {
      if (idCoffee === coffee.id) coffee.amount = 0;

      if (idCoffee != coffee.id) return coffee;
    });

    setCoffesCart(Newcoffes);
  }

  useEffect(() => {
    setValorTotalCart(valorFrete + valorItensCart);
  }, [coffesCart, valorFrete, valorItensCart]);

  useEffect(() => {
    const calculoTotal = coffesCart.reduce(
      (total, coffee) => (total += coffee.amount * coffee.value),
      0
    );
    setValorItensCart(calculoTotal);
  }, [coffesCart]);

  return (
    <CheckoutContainer>
      <div className="grid">
        <div className="left_container">
          <h4>Complete seu pedido</h4>
          <div className="container">
            <div className="container_top">
              <MapPinLine size={22} />
              <div className="top_info">
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div className="container_inputs">
              <div className="field">
                <input type="text" id="cep" placeholder="CEP" />
              </div>
              <div className="field">
                <input type="text" id="rua" placeholder="RUA" />
              </div>
              <div className="field_group">
                <div className="field">
                  <input type="text" id="numero" placeholder="Número" />
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                  />
                  <label htmlFor="complemento">Opcional</label>
                </div>
              </div>
              <div className="field_group">
                <div className="field">
                  <input type="text" id="bairro" placeholder="Bairro" />
                </div>
                <div className="field">
                  <input type="text" id="cidade" placeholder="Cidade" />
                </div>
                <div className="field">
                  <input type="text" id="uf" placeholder="UF" />
                </div>
              </div>
            </div>
            <div className="container_top secondary_color">
              <CurrencyDollar size={22} />
              <div className="top_info">
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="container_payment">
              <input type="radio" name="payment" id="credito" />
              <label htmlFor="credito">
                <div className="content">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </div>
              </label>
              <input type="radio" name="payment" id="debito" />
              <label htmlFor="debito">
                <div className="content">
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </div>
              </label>
              <input type="radio" name="payment" id="dinheiro" />
              <label htmlFor="dinheiro">
                <div className="content">
                  <Money size={16} />
                  DINHEIRO
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="right_container">
          <h4>Cafés selecionados</h4>
          <div className="container">
            <div className="cart_list">
              {coffesCart.length > 0 ? (
                coffesCart.map((coffee) => {
                  return (
                    <CardCoffe>
                      <div className="left">
                        <div className="imgCoffee">
                          <img src={coffee.photo} />
                        </div>
                        <div className="info">
                          <span>{coffee.name}</span>
                          <div className="cart">
                            <div className="units">
                              <button
                                type="button"
                                onClick={subAmount}
                                value={coffee.id}
                              >
                                <Minus size={14} weight="bold" />
                              </button>
                              <span>{coffee.amount}</span>
                              <button
                                type="button"
                                onClick={addAmount}
                                value={coffee.id}
                              >
                                <Plus size={14} weight="bold" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={removeCoffe}
                              value={coffee.id}
                            >
                              <Trash size={16} />
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                      <strong>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                          minimumFractionDigits: 2,
                        }).format(coffee.value * coffee.amount)}
                      </strong>
                    </CardCoffe>
                  );
                })
              ) : (
                <EmptyCart />
              )}
            </div>
            <div className="totais">
              <div className="totais_line">
                <span>Total de itens</span>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  }).format(valorItensCart)}
                </p>
              </div>
              <div className="totais_line">
                <span>Entrega</span>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  }).format(valorFrete)}
                </p>
              </div>
              <div className="totais_line">
                <strong>Total</strong>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  }).format(valorTotalCart)}
                </strong>
              </div>
            </div>
            {coffesCart.length > 0 ? (
              <button type="submit">CONFIRMAR PEDIDO</button>
            ) : (
              <button type="submit" disabled>
                CARRINHO VAZIO
              </button>
            )}
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
}
