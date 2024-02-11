import { SubmitHandler, useForm } from "react-hook-form";
import "./index.css";

type FormFields = {
  email: string;
  password: string;
};

export default function RHFform() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "teste@valorPadrao.com",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <div className="container-flex" onSubmit={handleSubmit(onSubmit)}>
      <form className="container-flex-form">
        <h1>Formulário RHF</h1>
        <input {...register("email")} type="text" placeholder="Email:" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password:"
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
