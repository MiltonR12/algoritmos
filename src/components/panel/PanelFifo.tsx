import HeaderFifoTable from "../Header/HeaderFifoTable"
import LayoutTable from "../LayoutTable"
import { calculateSizeProcess, generateTable, orderByStartProcess } from "../../utils/processFuntion"
import DynamicBox from "../DynamicBox"
import FormFifo from "../form/FormFifo"
import { useFifoState } from '../../store/stateFifo'
import Title from "../Title"
import { generateDataFifo } from "../../utils/generate"
import Table from "../Table"

function PanelFifo() {

  const { process, tableProcess, addProcess, updateTableProcess } = useFifoState()

  const tamañoTable = calculateSizeProcess(process) + 1

  const handleGenerateDate = () => {
    const processTest = generateDataFifo(4)
    const ordenado = orderByStartProcess([...processTest, ...process])
    ordenado.forEach(elem => {
      addProcess(elem)
    });
    const newTable = generateTable(ordenado)
    updateTableProcess(newTable)
  }

  return (
    <div className="mx-auto container my-5" >
      <Title>First Input First Output</Title>
      <table className="table-auto mx-auto" >
        <HeaderFifoTable />
        <Table process={process} />
      </table>
      <FormFifo />
      <button onClick={handleGenerateDate} >
        Generar Automaticamente
      </button>
      <LayoutTable numColumns={tamañoTable} numRows={process.length} process={process} >
        <div>
          {
            tableProcess.map((item, index) => (
              <div key={index} className="flex" >
                {
                  item.map((item2, index2) => (
                    <DynamicBox key={index2} item2={item2} />
                  ))
                }
              </div>
            ))
          }
        </div>
      </LayoutTable>
    </div>
  )
}

export default PanelFifo