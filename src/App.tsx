import SectionPaginacion from "./components/SectionPaginacion";
import SectionProcesador from "./components/SectionProcesador";
import SectionDisco from "./components/SectionDisco";
import { useState } from "react";
import PrimaryButton from "./components/button/PrimaryButton";

function App() {
  const [IsVisible, setIsVisible] = useState(0);

  return (
    <main className="flex flex-col gap-5 justify-center items-center min-h-screen">
      <section className="container mx-auto bg-slate-950 p-10">
        <h1 className="text-center">Menu De Algoritmos</h1>
        <div className="flex justify-between text-center">
          <PrimaryButton onClick={() => setIsVisible(1)} >Algoritmo De Procesador</PrimaryButton>
          <PrimaryButton onClick={() => setIsVisible(2)} >Algoritmo De Paginacion</PrimaryButton>
          <PrimaryButton onClick={() => setIsVisible(3)} >Algoritmo De Disco</PrimaryButton>
        </div>
      </section>
      {IsVisible === 1 && <SectionProcesador />}
      {IsVisible === 2 && <SectionPaginacion />}
      {IsVisible === 3 && <SectionDisco />}
    </main>
  );
}

export default App;
