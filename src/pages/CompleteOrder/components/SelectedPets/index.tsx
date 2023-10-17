import { Cat, Dog } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { DetailsContainer, SelectedPetsContainer } from "./styles";
import { PetCartCard } from "../PetCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { useCart } from "../../../../hooks/useCart";

export function SelectedPets() {
  const { cartItems } = useCart();

  return (
    <SelectedPetsContainer>
      <TitleText size="xs" color="subtitle">
        <Cat /> Selected Pets <Dog />
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <PetCartCard key={item.id} pet={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedPetsContainer>
  );
}
