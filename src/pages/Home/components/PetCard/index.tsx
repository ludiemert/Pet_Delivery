import { useState } from "react";
import { QuantityInput } from "../../../../components/Quantityinput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../styles/utils/formatMoney";
import {
  PetCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCardWrapper,
} from "./styles";

import { ShoppingCart } from "phosphor-react";

export interface Pet {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface PetProps {
  pet: Pet;
}

export function PetCard({ pet }: PetProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }



  const { addPetToCart } = useCart();
  function handleAddToCart() {
    const petToAdd = {
      ...pet,
      quantity,
    };
    addPetToCart(petToAdd);
  }

  const formattedPrice = formatMoney(pet.price);

  return (
    <PetCardContainer>
      <img src={`/pet/${pet.photo}`} />

      <Tags>
        {pet.tags.map((tag) => (
          <span key={`${pet.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{pet.name}</Name>
      <Description>{pet.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCardWrapper>
          <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
          
          
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </PetCardContainer>
  );
}
