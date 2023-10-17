import { MapPinLine, CurrencyDollar, Dog } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

//export const FormSectionContainer = styled(SectionBaseStyle)`

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
      <Dog /> Finish your Order
        
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Delivery address"
          subtitle="Enter the address you want to receive your order"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />

        <AddressForm />
        
      </FormSectionContainer>


      <FormSectionContainer>
        <SectionTitle
          title="Payment"
          subtitle="Payment is made on delivery, choose your payment method."
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
        />  

        <PaymentMethodOptions />

      </FormSectionContainer>


    </CompleteOrderFormContainer>
  );
}
