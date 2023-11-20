export const discoFIFO = (datos: number[], pista: number) => {
  const recorrido: number[] = JSON.parse(JSON.stringify(datos));
  recorrido.unshift(pista);
  const newRecorrido = [];
  for (let i = 1; i < recorrido.length; i++) {
    const nowPista = Math.abs(recorrido[i - 1] - recorrido[i]);
    newRecorrido.push([recorrido[i - 1], recorrido[i], nowPista]);
  }
  return newRecorrido;
};

export const generateMatrizSSTF = (datos: number[], pista: number) => {
  const minDatos = datos.filter((item) => item <= pista).sort((a, b) => a - b);
  const maxDatos = datos.filter((item) => item > pista).sort((a, b) => b - a);
  const newDatos: number[] = [];
  const matriz = [];
  newDatos.push(pista);
  while (minDatos.length > 0 || maxDatos.length > 0) {
    const elem = newDatos.pop();
    if (elem) newDatos.push(elem);
    const num1 = minDatos.pop();
    const num2 = maxDatos.pop();
    if (num2 && num1 && elem) {
      const result1 = Math.abs(elem - num1);
      const result2 = Math.abs(elem - num2);
      newDatos.push(result1 < result2 ? num1 : num2);
      if (result1 < result2) {
        maxDatos.push(num2);
      } else {
        minDatos.push(num1);
      }
    } else if (num1 && elem && !num2) {
      newDatos.push(num1);
    } else if (num2 && elem && !num1) {
      newDatos.push(num2);
    }
  }

  for (let i = 1; i < newDatos.length; i++) {
    const nowPista = Math.abs(newDatos[i - 1] - newDatos[i]);
    matriz.push([newDatos[i - 1], newDatos[i], nowPista]);
  }
  return matriz;
};

export const generateMatrizSCAN = (
  datos: number[],
  pista: number,
  tipo: "growing" | "decreasing"
) => {
  const minPistas = datos.filter((item) => item <= pista).sort((a, b) => b - a);
  const maxPistas = datos.filter((item) => item > pista).sort((a, b) => a - b);
  const newDatos = [pista];
  if (tipo === "growing") {
    newDatos.push(...maxPistas, ...minPistas)
  } else {
    newDatos.push(...minPistas, ...maxPistas)
  }
  const matriz = [];
  for (let i = 1; i < newDatos.length; i++) {
    const newPista = Math.abs(newDatos[i - 1] - newDatos[i]);
    matriz.push([newDatos[i - 1], newDatos[i], newPista]);
  }
  return matriz;
};

export const generateMatrizCSCAN = (
  datos: number[],
  pista: number,
  tipo: "growing" | "decreasing"
) => {
  const maxPistas = datos.filter((item) => item > pista).sort((a, b) => a - b);
  const minPistas = datos.filter((item) => item <= pista).sort((a, b) => a - b);
  const newDatos = [pista];
  if (tipo === "growing") {
    newDatos.push(...maxPistas, ...minPistas);
  } else {
    newDatos.push(...minPistas, ...maxPistas);
  }
  const matriz = [];
  for (let i = 1; i < newDatos.length; i++) {
    const newPista = Math.abs(newDatos[i - 1] - newDatos[i]);
    matriz.push([newDatos[i - 1], newDatos[i], newPista]);
  }
  return matriz;
};
