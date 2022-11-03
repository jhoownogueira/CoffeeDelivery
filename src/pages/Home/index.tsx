import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { GridResponsiveFlex } from "../../styles/Global";
import { HomeContainer } from "./styles";
import cupOfCoffeImg from "../../assets/cup-of-coffee.png";

export function Home() {
  return (
    <HomeContainer>
      <GridResponsiveFlex
        direction="rows"
        align="flex-start"
        justify="space-between"
      >
        <div className="left_container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="left_container_grid">
            <ul>
              <li>
                <div className="left_container_grid_icon">
                  <ShoppingCartSimple size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <div className="left_container_grid_icon">
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <div className="left_container_grid_icon">
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <div className="left_container_grid_icon">
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_container">
          <img src={cupOfCoffeImg} alt="" />
        </div>
      </GridResponsiveFlex>
    </HomeContainer>
  );
}
