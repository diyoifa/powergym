export const convertirFechaHora = (createdAt) => {
    const fechaHora = new Date(createdAt);
    const opciones = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return fechaHora.toLocaleString(undefined, opciones);
  }