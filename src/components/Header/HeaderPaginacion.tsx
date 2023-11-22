
function HeaderPaginacion({ pages }: { pages: number[] }) {
  return (
    <thead className="text-center" >
      <tr>
        <td className="w-20 h-7 border border-black bg-blue-700 block" >
          Tiempo
        </td>
        {
          pages.map((_, index) => (
            <td
              key={index}
              className="w-7 h-7 border border-black text-white bg-blue-700" >
              {index + 1}
            </td>
          ))
        }
      </tr>
      <tr className="bg-blue-900" >
        <td className="w-20 h-7 border border-black bg-cyan-400 block" >
          Paginas
        </td>
        {
          pages.map((item, index) => (
            <td key={index} className="w-7 h-7 border border-black bg-cyan-400" >
              {item}
            </td>
          ))
        }
      </tr>
    </thead>
  )
}

export default HeaderPaginacion