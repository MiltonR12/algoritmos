import { Process, ProcessPri } from "../types/interfaces";
import { processWord, randomColor } from "./disaing";
import {
  discoFIFO,
  generateMatrizCSCAN,
  generateMatrizSCAN,
  generateMatrizSSTF,
} from "./disco/algoritmos";

const defaultProcess = (execution: number, start: number, i: number) => {
  return {
    executionTime: execution,
    startProcess: start,
    colorCamp: randomColor(),
    id: Math.floor(Math.random() * 100000),
    waitTime: 0,
    finishTime: 0,
    fullTime: 0,
    index: 0,
    nameProcess: processWord[i],
  };
};

export const generateDataFifo = (nro: number) => {
  const data: Process[] = [];
  for (let i = 0; i < nro; i++) {
    const start = Math.floor(Math.random() * 10);
    const execution = Math.floor(start + Math.random() * (10 - start));
    data.push(defaultProcess(execution, start, i));
  }
  return data;
};

export const generateDataJSF = (nro: number) => {
  const data: Process[] = [];
  for (let i = 0; i < nro; i++) {
    const start = Math.floor(Math.random() * 10);
    const execution = Math.floor(start + Math.random() * (7 - start));
    data.push(defaultProcess(execution, start, i));
  }
  return data;
};

export const generateDataPriority = (nro: number) => {
  const data: ProcessPri[] = [];
  for (let i = 0; i < nro; i++) {
    const start = Math.floor(Math.random() * 10);
    const execution = Math.floor(start + Math.random() * (7 - start));
    const priority = Math.floor(Math.random() * 4) + 1;
    const elem = defaultProcess(execution, start, i);
    data.push({ ...elem, priority });
  }
  return data;
};

export const generateDataPaginacion = (nroMarcos: number, nroPages: number) => {
  const pages = [];
  for (let i = 0; i < nroPages; i++) {
    pages.push(Math.floor(Math.random() * 8) + 1);
  }
  return { pages, marcos: nroMarcos };
};

export const genericDataDisc = (
  tipo: "FIFO" | "SSTF" | "SCAN" | "CSCAN",
  nro: number = 10,
  format?: "growing" | "decreasing"
) => {
  const newFormat = format ?? "growing";

  const pistas = Array.from(
    { length: nro },
    () => Math.floor(Math.random() * 300) + 1
  );

  const initPista = Math.floor(Math.random() * 99) + 1;

  const table =
    tipo === "FIFO"
      ? discoFIFO(pistas, initPista)
      : tipo === "SSTF"
      ? generateMatrizSSTF(pistas, initPista)
      : tipo === "SCAN"
      ? generateMatrizSCAN(pistas, initPista, newFormat)
      : generateMatrizCSCAN(pistas, initPista, newFormat);

  return { pistas, initPista, table };
};
