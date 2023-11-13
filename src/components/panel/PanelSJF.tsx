import { useJSFstate } from "../../store/stateSJF"
import { generateDataJSF } from "../../utils/generate"
import { calculateSizeProcess, generateTable, orderByExecute } from "../../utils/processFuntion"
import DynamicBox from "../DynamicBox"
import HeaderFifoTable from "../Header/HeaderFifoTable"
import LayoutTable from "../LayoutTable"
import Table from "../Table"
import Title from "../Title"
import FormFifo from "../form/FormFifo"

function PanelSJF() {
  const { process, tableProcess, addProcess, updateTableProcess } = useJSFstate()

  const tamañoTable = calculateSizeProcess(process) + 1

  const handleGenerateDate = () => {
    const processTest = generateDataJSF(5)
    const ordenado = orderByExecute([...processTest, ...process])
    const newTable = generateTable(ordenado)
    ordenado.forEach(elem => {
      addProcess(elem)
    });
    updateTableProcess(newTable)
  }

  return (
    <div className="mx-auto container my-5" >
      <Title>SJF</Title>
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

export default PanelSJF