type Props = {
  children: React.ReactNode,
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
}

function PrimaryButton({ children, onClick, type }: Props) {
  return (
    <button
      type={type}
      className="bg-blue-700 text-white py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryButton