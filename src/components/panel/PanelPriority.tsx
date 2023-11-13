import { usePriorityState } from '../../store/statePriority'
import { calculateSizeProcess, generateTable, sortByPriority } from '../../utils/processFuntion'
import { generateDataPriority } from '../../utils/generate'
import HeaderFifoTable from '../Header/HeaderFifoTable'
import Title from '../Title'
import Form from '../form/FormFifo'
import LayoutTable from '../LayoutTable'
import DynamicBox from '../DynamicBox'
import Table from '../Table'

function PanelPriority() {
  const { process, tableProcess, addProcess, updateTableProcess } = usePriorityState()

  const tamañoTable = calculateSizeProcess(process) + 1

  const handleGenerateDate = () => {
    const processTest = generateDataPriority(5)
    const ordenado = sortByPriority([...processTest, ...process])
    ordenado.forEach(elem => {
      addProcess(elem)
    });
    const newTable = generateTable(ordenado)
    updateTableProcess(newTable)
  }

  return (
    <div className="mx-auto container my-5" >
      <Title>First Input First Output Priority</Title>
      <table className="table-auto mx-auto" >
        <HeaderFifoTable isPriority={true} />
        <Table process={process} />
      </table>
      <Form />
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

export default PanelPriority