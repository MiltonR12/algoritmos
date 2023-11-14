import { Process } from '../types/interfaces';

type Props = {
  children: React.ReactNode;
  numRows: number;
  numColumns: number;
  process: Process[]
};

function LayoutTable({ children, numColumns, process }: Props) {

  const schemeRow = Array.from({ length: numColumns + 1 }, (_, index) => index);

  return (
    <section className="container mx-auto rounded-xl">
      <div className="layout-table text-center">
        <div className="border-r-2 border-blue-600">
          {process.map((item, index) => (
            <div key={index} className={`h-6 px-3 ${item.colorCamp}`}>
              Proceso {item.nameProcess}
            </div>
          ))}
        </div>
        <div>
          {children}
        </div>
        <div className="flex col-start-2 border-t-2 border-blue-600 max-w-5xl overflow-auto">
          {schemeRow.map((item) => (
            <div key={item} className="w-6 h-6">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LayoutTable;
