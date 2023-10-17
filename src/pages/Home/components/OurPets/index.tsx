import { TitleText } from "../../../../components/Typography"
import { pet } from "../../../../data/pet";
import { PetCard } from "../PetCard";
import { OurPetsContainer, PetList } from "./styles"

export function OurPets() {
  return (

    <OurPetsContainer className="container">
      <TitleText size="l" color="subtitle">
      Ours Pets
      </TitleText>

      <PetList>
        {pet.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </PetList>
      </OurPetsContainer>

  );
}