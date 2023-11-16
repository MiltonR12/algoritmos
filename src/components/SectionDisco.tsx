import { discoFIFO } from "../utils/disco/algoritmos";
import TableDisc from "./TableDisc";
import { useState } from "react";
import PrimaryButton from "./button/PrimaryButton";
import Title from "./Title";

type FIFO = {
  pistas: number[];
  initPista: number;
  table: number[][];
};

function SectionDisco() {
  const [discFIFO, setDiscFIFO] = useState<FIFO>({
    initPista: 0,
    pistas: [],
    table: [],
  });

  const handleGenerateFIFO = () => {
    const nro = 10;
    const pistas: number[] = [];
    for (let i = 0; i < nro; i++) {
      pistas.push(Math.floor(Math.random() * 99) + 1);
    }
    const initPista = Math.floor(Math.random() * 99) + 1;
    const table = discoFIFO(pistas, initPista);
    setDiscFIFO({
      initPista,
      pistas,
      table,
    });
  };

  return (
    <section className="flex flex-col gap-6 mx-auto container">
      <div className="bg-slate-950 p-5">
        <Title>Algotirmo de Disco FIFO</Title>
        <PrimaryButton onClick={handleGenerateFIFO}>
          Generar Datos Automaticamente
        </PrimaryButton>
        <TableDisc table={discFIFO.table} />
      </div>
    </section>
  );
}

export default SectionDisco;
