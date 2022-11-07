import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { CoffesContext } from "../../contexts/CoffesContext";
import { Cart, HeaderContainer, Locale } from "./styles";

export function Header() {
  const { coffesCart } = useContext(CoffesContext);

  return (
    <HeaderContainer>
      <div className="grid">
        <img src={logoImg} />
        <nav>
          <Locale>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Locale>
          <NavLink to="/checkout">
            <Cart>
              <ShoppingCartSimple size={22} weight="fill" />
              {coffesCart.length === 0 ? "" : <span>{coffesCart.length}</span>}
            </Cart>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
}
