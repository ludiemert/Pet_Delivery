import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  BenefitsContainer,
} from "./styles";
import introImg from "../../../../assets/intro-img.jpg";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer, Dog} from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Find what you need at any time of day for your pet 😻🐶
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              With Pet Delivery you receive your order wherever you are, at any
              time 😻🐶
            </RegularText>
          </section>

          <BenefitsContainer>

            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Simple and safe purchase"
            />

             <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="The packaging keeps the material intact"
            />

            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery"
            />

            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Dog weight="fill" />}
              text="The merchandise reaches you"
            />
            
            
          </BenefitsContainer>
        </div>

        <img
          src={introImg}
          alt="image Pet"
          style={{ width: "476px", height: "360px" }}
        />
      </IntroContent>
    </IntroContainer>
  );
}
