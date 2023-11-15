import { useFifoState } from "../store/stateFifo";
import { useJSFstate } from "../store/stateSJF";
import { generateDataFifo, generateDataJSF } from "../utils/generate";
import { generateTable, orderByExecute, orderByStartProcess } from "../utils/processFuntion";
import Title from "./Title";
import PrimaryButton from "./button/PrimaryButton";
import PanelProcesador from "./panel/PanelProcesador";

function SectionProcesador() {
  const { process, tableProcess, addProcess, updateTableProcess } =
    useFifoState();

  const { process: processSJF, tableProcess: tableSJF, addProcess: addSJF, updateTableProcess: updateTableSJF } = useJSFstate()

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
    </section>
  );
}

export default SectionProcesador;
