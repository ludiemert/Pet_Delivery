import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/Quantityinput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, PetCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../styles/utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface PetCartCardProps {
  pet: CartItem;
}

export function PetCartCard({ pet }: PetCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(pet.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(pet.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(pet.id);
  }

  const petTotal = pet.price * pet.quantity;

  const formattedPrice = formatMoney(petTotal);

  return (
    <PetCartCardContainer>
      <div>
        <img src={`/pet/${pet.photo}`} />

        <div>
          <RegularText color="subtitle">{pet.name}</RegularText>

          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={pet.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVE
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice} </p>
    </PetCartCardContainer>
  );
}
