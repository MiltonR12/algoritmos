type Props = {
  initPista: number;
  pistas: number[];
  tipo?: string;
};

function DiscInfo({ initPista, pistas, tipo }: Props) {
  return (
    <div className="p-3">
      <h3 className="text-2xl">Datos</h3>
      <p className="text-cyan-400 text-xl truncate">{JSON.stringify(pistas)}</p>
      <h3 className="text-2xl">Pista Inicial</h3>
      <p className="text-cyan-400 text-xl">{initPista}</p>
      {tipo && (
        <>
          <h3 className="text-2xl">Tipo</h3>
          <p className="text-cyan-400 text-xl">
            {tipo === "growing" ? "Ascendente" : "Descendente"}
          </p>
        </>
      )}
    </div>
  );
}

export default DiscInfo;
