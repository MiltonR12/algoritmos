import SectionPaginacion from "./components/SectionPaginacion";
import SectionProcesador from "./components/SectionProcesador";
import SectionDisco from "./components/SectionDisco";
import { useState } from "react";
import PrimaryButton from "./components/button/PrimaryButton";

function App() {
  const [IsVisible, setIsVisible] = useState(0);

  return (
    <main className=" min-h-screen">
      <nav className="container mx-auto p-10 bg-slate-950 mt-10" >
        <h2 className="text-center text-3xl mb-10" >Bibliotecas de Algoritmos</h2>
        <div className="flex gap-3 justify-center flex-col" >
          <PrimaryButton
            onClick={() => setIsVisible(1)}
          >Algoritmo de Procesador</PrimaryButton>
          <PrimaryButton
            onClick={() => setIsVisible(0)}
          >
            Algoritmo de Memoria
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setIsVisible(2)}
          >Algoritmo de Paginacion</PrimaryButton>
          <PrimaryButton
            onClick={() => setIsVisible(3)}
          >Algoritmo de Disco</PrimaryButton>
        </div>
      </nav>
      {IsVisible === 1 && <SectionProcesador />}
      {IsVisible === 2 && <SectionPaginacion />}
      {IsVisible === 3 && <SectionDisco />}
    </main>
  );
}

export default App;
