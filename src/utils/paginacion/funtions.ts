const generateMatriz = (pageSize: number, marco: number) => {
  const matriz: number[][] = new Array(marco);
  for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(pageSize).fill(0);
  }
  return matriz;
};

export const paginacionFIFO = (paginas: number[], marco: number) => {
  const pageSize = paginas.length;
  const fallos: boolean[] = new Array(pageSize).fill(false);
  const matriz = generateMatriz(pageSize, marco);

  matriz[0][0] = paginas[0];

  const contadores: number[] = new Array(marco).fill(1);
  for (let i = 1; i < pageSize; i++) {
    let exist = false;
    let isEmpty = false;
    let positionEmpty = 0;

    for (let j = 0; j < marco; j++) {
      matriz[j][i] = matriz[j][i - 1];

      // cuenta los anteriores iguales al actual
      if (matriz[j][i] === matriz[j][i - 1] && matriz[j][i] != 0) {
        contadores[j]++;
      }

      // busca si hay un esapcio vacio
      if (matriz[j][i] === 0 && !isEmpty) {
        isEmpty = true;
        positionEmpty = j;
      }

      // compara el elementento actual con el anterior
      if (matriz[j][i] === paginas[i]) exist = true;
    }

    // llena el espacio vacio
    if (!exist && isEmpty) {
      matriz[positionEmpty][i] = paginas[i];
    }

    if (!exist && !isEmpty) {
      let max = 0;
      let position = 0;
      for (let j = 0; j < marco; j++) {
        if (max <= contadores[j]) {
          max = contadores[j];
          position = j;
        }
      }
      contadores[position] = 1;
      matriz[position][i] = paginas[i];
    }

    fallos[i] = matriz.every((fila) => fila[i] === fila[i - 1]);
  }

  return { matriz, fallos };
};

export const paginacionOptimo = (paginas: number[], marco: number) => {
  const pageSize = paginas.length;
  const fallos: boolean[] = new Array(pageSize).fill(false);
  const matriz = generateMatriz(pageSize, marco);

  matriz[0][0] = paginas[0];

  for (let i = 1; i < pageSize; i++) {
    let exist = false;
    let isEmpty = false;
    let positionEmpty = 0;

    for (let j = 0; j < marco; j++) {
      matriz[j][i] = matriz[j][i - 1];

      // busca si hay un esapcio vacio
      if (matriz[j][i] === 0 && !isEmpty) {
        isEmpty = true;
        positionEmpty = j;
      }

      // compara el elementento actual con el anterior
      if (matriz[j][i] === paginas[i]) exist = true;
    }

    // llena el espacio vacio
    if (!exist && isEmpty) matriz[positionEmpty][i] = paginas[i];

    if (!exist && !isEmpty) {
      let farthest = 0;
      let position = 0;
      let bandera = false;
      for (let j = 0; j < marco; j++) {
        const indice = paginas.indexOf(matriz[j][i], i);
        if (indice === -1) {
          position = j;
          bandera = true;
        } else if (indice <= farthest && !bandera) {
          farthest = indice;
          position = j;
        }
      }
      matriz[position][i] = paginas[i];
    }

    fallos[i] = matriz.every((fila) => fila[i] === fila[i - 1]);
  }

  return { matriz, fallos };
};

export const paginacionLRU = (paginas: number[], marco: number) => {
  const pageSize = paginas.length;
  const fallos: boolean[] = new Array(pageSize).fill(false);
  const matriz = generateMatriz(pageSize, marco);

  matriz[0][0] = paginas[0];

  const historial: number[] = [];
  historial.push(paginas[0]);

  for (let i = 1; i < pageSize; i++) {
    let exist = false;
    let isEmpty = false;
    let positionEmpty = 0;

    for (let j = 0; j < marco; j++) {
      matriz[j][i] = matriz[j][i - 1];

      // busca si hay un espacio vacío
      if (matriz[j][i] === 0 && !isEmpty) {
        isEmpty = true;
        positionEmpty = j;
      }

      // compara el elemento actual con el anterior
      if (matriz[j][i] === paginas[i]) {
        exist = true;
        // Actualiza el historial para reflejar el uso más reciente
        historial.splice(historial.indexOf(paginas[i]), 1);
        historial.push(paginas[i]);
      }
    }

    // llena el espacio vacío
    if (!exist && isEmpty) {
      matriz[positionEmpty][i] = paginas[i];
      historial.push(paginas[i]);
    }

    if (!exist && !isEmpty) {
      // Encuentra la página menos recientemente usada
      const leastRecent = historial[0];
      const position = matriz[0].indexOf(leastRecent);
      matriz[position][i] = paginas[i];

      // Actualiza el historial para reflejar el uso más reciente
      historial.shift();
      historial.push(paginas[i]);
    }

    fallos[i] = matriz.every((fila) => fila[i] === fila[i - 1]);
  }

  return { matriz, fallos };
};
