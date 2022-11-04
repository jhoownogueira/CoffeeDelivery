import typeAmericano from "../../assets/Type=Americano.png";
import typeExpresso from "../../assets/Type=Expresso.png";
import typeArabe from "../../assets/Type=Arabe.png";
import typeCafecomLeite from "../../assets/Type=CafecomLeite.png";
import typeCafeGelado from "../../assets/Type=CafeGelado.png";
import typeCapuccino from "../../assets/Type=Capuccino.png";
import typeChocolateQuente from "../../assets/Type=ChocolateQuente.png";
import typeCubano from "../../assets/Type=Cubano.png";
import typeExpressoCremoso from "../../assets/Type=ExpressoCremoso.png";
import typeHavaiano from "../../assets/Type=Havaiano.png";
import typeIrlandes from "../../assets/Type=Irlandes.png";
import typeLatte from "../../assets/Type=Latte.png";
import typeMacchiato from "../../assets/Type=Macchiato.png";
import typeMochaccino from "../../assets/Type=Mochaccino.png";

export const coffes = [
  {
    id: 1,
    photo: typeExpresso,
    name: "Expresso Tradicional",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.9,
    amount: 0,
  },
  {
    id: 2,
    photo: typeAmericano,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    categories: ["TRADICIONAL"],
    value: 9.5,
    amount: 0,
  },
  {
    id: 3,
    photo: typeExpressoCremoso,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    categories: ["TRADICIONAL"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 4,
    photo: typeCafeGelado,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["TRADICIONAL", "GELADO"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 5,
    photo: typeCafecomLeite,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 6,
    photo: typeLatte,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 7,
    photo: typeCapuccino,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 8,
    photo: typeMacchiato,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 9,
    photo: typeMochaccino,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["TRADICIONAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 10,
    photo: typeChocolateQuente,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["ESPECIAL", "COM LEITE"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 11,
    photo: typeCubano,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    categories: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 12,
    photo: typeHavaiano,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    categories: ["ESPECIAL"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 13,
    photo: typeArabe,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["ESPECIAL"],
    value: 9.95,
    amount: 0,
  },
  {
    id: 14,
    photo: typeIrlandes,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["ESPECIAL", "ALCOÓLICO"],
    value: 9.95,
    amount: 0,
  },
];
