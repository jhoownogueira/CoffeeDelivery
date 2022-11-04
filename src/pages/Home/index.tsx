import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { HomeContainer, IconColors } from "./styles";
import cupOfCoffeImg from "../../assets/cup-of-coffee.png";

export function Home() {
  return (
    <HomeContainer>
      <div className="grid">
        <div className="left_container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <IconColors backgroundColor="primaryDark">
                <ShoppingCartSimple size={16} weight="fill" />
              </IconColors>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IconColors backgroundColor="baseGray">
                <Package size={16} weight="fill" />
              </IconColors>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconColors backgroundColor="primary">
                <Timer size={16} weight="fill" />
              </IconColors>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <IconColors backgroundColor="secondary">
                <Coffee size={16} weight="fill" />
              </IconColors>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div className="right_container">
          <img src={cupOfCoffeImg} alt="" />
        </div>
      </div>
    </HomeContainer>
  );
}
