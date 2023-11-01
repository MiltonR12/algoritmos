import { create } from "zustand";
import { Process } from "../types/interfaces";
import {
  orderByStartProcess,
  updateProcessTable,
} from "../utils/processFuntion";

type StateProcess = {
  process: Process[];
  tableProcess: number[][];
  orderPriority: boolean;
  addProcess: (process: Process) => void;
  updateTableProcess: (newTableProcess: number[][]) => void;
  deleteProcess: (id: number) => void;
  setOrderPriority: () => void;
};

export const useProcessState = create<StateProcess>((set, get) => ({
  process: [],
  tableProcess: [],
  orderPriority: true,
  addProcess: (newProcess) =>
    set((state) => ({ process: [...state.process, newProcess] })),
  updateTableProcess: (newTableProcess) =>
    set(() => ({
      tableProcess: newTableProcess,
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
  setOrderPriority: () =>
    set((state) => {
      console.log("sandia");
      return { orderPriority: !get().orderPriority };
    }),
}));
