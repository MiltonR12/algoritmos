import { useFifoState } from "../store/stateFifo";
import { usePriorityState } from "../store/statePriority";
import { useJSFstate } from "../store/stateSJF";
import { generateDataFifo, generateDataJSF, generateDataPriority } from "../utils/generate";
import { generateTable, orderByExecute, orderByStartProcess, sortByPriority } from "../utils/processFuntion";
import Title from "./Title";
import PrimaryButton from "./button/PrimaryButton";
import PanelProcesador from "./panel/PanelProcesador";

function SectionProcesador() {
  const { process, tableProcess, addProcess, updateTableProcess } =
    useFifoState();

  const { process: processSJF, tableProcess: tableSJF, addProcess: addSJF, updateTableProcess: updateTableSJF } = useJSFstate()

  const { process: processPriority, tableProcess: tablePriority, updateTableProcess: updateTablePriority, addProcess: addPriority } = usePriorityState()

  const handleGenerateDate = () => {
    const processTest = generateDataFifo(4);
    const ordenado = orderByStartProcess([...processTest, ...process]);
    ordenado.forEach((elem) => {
      addProcess(elem);
    });
    const newTable = generateTable(ordenado);
    updateTableProcess(newTable);
  };

  const handleGenerateSJF = () => {
    const processTest = generateDataJSF(4);
    const ordenado = orderByExecute([...processTest, ...process]);
    ordenado.forEach((elem) => {
      addSJF(elem);
    });
    const newTable = generateTable(ordenado);
    updateTableSJF(newTable);
  }

  const handleGeneratePriority = () => {
    const processTest = generateDataPriority(5)
    const ordenado = sortByPriority(processTest)
    ordenado.forEach((elem) => {
      addPriority(elem);
    });
    const newTable = generateTable(ordenado);
    updateTablePriority(newTable);
  }

  return (
    <section className="flex flex-col gap-5 my-5" >
      <PanelProcesador
        isPriority={false}
        process={process}
        matriz={tableProcess}
      >
        <Title>First Input First Output</Title>
        <PrimaryButton onClick={handleGenerateDate}>
          Generar Datos automaticamente
        </PrimaryButton>
      </PanelProcesador>
      <PanelProcesador
        isPriority={false}
        process={processSJF}
        matriz={tableSJF}
      >
        <Title>SJF</Title>
        <PrimaryButton onClick={handleGenerateSJF} >
          Generar Datos aotomaticamente
        </PrimaryButton>
      </PanelProcesador>
      <PanelProcesador
        isPriority={true}
        process={processPriority}
        matriz={tablePriority}
      >
        <Title>Algoritmo de Prioridad</Title>
        <PrimaryButton onClick={handleGeneratePriority} >
          Generar Datos aotomaticamente
        </PrimaryButton>
      </PanelProcesador>
    </section>
  );
}

export default SectionProcesador;
