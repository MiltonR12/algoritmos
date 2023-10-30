import { useRef } from 'react'
import { Formik } from 'formik'
import InputCustom from './InputCustom'
import { useProcessState } from '../store/processState'
import { Process } from '../types/interfaces'
import { randomColor } from '../utils/disaing'
import { updateProcessTable } from '../utils/processFuntion'

function FormProcess() {

  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const { addProcess, process, updateTableProcess } = useProcessState()

  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal()
    }
  }

  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  return (
    <>
      <dialog ref={dialogRef} className='p-5 rounded-lg bg-zinc-900' >
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
              fullTime: 0
            }
            addProcess(newProcess)
            const newTable = updateProcessTable([...process, newProcess])
            updateTableProcess(newTable)
            dialogRef.current?.close()
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} >
              <div className='flex flex-col gap-3' >
                <h3 className='text-center text-white text-2xl' >
                  Formulario de Procesos
                </h3>
                <InputCustom
                  title='Tiempo de inicio'
                  name='startProcess'
                  type='number' />
                <InputCustom
                  title='Tiempo de ejecucion'
                  name='executionTime'
                  type='number' />
                <div className='flex gap-3 justify-around' >
                  <button
                    className='bg-zinc-800 text-white py-2 px-4 rounded-lg'
                    type='button' onClick={handleCloseDialog} >
                    Cancelar
                  </button>
                  <button
                    type='submit'
                    className='bg-blue-700 text-white py-2 px-4 rounded-lg' >
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </dialog>
      <button onClick={handleOpenDialog} >
        Agregar Proceso
      </button>
    </>
  )
}

export default FormProcess