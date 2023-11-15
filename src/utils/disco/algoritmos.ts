export const discoFIFO = (datos: number[], pista: number) => {
  const recorrido: number[] = JSON.parse(JSON.stringify(datos));
  recorrido.unshift(pista)
  const newRecorrido = []
  for (let i = 1; i < recorrido.length; i++) {
    let nowPista = recorrido[i - 1] - recorrido[i] 
    if (nowPista < 0) {
      nowPista *= -1;
      newRecorrido.push(nowPista);
    } else {
      newRecorrido.push(nowPista);
    }
  }
  return newRecorrido
};
