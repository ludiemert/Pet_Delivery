import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
            <Input
        placeholder="NAME"
        className="name"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Street"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />

      <Input
        placeholder="Number"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />

      <Input
        placeholder="Complement"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Optionally"
      />
      <Input
        placeholder="District"
        {...register("district")}
        error={errors.district?.message}
      />

      <Input
        placeholder="City"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register("uf")} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}
