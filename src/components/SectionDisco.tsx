import TableDisc from "./TableDisc";
import { useState } from "react";
import PrimaryButton from "./button/PrimaryButton";
import Title from "./Title";
import Grafico from "./Grafico";
import { genericDataDisc } from "../utils/generate";
import DiscInfo from "./DiscInfo";
import { alertCheck, alertGenerateDisc } from "./alerts/AlertsDisc";

type Camp = {
  pistas: number[];
  initPista: number;
  table: number[][];
};

const initCamp: Camp = {
  initPista: 0,
  pistas: [],
  table: [],
};

function SectionDisco() {
  const [discFIFO, setDiscFIFO] = useState<Camp>(initCamp);

  const [discSSTF, setDiscSSTF] = useState<Camp>(initCamp);

  const [discSCAN, setDiscSCAN] = useState<Camp & { tipo: string }>({
    ...initCamp,
    tipo: "growing",
  });

  const [discCSCAN, setDiscCSCAN] = useState<Camp & { tipo: string }>({
    ...initCamp,
    tipo: "growing",
  });

  const handleGenerateFIFO = async () => {
    alertGenerateDisc().then((result) => {
      if (result.isConfirmed) {
        const { initPista, pistas, table } = genericDataDisc(
          "FIFO",
          result.value
        );
        setDiscFIFO({ initPista, pistas, table });
      }
    });
  };

  const handleGenerateSSTF = () => {
    alertGenerateDisc().then((result) => {
      if (result.isConfirmed) {
        const { initPista, pistas, table } = genericDataDisc(
          "SSTF",
          result.value
        );
        setDiscSSTF({ initPista, pistas, table });
      }
    });
  };

  const handleGenerateSCAN = () => {
    alertGenerateDisc().then((result) => {
      if (result.isConfirmed) {
        alertCheck().then((result2) => {
          if (result2.isConfirmed) {
            if (result2.value === "Ascendente") {
              const dataSCAN = genericDataDisc("SCAN", result.value, "growing");
              setDiscSCAN({ ...dataSCAN, tipo: "growing" });
            } else {
              const dataSCAN = genericDataDisc(
                "SCAN",
                result.value,
                "decreasing"
              );
              setDiscSCAN({ ...dataSCAN, tipo: "decreasing" });
            }
          }
        });
      }
    });
  };

  const handleGenerateCSCAN = () => {
    alertGenerateDisc().then((result) => {
      if (result.isConfirmed) {
        alertCheck().then((result2) => {
          if (result2.isConfirmed) {
            if (result2.value === "Ascendente") {
              const dataCSCAN = genericDataDisc(
                "CSCAN",
                result.value,
                "growing"
              );
              setDiscCSCAN({ ...dataCSCAN, tipo: "growing" });
            } else {
              const dataCSCAN = genericDataDisc(
                "CSCAN",
                result.value,
                "decreasing"
              );
              setDiscCSCAN({ ...dataCSCAN, tipo: "decreasing" });
            }
          }
        });
      }
    });
  };

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
          labels={discFIFO.pistas.length}
        />
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
          labels={discSSTF.pistas.length}
        />
      </div>
      <div className="bg-slate-950 p-5">
        <Title>Algotirmo de Disco SCAN</Title>
        <PrimaryButton onClick={handleGenerateSCAN}>
          Generar Datos Automaticamente
        </PrimaryButton>
        <DiscInfo
          tipo={discSCAN.tipo}
          initPista={discSCAN.initPista}
          pistas={discSCAN.pistas}
        />
        <TableDisc table={discSCAN.table} />
        <Grafico
          matriz={discSCAN.table}
          title="Grafico SSTF"
          labels={discSCAN.pistas.length}
        />
      </div>
      <div className="bg-slate-950 p-5">
        <Title>Algotirmo de Disco CSCAN</Title>
        <PrimaryButton onClick={handleGenerateCSCAN}>
          Generar Datos Automaticamente
        </PrimaryButton>
        <DiscInfo
          tipo={discCSCAN.tipo}
          initPista={discCSCAN.initPista}
          pistas={discCSCAN.pistas}
        />
        <TableDisc table={discCSCAN.table} />
        <Grafico
          matriz={discCSCAN.table}
          title="Grafico SSTF"
          labels={discCSCAN.pistas.length}
        />
      </div>
    </section>
  );
}

export default SectionDisco;
