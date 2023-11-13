export interface Process {
  id: number;
  nameProcess: string;
  startProcess: number;
  executionTime: number;
  waitTime: number;
  finishTime: number;
  colorCamp: string;
  fullTime: number;
  index: number;
}

export interface ProcessPri extends Process {
  priority: number
}