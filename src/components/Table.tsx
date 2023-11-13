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

  return (
    <tbody>
      {process.map((item, index) => {
        return (
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
        )
      })}
    </tbody>
  );
}

export default Table;
