import { Process } from '../types/interfaces'
import { AiFillDelete } from 'react-icons/ai'
import { HiPencilAlt } from 'react-icons/hi'
import { useProcessState } from '../store/processState'

function TableFifo({ arrayProcess }: { arrayProcess: Process[] }) {

  const { deleteProcess } = useProcessState()

  const handleDeleteProcess = (id: number) => {
    deleteProcess(id)
  }

  return (
    <tbody>
      {
        arrayProcess.map((item, index) => (
          <tr key={index} className="bg-blue-50 odd:bg-blue-100 text-black" >
            <td className="p-2 bg-blue-700 text-white" >
              {"Proceso: " + (index + 1)}
            </td>
            <td className="p-2 border border-blue-400" >
              {item.startProcess}
            </td>
            <td className="p-2 border border-blue-400" >
              {item.executionTime}
            </td>
            <td className="p-2 border border-blue-400" >
              {item.fullTime}
            </td>
            <td className="p-2 border border-blue-400" >
              {item.finishTime}
            </td>
            <td>
              {item.waitTime}
            </td>
            <td className='grid grid-cols-2 p-2 h-full items-center justify-center' >
              <div className='flex justify-center items-center' >
                <button>
                  <HiPencilAlt />
                </button>
              </div>
              <div className='flex justify-center items-center' >
                <button
                  onClick={() => handleDeleteProcess(item.id)}
                  className='text-red-600 text-xl' >
                  <AiFillDelete />
                </button>
              </div>
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default TableFifo