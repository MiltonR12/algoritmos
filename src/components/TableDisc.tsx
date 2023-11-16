import HeaderTableDisc from "./Header/HeaderTableDisc";
import { useState, useEffect } from "react";

type Props = {
  table: number[][];
};

function TableDisc({ table }: Props) {
  const [promedio, setPromedio] = useState(0);

  useEffect(() => {
    let newPromedio = 0;
    table.forEach((item) => {
      newPromedio += item[2];
    });
    setPromedio(newPromedio);
  }, [table]);

  return (
    <table className="table-auto w-full" >
      <HeaderTableDisc />
      <tbody>
        {table.map((item, index) => (
          <tr key={index} className="bg-zinc-200 even:bg-zinc-300 text-black">
            {item.map((item2, index2) => (
              <td key={index2}>{item2}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-blue-700" >
          <th>Promedio:</th>
          <th colSpan={2} >{promedio / table.length}</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default TableDisc;
