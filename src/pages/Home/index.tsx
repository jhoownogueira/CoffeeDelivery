import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCartSimple,
  Timer,
} from "phosphor-react";
import { CoffeeCard, HomeContainer, IconColors } from "./styles";
import cupOfCoffeImg from "../../assets/cup-of-coffee.png";

import typeAmericano from "../../assets/Type=Americano.png";
import typeArabe from "../../assets/Type=Arabe.png";
import typeCafecomLeite from "../../assets/Type=CafecomLeite.png";
import typeCapuccino from "../../assets/Type=Capuccino.png";
import typeChocolateQuente from "../../assets/Type=ChocolateQuente.png";
import typeCubano from "../../assets/Type=Cubano.png";
import typeExpressoCremoso from "../../assets/Type=ExpressoCremoso.png";
import typeHavaiano from "../../assets/Type=ExpressoHavaiano.png";
import typeIrlandes from "../../assets/Type=Irlandes.png";
import typeLatte from "../../assets/Type=Latte.png";
import typeMacchiato from "../../assets/Type=Macchiato.png";
import typeMochaccino from "../../assets/Type=Mochaccino.png";

const coffes = [
  {
    id: 1,
    photo: typeAmericano,
    name: "Expresso Tradicional",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
  },
  {
    id: 2,
    photo: typeArabe,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["ESPECIAL"],
    value: 9.95,
  },
];

export function Home() {
  return (
    <HomeContainer>
      <div className="section_home">
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
      <div className="section_coffees">
        <h2>Nossos cafés</h2>
        <div className="coffees_grid">
          {coffes.map((coffe) => {
            return (
              <CoffeeCard>
                <div className="imgCoffee">
                  <img src={coffe.photo} alt={coffe.name} />
                </div>
                <div className="tags">
                  {coffe.categories.map((index) => {
                    return <span>{index}</span>;
                  })}
                </div>
                <h3>{coffe.name}</h3>
                <p>{coffe.description}</p>
                <div className="coffe_card_bottom">
                  <div className="price">
                    <span>R$</span>
                    <strong>{parseFloat(coffe.value.toFixed(2))}</strong>
                  </div>
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
                    <button className="add_to_cart">
                      <ShoppingCartSimple size={22} weight="fill" />
                    </button>
                  </div>
                </div>
              </CoffeeCard>
            );
          })}
        </div>
      </div>
    </HomeContainer>
  );
}
