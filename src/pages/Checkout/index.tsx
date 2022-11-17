import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";
import Swal from "sweetalert2";
import { CoffesContext } from "../../contexts/CoffesContext";
import { EmptyCart } from "../../components/EmptyCart";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { CardCoffe, CheckoutContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { CheckoutContext } from "../../contexts/CheckoutContext";

export function Checkout() {
  const { coffesCart, setCoffesCart } = useContext(CoffesContext);
  const { setCheckout } = useContext(CheckoutContext);
  const [valorItensCart, setValorItensCart] = useState(0);
  const [valorFrete, setValorFrete] = useState(5);
  const [valorTotalCart, setValorTotalCart] = useState(0);

  const navigate = useNavigate();

  const { register, handleSubmit, watch, setValue } = useForm();

  register("cep", {
    onBlur: consultaCep,
  });
  const cepInformado = watch("cep");

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
  function handleCreateNewOrder(data: any) {
    const pedidoFechado = Object.assign({ coffesCart }, data);
    setCheckout(pedidoFechado);
    navigate("/success");
  }

  function consultaCep() {
    if (cepInformado.length > 0) {
      axios({
        method: "get",
        url: `https://viacep.com.br/ws/${cepInformado.replace("-", "")}/json/`,
      })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "CEP inválido",
          });
        })
        .then((response: any) => {
          if (response.data.erro === true) {
            Swal.fire({
              icon: "error",
              title: "CEP inválido",
            });
          }
          setValue("rua", response.data.logradouro);
          setValue("bairro", response.data.bairro);
          setValue("cidade", response.data.localidade);
          setValue("uf", response.data.uf);
        });
    }
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
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
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
                <InputMask
                  required
                  mask="99999-999"
                  maskChar={null}
                  type="text"
                  id="cep"
                  placeholder="CEP"
                  {...register("cep")}
                />
              </div>
              <div className="field">
                <input
                  required
                  type="text"
                  id="rua"
                  placeholder="RUA"
                  {...register("rua")}
                />
              </div>
              <div className="field_group">
                <div className="field">
                  <input
                    required
                    type="text"
                    id="numero"
                    placeholder="Número"
                    {...register("numero")}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                    {...register("complemento")}
                  />
                  <label htmlFor="complemento">Opcional</label>
                </div>
              </div>
              <div className="field_group">
                <div className="field">
                  <input
                    required
                    type="text"
                    id="bairro"
                    placeholder="Bairro"
                    {...register("bairro")}
                  />
                </div>
                <div className="field">
                  <input
                    required
                    type="text"
                    id="cidade"
                    placeholder="Cidade"
                    {...register("cidade")}
                  />
                </div>
                <div className="field">
                  <input
                    required
                    maxLength={2}
                    type="text"
                    id="uf"
                    placeholder="UF"
                    {...register("uf")}
                  />
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
              <input
                required
                type="radio"
                id="credito"
                value="Cartão de crédito"
                defaultChecked
                {...register("payment")}
              />
              <label htmlFor="credito">
                <div className="content">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </div>
              </label>
              <input
                required
                type="radio"
                id="debito"
                value="Cartão de débito"
                {...register("payment")}
              />
              <label htmlFor="debito">
                <div className="content">
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </div>
              </label>
              <input
                required
                type="radio"
                id="dinheiro"
                value="Dinheiro"
                {...register("payment")}
              />
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
                    <CardCoffe key={coffee.id}>
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
