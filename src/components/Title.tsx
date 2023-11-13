function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-center text-3xl font-semibold"
    >
      {children}
    </h3>
  )
}

export default Title