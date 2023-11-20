import HeaderTableDisc from "./Header/HeaderTableDisc";
type Props = {
  table: number[][];
};

function TableDisc({ table }: Props) {

  return (
    <table className="table-auto w-full max-w-2xl mx-auto" >
      <HeaderTableDisc />
      <tbody>
        {table.map((item, index) => (
          <tr key={index} className="bg-zinc-200 even:bg-zinc-300 text-black">
            {item.map((item2, index2) => (
              <td key={index2} className="px-3" >{item2}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-blue-700" >
          <td className="px-3" >Promedio</td>
          <td
            className="px-3"
            colSpan={2} >
            {((table.reduce((acc, item) => item[2] + acc, 0)) / table.length) + ""}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default TableDisc;
