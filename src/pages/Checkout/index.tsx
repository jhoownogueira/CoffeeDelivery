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

import imgCoffe1 from "../../assets/Type=Americano.png";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";

export function Checkout() {
  const { coffesCart } = useContext(CoffesContext);

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
              <CardCoffe>
                <div className="left">
                  <div className="imgCoffee">
                    <img src={imgCoffe1} />
                  </div>
                  <div className="info">
                    <span>Expresso Tradicional</span>
                    <div className="cart">
                      <div className="units">
                        <button>
                          <Minus size={14} weight="bold" />
                        </button>
                        <span>1</span>
                        <button>
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <button>
                        <Trash size={16} />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
                <strong>R$ 9,90</strong>
              </CardCoffe>
              <CardCoffe>
                <div className="left">
                  <div className="imgCoffee">
                    <img src={imgCoffe1} />
                  </div>
                  <div className="info">
                    <span>Expresso Tradicional</span>
                    <div className="cart">
                      <div className="units">
                        <button>
                          <Minus size={14} weight="bold" />
                        </button>
                        <span>1</span>
                        <button>
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <button>
                        <Trash size={16} />
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
                <strong>R$ 9,90</strong>
              </CardCoffe>
            </div>
            <div className="totais">
              <div className="totais_line">
                <span>Total de itens</span>
                <p>R$ 29,70</p>
              </div>
              <div className="totais_line">
                <span>Entrega</span>
                <p>R$ 3,50</p>
              </div>
              <div className="totais_line">
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
}
