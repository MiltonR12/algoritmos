import { useRef } from "react";
import { Formik } from "formik";
import InputCustom from "../InputCustom";
// import { useFifoState } from "../../store/stateFifo";
import { Process } from "../../types/interfaces";
import { randomColor, processWord } from "../../utils/disaing";
import {
  generateTable, orderByExecute,
} from "../../utils/processFuntion";
// import { orderByStartProcess } from "../../utils/processFuntion";
import PrimaryButton from "../button/PrimaryButton";
import SecondButton from "../button/SecondButton";
import { useJSFstate } from "../../store/stateSJF";

function Form() {

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { addProcess, process, updateTableProcess } = useJSFstate();

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <dialog ref={dialogRef} className="p-5 rounded-lg bg-zinc-900">
        <Formik
          initialValues={{
            startProcess: 0,
            executionTime: 0,
          }}
          onSubmit={(data) => {
            const newProcess: Process = {
              ...data,
              colorCamp: randomColor(),
              id: process.length,
              waitTime: 0,
              finishTime: 0,
              fullTime: 0,
              index: 0,
              nameProcess: processWord[process.length]
            };
            addProcess(newProcess);
            const auxOrder = orderByExecute([...process, newProcess]);
            const newTable = generateTable(auxOrder);
            updateTableProcess(newTable);
            dialogRef.current?.close();
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <h3 className="text-center text-white text-2xl">
                  Formulario de Procesos
                </h3>
                <InputCustom
                  title="Tiempo de inicio"
                  name="startProcess"
                  type="number"
                />
                <InputCustom
                  title="Tiempo de ejecucion"
                  name="executionTime"
                  type="number"
                />
                <div className="flex gap-3 justify-around">
                  <SecondButton type="button" onClick={handleCloseDialog} >
                    Cancelar
                  </SecondButton>
                  <PrimaryButton type="submit" >
                    Agregar
                  </PrimaryButton>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </dialog>
      <button
        className="py-2 px-4 rounded-lg my-5 bg-blue-700"
        onClick={handleOpenDialog}
      >
        Agregar Proceso
      </button>
    </>
  )
}

export default Form