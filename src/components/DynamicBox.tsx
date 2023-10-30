
function DynamicBox({ item2 }: { item2: number }) {

  const startProcess = "border-l-4 border-l-blue-700"
  const executeProcess = "bg-blue-500 border-t-2 border-r-0 border-t-blue-800"
  const colorCamp = item2 === 1 ? startProcess : item2 === 0 ? executeProcess : ""

  return (
    <div className={`w-6 h-6 border-r border-zinc-50/50 ${colorCamp}`} >
    </div>
  )
}

export default DynamicBox