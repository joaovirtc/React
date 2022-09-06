export function Props() {
  const headerProps = {
    title: "Bem Vindo !",
    subtitle: "Olá",
    number: 90,
  };

  return (
    <div>
      <h1>{headerProps.title}</h1>
      <p>{headerProps.subtitle}</p>
      <p>{headerProps.number}</p>
    </div>
  );
}
