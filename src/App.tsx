// import SectionPaginacion from "./components/SectionPaginacion"
// import SectionProcesador from "./components/SectionProcesador"

import SectionDisco from "./components/SectionDisco"
import { discoFIFO } from "./utils/disco/algoritmos"


function App() {


  discoFIFO([55,58,39,18,90,160,150,38,184], 100)

  return (
    <main>
      {/* <SectionProcesador /> */}
      {/* <SectionPaginacion /> */}
      <SectionDisco />
    </main>
  )
}

export default App
