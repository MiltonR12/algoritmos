
type Props = {
  children: React.ReactNode,
  numRows: number,
  numColumns: number
}

function LayoutTable({ children, numColumns, numRows }: Props) {

  const schemeRow = Array.from({ length: numColumns + 1 }, (_, index) => index)
  const schemeCol = Array.from({ length: numRows }, (_, index) => index)

  return (
    <section className="container mx-auto bg-slate-950 p-5 rounded-xl" >
      <h3 className="text-center text-2xl md:text-4xl font-semibold mb-5" >
        Tabla De Procesos
      </h3>
      <div className="layout-table text-center" >
        <div className="border-r-2 border-blue-600" >
          {schemeCol.map((item) => (
            <div key={item} className="px-3 h-6" >
              Proceso {schemeCol.length - item}
            </div>
          ))}
        </div>
        {children}
        <div className="flex col-start-2 border-t-2 border-blue-600" >
          {schemeRow.map((item) => (
            <div key={item} className="w-6 h-6" >
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default LayoutTable