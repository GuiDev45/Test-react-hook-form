import { useState } from "react";
import "./index.css";

export default function SimpleForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError({ email: "", password: "" });

    if (!email.includes("@")) {
      setError({ ...error, email: "Email precisa do @" });
      setSuccess(false);
      return;
    }

    if (password.length < 8) {
      setError({
        ...error,
        password: "A senha deve ter pelo menos 8 caracteres",
      });
      setSuccess(false);
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="container-flex">
      <form className="container-flex-form" onSubmit={handleSubmit}>
        <h1>Formulário Simples</h1>
        <input
          type="text"
          placeholder="Email:"
          value={email}
          onChange={handleChangeEmail}
        />
        {error.email && <div className="error-message">{error.email}</div>}
        <input
          type="password"
          placeholder="Password:"
          value={password}
          onChange={handleChangePassword}
        />
        {error.password && (
          <div className="error-message">{error.password}</div>
        )}
        <button type="submit">Enviar</button>
        {success && (
          <div className="success-message">
            Parabéns! Login bem-sucedido! 🎉
          </div>
        )}
      </form>
    </div>
  );
}
