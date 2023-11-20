import TableDisc from "./TableDisc";
import { useState } from "react";
import PrimaryButton from "./button/PrimaryButton";
import Title from "./Title";
import Grafico from "./Grafico";
import { genericDataDisc } from "../utils/generate";
import DiscInfo from "./DiscInfo";

type Camp = {
  pistas: number[];
  initPista: number;
  table: number[][];
};

const initCamp: Camp = {
  initPista: 0,
  pistas: [],
  table: [],
}

function SectionDisco() {
  const [discFIFO, setDiscFIFO] = useState<Camp>(initCamp);

  const [discSSTF, setDiscSSTF] = useState<Camp>(initCamp);

  const handleGenerateFIFO = () => {
    const { initPista, pistas, table } = genericDataDisc("FIFO")
    setDiscFIFO({ initPista, pistas, table, });
  };

  const handleGenerateSSTF = () => {
    const { initPista, pistas, table } = genericDataDisc("SSTF")
    setDiscSSTF({ initPista, pistas, table })
  }

  // console.log(generateMatrizSCAN([55, 58, 39, 18, 90, 160, 150, 38, 184], 100, "growing"))
  // console.log(generateMatrizCSCAN([55, 58, 39, 18, 90, 160, 150, 38, 184], 100, "growing"))

  return (
    <section className="flex flex-col gap-6 mx-auto container">
      <div className="bg-slate-950 p-5">
        <Title>Algotirmo de Disco FIFO</Title>
        <PrimaryButton onClick={handleGenerateFIFO}>
          Generar Datos Automaticamente
        </PrimaryButton>
        <DiscInfo initPista={discFIFO.initPista} pistas={discFIFO.pistas} />
        <TableDisc table={discFIFO.table} />
        <Grafico
          matriz={discFIFO.table}
          title="Grafico FIFO"
          labels={discFIFO.pistas.length} />
      </div>
      <div className="bg-slate-950 p-5">
        <Title>Algotirmo de Disco SSTF</Title>
        <PrimaryButton onClick={handleGenerateSSTF}>
          Generar Datos Automaticamente
        </PrimaryButton>
        <DiscInfo initPista={discSSTF.initPista} pistas={discSSTF.pistas} />
        <TableDisc table={discSSTF.table} />
        <Grafico
          matriz={discSSTF.table}
          title="Grafico SSTF"
          labels={discSSTF.pistas.length} />
      </div>
    </section>
  );
}

export default SectionDisco