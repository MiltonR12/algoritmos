import { paginacionFIFO, paginacionOptimo } from "../../../utils/paginacion/funtions"
import HeaderPaginacion from "../../Header/HeaderPaginacion"

const pages = [2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2]
const marcos = 3

function PanelFIFO() {

  const {matriz, fallos} = paginacionFIFO(pages, marcos)
  paginacionOptimo(pages, marcos)

  return (
    <section className="mx-auto container bg-slate-950 pt-5" >
      <h3 className="text-center text-4xl font-semibold" >
        Algoritmo de paginacion FIFO
      </h3>
      <div className="p-5 text-black flex flex-col items-center justify-center" >
        <HeaderPaginacion pages={pages} />
        {
          matriz.map((item, index) => (
            <div key={index} className="flex text-center odd:bg-zinc-200 bg-zinc-300" >
              <div className="w-20 h-7 border border-black" >
                Marco {index}
              </div>
              {
                item.map((item2, index2) => (
                  <div key={index2} className="w-7 h-7 border border-black" >
                    {item2}
                  </div>
                ))
              }
            </div>
          ))
        }
        <div className="flex bg-blue-300 text-center" >
          <div className="w-20 h-7 border border-black" >
            Fallos
          </div>
          {fallos.map((item, index) => (
            <div key={index} className="w-7 h-7 border border-black" >
              {item ? "V" : "F"}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PanelFIFO