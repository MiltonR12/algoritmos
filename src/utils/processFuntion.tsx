import { Process } from "../types/interfaces";

export const updateProcessTable = (process: Process[]) => {
  const tableSize = calculateSizeProcess(process) + 1
  let totalProcess = 0;
  const newTable: number[][] = process.map((item, index) => {
    if (index === 0) {
      totalProcess = item.executionTime + item.startProcess 
      item.finishTime = totalProcess
    } else {
      totalProcess += item.executionTime
      item.finishTime = totalProcess 
    }
    const startExecute = totalProcess - item.executionTime - 1
    item.fullTime = totalProcess - item.startProcess
    item.waitTime = startExecute - item.startProcess + 1
    const rowProcess: number[] = Array.from({ length: tableSize })
    for (let i = 0; i < rowProcess.length - 1; i++) {
      if (item.startProcess === i) {
        rowProcess[i + 1] = 1
      } else if (startExecute < i && totalProcess > i) {
        rowProcess[i + 1] = 0
      } else {
        rowProcess[i + 1] = -1
      }
    }
    return rowProcess
  })
  return newTable
}

export const orderByStartProcess = (oldProcess: Process[], newProcess: Process) => {
  const auxProcess = [...oldProcess, newProcess]
  return auxProcess.sort((a, b) => a.startProcess - b.startProcess)
}

export const calculateSizeProcess = (process: Process[]) => {
  if (process.length === 0) {
    return 0
  }
  return process.reduce((acc, item) => acc + item.executionTime, 0) + process[0].startProcess
}