import { Input } from "../../components/Input";
import {
  ButtonContainer,
  FormContainer,
  LoginContainer,
  LoginTitle,
} from "./styles";
import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <LoginTitle>Faça seu login na aplicação</LoginTitle>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <Input label="E-mail" type="email" name="email" register={register} />
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
        />
        <ButtonContainer>
          <button type="submit">Entrar</button>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
}
