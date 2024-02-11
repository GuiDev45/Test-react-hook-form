import "./index.css";

export default function RHFform() {
  return (
    <div className="container-flex">
      <form className="container-flex-form">
        <h1>Formulário RHF</h1>
        <input type="text" placeholder="Email:" />
        <input type="password" placeholder="Password:" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
