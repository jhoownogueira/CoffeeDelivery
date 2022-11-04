import { MapPin, ShoppingCartSimple } from "phosphor-react";
import logoImg from "../../assets/logo.svg";
import { Cart, HeaderContainer, Locale } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="grid">
        <img src={logoImg} />
        <nav>
          <Locale>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Locale>
          <Cart>
            <ShoppingCartSimple size={22} weight="fill" />
            <span>3</span>
          </Cart>
        </nav>
      </div>
    </HeaderContainer>
  );
}
