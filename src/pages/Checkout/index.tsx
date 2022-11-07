import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer } from "./styles";

export function Checkout() {
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
              <input type="radio" />
            </div>
          </div>
        </div>
        <div className="right_container">
          <h4>Cafés selecionados</h4>
        </div>
      </div>
    </CheckoutContainer>
  );
}
