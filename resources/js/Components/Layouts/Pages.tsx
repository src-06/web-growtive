import { Footers, Headers } from "@/Components"

const LayoutPages = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative">
      <Headers />
      {children}
      <Footers />
    </div>
  )
}

export { LayoutPages }
