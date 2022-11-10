import { EmptyCartContainer } from "./styles";
import emptyCartImg from "../../assets/emptyCart.png";
import { NavLink } from "react-router-dom";

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img src={emptyCartImg} />
      <NavLink to="/">Selecionar Cafés</NavLink>
    </EmptyCartContainer>
  );
}
