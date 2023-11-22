import { Process, ProcessPri } from "../types/interfaces";

export const generateTable = (process: Process[]) => {
  const tableSize = calculateSizeProcess(process) + 1;
  let totalProcess = 0;
  const newTable: number[][] = process.map((item) => {
    if (item.startProcess >= totalProcess) {
      totalProcess = item.executionTime + item.startProcess;
      item.finishTime = totalProcess;
    } else {
      totalProcess += item.executionTime;
      item.finishTime = totalProcess;
    }
    const startExecute = totalProcess - item.executionTime - 1;
    item.fullTime = totalProcess - item.startProcess;
    item.waitTime = startExecute - item.startProcess + 1;
    item.index = parseFloat((item.executionTime / item.fullTime).toFixed(2))
    const rowProcess: number[] = Array.from({ length: tableSize });
    for (let i = 0; i < rowProcess.length - 1; i++) {
      if (item.startProcess === i) {
        rowProcess[i + 1] = 1;
      } else if (startExecute < i && totalProcess > i) {
        rowProcess[i + 1] = 0;
      } else {
        rowProcess[i + 1] = -1;
      }
    }
    return rowProcess;
  });
  return newTable;
};

export const orderByStartProcess = (process: Process[]) => {
  return process.sort((a, b) => {
    if (a.startProcess === b.startProcess) {
      return a.executionTime - b.executionTime;
    }
    return a.startProcess - b.startProcess;
  });
};

const sortExecution = (process: Process[]) => {
  return process.sort((a, b) => {
    if (a.executionTime === b.executionTime) {
      return a.startProcess - b.startProcess
    }
    return a.executionTime - b.executionTime
  })
}

const sortPriority = (process: ProcessPri[]) => {
  return process.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.startProcess - b.startProcess
    }
    return a.priority - b.priority
  })
}

export const orderByExecute = (process: Process[]) => {
  let ordenado = orderByStartProcess(process)
  if (ordenado.every(item => item.startProcess === 0)) return ordenado
  const processSize = calculateSizeProcess(process)
  let processTotal = 0;
  const newProcess: Process[] = []
  let colaProcess: Process[] = []

  for (let i = 0; i < processSize; i++) {
    if (i >= processTotal) {
      const processMin = ordenado.filter((item) => item.startProcess <= i);
      ordenado = ordenado.filter((item) => item.startProcess > i);
      colaProcess.push(...processMin)
      colaProcess = sortExecution(colaProcess)
      if (colaProcess.length > 0) {
        const elem = colaProcess.shift() as Process
        processTotal = i + elem.executionTime
        newProcess.push(elem)
      }
    }
  }
  return newProcess
}

export const sortByPriority = (process: ProcessPri[]) => {
  let ordenado = orderByStartProcess(process) as ProcessPri[]
  if (ordenado.every(item => item.startProcess === 0)) return ordenado
  const processSize = calculateSizeProcess(process)
  let processTotal = 0;
  const newProcess: ProcessPri[] = []
  let colaProcess: ProcessPri[] = []

  for (let i = 0; i < processSize; i++) {
    if (i >= processTotal) {
      const processMin = ordenado.filter((item) => item.startProcess <= i);
      ordenado = ordenado.filter((item) => item.startProcess > i);
      colaProcess.push(...processMin)
      colaProcess = sortPriority(colaProcess)
      if (colaProcess.length > 0) {
        const elem = colaProcess.shift() as ProcessPri
        processTotal = i + elem.executionTime
        newProcess.push(elem)
      }
    }
  }
  return newProcess
}

export const calculateSizeProcess = (process: Process[]) => {
  if (process.length === 0) {
    return 0;
  }
  return (
    process.reduce((acc, item) => {
      if (item.startProcess >= acc) {
        return item.executionTime + item.startProcess;
      } else {
        return acc + item.executionTime;
      }
    }, 0)
  );
};
