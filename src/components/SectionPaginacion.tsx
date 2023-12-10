import { useState } from "react";
import PanelPaginacion from "./panel/PanelPaginacion";
import { generateDataPaginacion } from "../utils/generate";
import { paginacionFIFO, paginacionOptimo } from "../utils/paginacion/funtions";
import Title from "./Title";
import FormPaginacion from "./form/FormPaginacion";

type Data = {
  fallos: boolean[];
  matriz: number[][];
  pages: number[];
  marcos: number;
};

function SectionPaginacion() {
  const [fifo, setfifo] = useState<Data>({
    fallos: [],
    marcos: 0,
    matriz: [],
    pages: [],
  });

  const [optimo, setOptimo] = useState<Data>({
    fallos: [],
    marcos: 0,
    matriz: [],
    pages: [],
  });

  const handleGenerateFIFO = (nroMarcos: number, nroPages: number) => {
    const { marcos, pages } = generateDataPaginacion(nroMarcos, nroPages);
    const { matriz, fallos } = paginacionFIFO(pages, marcos);
    setfifo({ pages, marcos, matriz, fallos });
  };

  const handleGenerateOptimo = (nroMarcos: number, nroPages: number) => {
    const { marcos, pages } = generateDataPaginacion(nroMarcos, nroPages);
    const { matriz, fallos } = paginacionOptimo(pages, marcos);
    setOptimo({ pages, marcos, matriz, fallos });
  };

  return (
    <section className="flex flex-col gap-6 mb-5">
      <PanelPaginacion
        fallos={fifo.fallos}
        matriz={fifo.matriz}
        pages={fifo.pages}
      >
        <Title>Algoritmo de paginacion FIFO</Title>
        <FormPaginacion handleAction={handleGenerateFIFO} />
      </PanelPaginacion>

      <PanelPaginacion
        fallos={optimo.fallos}
        matriz={optimo.matriz}
        pages={optimo.pages}
      >
        <Title>Algoritmo de paginacion Optimo</Title>
        <FormPaginacion handleAction={handleGenerateOptimo} />
      </PanelPaginacion>
    </section>
  );
}

export default SectionPaginacion;
