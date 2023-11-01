import HeaderFifoTable from "../Header/HeaderFifoTable"
import LayoutTable from "../LayoutTable"
import TableFifo from "../TableFifo"
import FormProcess from "../FormProcess"
import { useProcessState } from "../../store/processState"
import { calculateSizeProcess } from "../../utils/processFuntion"
import DynamicBox from "../DynamicBox"

function PanelFifo() {

  const { process, tableProcess } = useProcessState()

  const tamañoTable = calculateSizeProcess(process) + 1

  return (
    <div className="mx-auto container" >
      <table className="table-auto" >
        <HeaderFifoTable />
        <TableFifo arrayProcess={process} />
      </table>
      <FormProcess />
      <LayoutTable numColumns={tamañoTable} numRows={process.length} >
        <div className="flex flex-col-reverse" >
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
    </div >
  )
}

export default PanelFifo