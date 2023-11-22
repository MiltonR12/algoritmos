import HeaderPaginacion from "../Header/HeaderPaginacion";

type Props = {
  matriz: number[][];
  fallos: boolean[];
  pages: number[];
  children: React.ReactNode
};

function PanelPaginacion({ fallos, matriz, pages, children }: Props) {

  const nroFallos = fallos.reduce((acc, item) => !item ? acc + 1 : acc, 0)

  return (
    <section className="mx-auto container bg-slate-950 p-5">
      <div>
        {children}
      </div>
      <table className="text-black my-5 flex flex-col items-center justify-center overflow-auto">
        <HeaderPaginacion pages={pages} />
        <tbody>
          {matriz.map((item, index) => (
            <tr
              key={index}
              className="flex text-center odd:bg-zinc-200 bg-zinc-300"
            >
              <td className="w-20 h-7 border border-black">Marco {index}</td>
              {item.map((item2, index2) => (
                <td key={index2} className="w-7 h-7 border border-black">
                  {item2 === 0 ? "" : item2}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-blue-300 text-center">
          <tr className="border border-black flex">
            <td className="w-20 h-7 border border-black" >
              Fallos
            </td>
            {fallos.map((item, index) => (
              <td key={index} className="w-7 h-7 border border-black">
                {item ? "V" : "F"}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
      <div className="text-xl" >
        <div>
          <h3>Fallos: {fallos.length}</h3>
        </div>
        <div>
          <p>Frecuencia: {parseFloat((nroFallos / fallos.length).toFixed(2) + "")}</p>
        </div>
      </div>
    </section>
  );
}

export default PanelPaginacion;
