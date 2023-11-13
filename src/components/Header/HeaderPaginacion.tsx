
function HeaderPaginacion({ pages }: { pages: number[] }) {
  return (
    <div className="flex text-center" >
      <div>
        <div className="w-20 h-7 border border-black bg-blue-700" >
          Tiempo
        </div>
        <div className="w-20 h-7 border border-black bg-cyan-400" >
          Paginas
        </div>
      </div>
      <div className="flex bg-blue-900" >
        {
          pages.map((item, index) => (
            <div key={index} >
              <div className="w-7 h-7 border border-black text-white bg-blue-700" >
                {index + 1}
              </div>
              <div className="w-7 h-7 border border-black bg-cyan-400" >
                {item}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HeaderPaginacion