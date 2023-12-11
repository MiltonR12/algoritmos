import { Process } from "../types/interfaces";
import { AiFillDelete } from "react-icons/ai";
import { useFifoState } from '../store/stateFifo'

interface ProcessComplet extends Process {
  priority?: number
}

function Table({ process }: { process: ProcessComplet[] }) {

  const { deleteProcess } = useFifoState();

  const handleDeleteProcess = (id: number) => {
    deleteProcess(id);
  };

  const divisor = process.length

  const promTimeStart = process.reduce((acc, elem) => acc + elem.startProcess, 0)
  const promTimeExecution = process.reduce((acc, elem) => acc + elem.executionTime, 0)
  const promTimeFull = process.reduce((acc, elem) => acc + elem.fullTime, 0)
  const promTimeFinish = process.reduce((acc, elem) => acc + elem.finishTime, 0)
  const promTimeWait = process.reduce((acc, elem) => acc + elem.waitTime, 0)
  const promTimeIndex = process.reduce((acc, elem) => acc + elem.index, 0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function propiedadExiste(array: any[], propiedad: string) {
    // eslint-disable-next-line no-prototype-builtins
    return array.some(objeto => objeto.hasOwnProperty(propiedad));
  }

  return (
    <tbody>
      {process.map((item, index) => (
        <tr key={index} className={`text-black font-semibold text-xl ${item.colorCamp}`} >
          <td className={`p-2 border`}>{item.nameProcess}</td>
          <td className="p-2 border">{item.startProcess}</td>
          <td className="p-2 border">{item.executionTime}</td>
          {item.priority && <td className="p-2 border">{item.priority}</td>}
          <td className="p-2 border">{item.fullTime}</td>
          <td className="p-2 border">{item.finishTime}</td>
          <td className="p-2 border" >{item.waitTime}</td>
          <td className="p-2 border" >{item.index}</td>
          <td className="grid grid-cols-2 p-2 h-full items-center justify-center">
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleDeleteProcess(item.id)}
                className="text-red-600 text-xl"
              >
                <AiFillDelete />
              </button>
            </div>
          </td>
        </tr>
      ))}
      {divisor !== 0 && <tr className={`text-black bg-zinc-200 font-semibold text-xl`} >
        <td className={`p-2 border`}>Promedio</td>
        <td className="p-2 border">
          {Math.round((promTimeStart / divisor))}
        </td>
        <td colSpan={propiedadExiste(process, "priority") ? 2 : 1} className="p-2 border">
          {Math.round((promTimeExecution / divisor))}
        </td>
        <td className="p-2 border">
          {Math.round((promTimeFull / divisor))}
        </td>
        <td className="p-2 border">
          {Math.round((promTimeFinish / divisor))}
        </td>
        <td className="p-2 border" >
          {Math.round((promTimeWait / divisor))}
        </td>
        <td colSpan={2} className="p-2 border" >
          {Math.round((promTimeIndex / divisor))}
        </td>
      </tr>}
    </tbody>
  );
}

export default Table;
