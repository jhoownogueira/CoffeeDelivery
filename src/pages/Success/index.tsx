import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Icon, SuccessContainer } from "./styles";
import deliveryImg from "../../assets/success-delivery.png";

export function Success() {
  return (
    <SuccessContainer>
      <div className="grid">
        <div className="left">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <div className="dados_entrega">
            <div className="line">
              <Icon colors="secondary">
                <MapPin size={16} weight="fill" />
              </Icon>
              <div className="info">
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div className="line">
              <Icon colors="primary">
                <Timer size={16} weight="fill" />
              </Icon>
              <div className="info">
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div className="line">
              <Icon colors="primaryDark">
                <CurrencyDollar size={16} weight="fill" />
              </Icon>
              <div className="info">
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img_container">
            <img src={deliveryImg} />
          </div>
        </div>
      </div>
    </SuccessContainer>
  );
}
