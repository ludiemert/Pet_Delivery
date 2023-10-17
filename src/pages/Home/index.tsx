import { Intro } from "./components/Intro";
import { OurPets } from "./components/OurPets";
import { HomeContainer } from "./styles";


export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurPets />
    </HomeContainer>
  );
}
