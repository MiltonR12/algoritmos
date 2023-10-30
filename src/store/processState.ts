import { create } from "zustand";
import { Process } from "../types/interfaces";
import { updateProcessTable } from "../utils/processFuntion";

type StateProcess = {
  process: Process[];
  tableProcess: number[][];
  addProcess: (process: Process) => void;
  updateTableProcess: (newTableProcess: number[][]) => void;
  deleteProcess: (id: number) => void;
};

export const useProcessState = create<StateProcess>((set) => ({
  process: [],
  tableProcess: [],
  addProcess: (newProcess) =>
    set((state) => {
      const auxProcess = [...state.process, newProcess];
      const processOrder = auxProcess.sort(
        (a, b) => a.startProcess - b.startProcess
      );
      return {
        process: processOrder,
      };
    }),
  updateTableProcess: (newTableProcess) =>
    set(() => ({
      tableProcess: [...newTableProcess],
    })),
  deleteProcess: (id) =>
    set((state) => {
      const newProcess = state.process.filter((item) => item.id != id);
      const newTableProcess = updateProcessTable(newProcess);
      return {
        process: newProcess,
        tableProcess: newTableProcess,
      };
    }),
}));
