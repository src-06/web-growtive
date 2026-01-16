import { Headers } from "@/Components"

const LayoutPages = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative">
      <Headers />
      {children}
    </div>
  )
}

export { LayoutPages }
