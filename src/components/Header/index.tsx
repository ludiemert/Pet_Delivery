import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
} from "./styles";
import logoPet from "../../assets/logo03.jpg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { ArrowUDownLeft } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoPet} width="45" height="40" />
          <ArrowUDownLeft size={32}></ArrowUDownLeft>
        </NavLink>

        <h3> Hello, Welcome to ours, your Pet Store 🐶😻</h3>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Sao Jose dos Campos - SP
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
