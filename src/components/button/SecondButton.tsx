type Props = {
  children: React.ReactNode,
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
}

function SecondButton({ children, onClick, type }: Props) {
  return (
    <button
      type={type}
      className="bg-zinc-800 text-white py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SecondButton