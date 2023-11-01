
function HeaderFifoTable() {
  return (
    <thead >
      <tr className="bg-blue-700 border-collapse" >
        <td className="p-2 border border-blue-400" >
          Nº Procesos
        </td>
        <td className="p-2 border border-blue-400" >
          Tiempo de inicio
        </td>
        <td className="p-2 border border-blue-400" >
          Tiempo de ejecucion
        </td>
        <td className="p-2 border border-blue-400" >
          Tiempo De Espera
        </td>
        <td className="p-2 border border-blue-400" >
          Tiempo de finalizacion
        </td>
        <td>
          Tiempo de espera
        </td>
        <td className="p-2 border border-blue-400" >
          Acciones
        </td>
      </tr>
    </thead>
  )
}

export default HeaderFifoTable