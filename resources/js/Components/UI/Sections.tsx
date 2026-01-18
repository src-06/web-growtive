import { ComponentProps } from "react"
import { cn } from "@/Lib/util"

const SectionGradBG = ({ children, className }: ComponentProps<"section">) => {
  return (
    <section
      className={cn(["w-full h-screen text-background bg-linear-to-br from-[#888] to-white", className])}
    >
      <div
        className="w-[90%] h-full mx-auto"
      >
        {children}
      </div>
    </section>
  )
}

export { SectionGradBG }
