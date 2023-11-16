export const discoFIFO = (datos: number[], pista: number) => {
  const recorrido: number[] = JSON.parse(JSON.stringify(datos));
  recorrido.unshift(pista);
  const newRecorrido = [];
  for (let i = 1; i < recorrido.length; i++) {
    let nowPista = recorrido[i - 1] - recorrido[i];
    if (nowPista < 0) {
      nowPista *= -1;
      newRecorrido.push([recorrido[i - 1], recorrido[i], nowPista]);
    } else {
      newRecorrido.push([recorrido[i - 1], recorrido[i], nowPista]);
    }
  }
  return newRecorrido;
};

export const generateMatrizSSTF = (datos: number[], pista: number) => {
  const newDatos: number[] = JSON.parse(JSON.stringify(datos));
  newDatos.push(pista);
  const sortDatos = newDatos.sort((a, b) => a - b);
};
