import { useState } from "react";
import PanelPaginacion from "./panel/PanelPaginacion";
import { generateDataPaginacion } from "../utils/generate";
import { paginacionFIFO, paginacionOptimo } from "../utils/paginacion/funtions";
import PrimaryButton from "./button/PrimaryButton";
import Title from "./Title";

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

  const handleFIFO = () => {
    const { marcos, pages } = generateDataPaginacion();
    const { matriz, fallos } = paginacionFIFO(pages, marcos);
    setfifo({ pages, marcos, matriz, fallos });
  };

  const handleOptimo = () => {
    const { marcos, pages } = generateDataPaginacion();
    const { matriz, fallos } = paginacionOptimo(pages, marcos);
    setOptimo({ pages, marcos, matriz, fallos });
  };

  return (
    <section className="flex flex-col gap-6">
      <PanelPaginacion
        fallos={fifo.fallos}
        matriz={fifo.matriz}
        pages={fifo.pages}
      >
        <Title>Algoritmo de paginacion FIFO</Title>
        <PrimaryButton onClick={handleFIFO}>
          Generar Datos Automaticamente
        </PrimaryButton>
      </PanelPaginacion>

      <PanelPaginacion
        fallos={optimo.fallos}
        matriz={optimo.matriz}
        pages={optimo.pages}
      >
        <Title>Algoritmo de paginacion Optimo</Title>
        <PrimaryButton onClick={handleOptimo}>
          Generar Datos Automaticamente
        </PrimaryButton>
      </PanelPaginacion>
    </section>
  );
}

export default SectionPaginacion;
