
function HeaderFifoTable({ isPriority = false }: { isPriority?: boolean }) {
  return (
    <thead >
      <tr className="bg-blue-700 border-collapse" >
        <td className="p-2 border border-blue-400" >
          Nº
        </td>
        <td className="p-2 border border-blue-400" >
          T. de inicio
        </td>
        <td className="p-2 border border-blue-400" >
          T. de ejecucion
        </td>
        {isPriority && <td className="p-2 border border-blue-400" >
          Prioridad
        </td>}
        <td className="p-2 border border-blue-400" >
          T. De Espera
        </td>
        <td className="p-2 border border-blue-400" >
          T. de finalizacion
        </td>
        <td className="p-2 border border-blue-400" >
          T. de espera
        </td>
        <td className="p-2 border border-blue-400" >
          INDEX
        </td>
        <td className="p-2 border border-blue-400" >
          Acciones
        </td>
      </tr>
    </thead>
  )
}

export default HeaderFifoTable