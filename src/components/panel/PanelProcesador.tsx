import { Process } from "../../types/interfaces";
import { calculateSizeProcess } from "../../utils/processFuntion";
import DynamicBox from "../DynamicBox";
import HeaderFifoTable from "../Header/HeaderFifoTable";
import LayoutTable from "../LayoutTable";
import Table from "../Table";
import Form from "../form/FormFifo";

interface ProcessComplet extends Process {
  priority?: number;
}

type Props = {
  children: React.ReactNode;
  isPriority: boolean;
  process: ProcessComplet[];
  matriz: number[][];
};

function PanelProcesador({ children, isPriority, process, matriz }: Props) {
  const tamañoTable = calculateSizeProcess(process) + 1;

  return (
    <div className="mx-auto container p-5 bg-slate-950">
      {children}
      <table className="table-auto mx-auto">
        <HeaderFifoTable isPriority={isPriority} />
        <Table process={process} />
      </table>
      <Form />
      <LayoutTable
        numColumns={tamañoTable}
        numRows={process.length}
        process={process}
      >
        <div>
          {matriz.map((item, index) => (
            <div key={index} className="flex">
              {item.map((item2, index2) => (
                <DynamicBox key={index2} item2={item2} />
              ))}
            </div>
          ))}
        </div>
      </LayoutTable>
    </div>
  );
}

export default PanelProcesador;
