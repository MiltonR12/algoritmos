import { Process, ProcessPri } from "../types/interfaces";
import { processWord, randomColor } from "./disaing";

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
    const priority = Math.floor(Math.random() * 5);
    const elem = defaultProcess(execution, start, i);
    data.push({ ...elem, priority });
  }
  return data;
};
