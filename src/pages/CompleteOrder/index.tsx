import { CompleteOrderContainer } from "./styles";
import { CompleteOrderForm } from "./components/CompleteOrderform";
import { SelectedPets } from "./components/SelectedPets";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum paymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  name: zod.string().min(1, "Inform the Name"),
  cep: zod.string().min(1, "Inform the CEP"),
  street: zod.string().min(1, "Inform the Street"),
  number: zod.string().min(1, "Inform the Number"),
  //complement not required
  complement: zod.string(),
  district: zod.string().min(1, "Inform the District"),
  city: zod.string().min(1, "Inform the City"),
  uf: zod.string().min(1, "Inform the UF"),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: "Inform the payment method" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
   // console.log(data);
   navigate("/orderConfirmed", {
    state: data,
   });
   cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedPets />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
