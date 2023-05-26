export const convertirFechaHora = (createdAt) => {
    const fechaHora = new Date(createdAt);
    const opciones = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
    };
    return fechaHora.toLocaleString(undefined, opciones);
  };