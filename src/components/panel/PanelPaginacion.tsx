import HeaderPaginacion from "../Header/HeaderPaginacion";

type Props = {
  matriz: number[][];
  fallos: boolean[];
  pages: number[];
  children: React.ReactNode
};

function PanelPaginacion({ fallos, matriz, pages, children }: Props) {
  return (
    <section className="mx-auto container bg-slate-950 p-5">
      <div>
        {children}
      </div>
      <div className="text-black flex flex-col items-center justify-center">
        <HeaderPaginacion pages={pages} />
        {matriz.map((item, index) => (
          <div
            key={index}
            className="flex text-center odd:bg-zinc-200 bg-zinc-300"
          >
            <div className="w-20 h-7 border border-black">Marco {index}</div>
            {item.map((item2, index2) => (
              <div key={index2} className="w-7 h-7 border border-black">
                {item2 === 0 ? "" : item2}
              </div>
            ))}
          </div>
        ))}
        <div className="flex bg-blue-300 text-center">
          <div className="w-20 h-7 border border-black">Fallos</div>
          {fallos.map((item, index) => (
            <div key={index} className="w-7 h-7 border border-black">
              {item ? "V" : "F"}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelPaginacion;
