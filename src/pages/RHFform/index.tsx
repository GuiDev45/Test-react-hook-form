import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./index.css";

const schema = z.object({
  email: z.string().email("Por favor, insira um endereço de e-mail válido."),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
});

type FormFields = z.infer<typeof schema>;

export default function RHFform() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "teste@valorPadrao.com",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="container-flex" onSubmit={handleSubmit(onSubmit)}>
      <form className="container-flex-form">
        <h1>Formulário RHF</h1>
        <input {...register("email")} type="text" placeholder="Email:" />
        {errors.email && (
          <div className="error-message">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password:"
        />
        {errors.password && (
          <div className="error-message">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
