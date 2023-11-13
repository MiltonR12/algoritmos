import { create } from "zustand";
import { Process } from "../types/interfaces";
import { generateTable } from "../utils/processFuntion";

type StateProcess = {
  process: Process[];
  tableProcess: number[][];
  addProcess: (process: Process) => void;
  updateTableProcess: (newTableProcess: number[][]) => void;
  deleteProcess: (id: number) => void;
};

export const useFifoState = create<StateProcess>((set) => ({
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
