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

export const coffes = [
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
