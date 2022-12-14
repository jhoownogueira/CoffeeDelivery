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
        <NavLink to="/">
          <img src={logoImg} />
        </NavLink>
        <nav>
          <Locale>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Locale>
          {coffesCart.length === 0 ? (
            <NavLink to="/">
              <Cart empty>
                <ShoppingCartSimple size={22} weight="fill" />
                {coffesCart.length === 0 ? (
                  ""
                ) : (
                  <span>{coffesCart.length}</span>
                )}
              </Cart>
            </NavLink>
          ) : (
            <NavLink to="/checkout">
              <Cart empty={false}>
                <ShoppingCartSimple size={22} weight="fill" />
                {coffesCart.length === 0 ? (
                  ""
                ) : (
                  <span>{coffesCart.length}</span>
                )}
              </Cart>
            </NavLink>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
}
