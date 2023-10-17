import { ReactNode } from "react";

import { InfoWithContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (

    <InfoWithContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithContainer>

  );
}