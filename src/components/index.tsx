import { MapPin } from "phosphor-react";
import logoImg from "../assets/logo.svg";
import { GridResponsiveFlex } from "../styles/Global";
import { HeaderContainer, Locale } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <GridResponsiveFlex
        direction="row"
        justify="space-between"
        align="center"
      >
        <img src={logoImg} />
        <nav>
          <Locale>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Locale>
        </nav>
      </GridResponsiveFlex>
    </HeaderContainer>
  );
}
