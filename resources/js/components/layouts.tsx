import { useEffect } from "react"
import { LuArrowUpFromDot } from "react-icons/lu"
import Headers from "./headers"
import Footers from "./footers"

export default function Layouts({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const toTop = document.getElementById("to-top")
    const contactWa = document.getElementById("contact-wa")

    const handleScroll = () => {
      if (window.scrollY > 300) {
        toTop?.classList.remove("opacity-0")
        toTop?.classList.add("opacity-100")
        contactWa?.classList.remove("opacity-0")
        contactWa?.classList.add("opacity-100")
      } else {
        toTop?.classList.remove("opacity-100")
        toTop?.classList.add("opacity-0")
        contactWa?.classList.remove("opacity-100")
        contactWa?.classList.add("opacity-0")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <Headers />
      <main>{children}</main>
      <div
        id="to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="z-50 opacity-0 fixed bottom-10 right-6 size-14 flex justify-center items-center text-white bg-bg hover:bg-[#525252] rounded-full transition-all duration-400 cursor-pointer hover:[&>div]:-translate-y-2"
      >
        <div
          className="transition-transform duration-500"
        ><LuArrowUpFromDot size={30} /></div>
      </div>
      <a
        id="contact-wa"
        href="https://web.whatsapp.com/send/?phone=6281224510817&text&type=phone_number&app_absent=0"
        target="_blank"
        className="z-50 opacity-0 fixed bottom-28 right-6 size-14"
      >
        <img
          src="assets/images/wa.svg"
          alt="wa"
          className="w-full"
        />
      </a>
      <Footers />
    </div>
  )
}
