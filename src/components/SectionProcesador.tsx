import { useFifoState } from "../store/stateFifo";
import { generateDataFifo } from "../utils/generate";
import { generateTable, orderByStartProcess } from "../utils/processFuntion";
import Title from "./Title";
import PrimaryButton from "./button/PrimaryButton";
import PanelProcesador from "./panel/PanelProcesador";

function SectionProcesador() {
  const { process, tableProcess, addProcess, updateTableProcess } =
    useFifoState();

  const handleGenerateDate = () => {
    const processTest = generateDataFifo(4);
    const ordenado = orderByStartProcess([...processTest, ...process]);
    ordenado.forEach((elem) => {
      addProcess(elem);
    });
    const newTable = generateTable(ordenado);
    updateTableProcess(newTable);
  };

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
    </section>
  );
}

export default SectionProcesador;
