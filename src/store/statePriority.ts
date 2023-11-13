import { create } from "zustand";
import { ProcessPri } from "../types/interfaces";
import { generateTable } from "../utils/processFuntion";

type StateProcess = {
  process: ProcessPri[];
  tableProcess: number[][];
  addProcess: (process: ProcessPri) => void;
  updateTableProcess: (newTableProcess: number[][]) => void;
  deleteProcess: (id: number) => void;
};

export const usePriorityState = create<StateProcess>((set) => ({
  process: [],
  tableProcess: [],
  addProcess: (newProcess) =>
    set((state) => ({ process: [...state.process, newProcess] })),
  updateTableProcess: (newTableProcess) =>
    set(() => ({
      tableProcess: newTableProcess,
    })),
  deleteProcess: (id) =>
    set((state) => {
      const newProcess = state.process.filter((item) => item.id != id);
      const newTableProcess = generateTable(newProcess);
      return {
        process: newProcess,
        tableProcess: newTableProcess,
      };
    }),
}));
