import { useState } from "react";
import "./index.css"; // Importe seu arquivo CSS aqui

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log("Submissão feita corretamente");
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
        <input
          type="password"
          placeholder="Password:"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
