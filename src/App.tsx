import SectionPaginacion from "./components/SectionPaginacion"
import SectionProcesador from "./components/SectionProcesador"
import PanelFifo from "./components/panel/PanelFifo"
import PanelPriority from "./components/panel/PanelPriority"
import PanelSJF from "./components/panel/PanelSJF"

function App() {

  return (
    <main>
      <SectionProcesador />
      {/* <PanelFifo /> */}
      {/* <PanelSJF /> */}
      {/* <PanelPriority /> */}
      <SectionPaginacion />
    </main>
  )
}

export default App
