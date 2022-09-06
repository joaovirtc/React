export function Events() {
  function event(e) {
    e.preventDefault();
    window.alert("Dados Eviados ! "); // Para não enviar os dados
  }

  return (
    <div>
      <form onSubmit={event}>
        <p>Cadastre seus dados </p>
        <label>Nome</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
