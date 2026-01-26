import { Footers, Headers } from "@/Components"
import { basePath } from "@/Config/env"
import { Link, usePage } from "@inertiajs/react"
import { useEffect } from "react"
import { LuArrowUpFromDot } from "react-icons/lu"

const LayoutPages = ({ children }: { children?: React.ReactNode }) => {
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

  const { contact } = usePage().props

  return (
    <div className="relative">
      <Headers />
      {children}
      <div
        id="to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="z-50 opacity-0 fixed bottom-10 right-6 size-14 flex justify-center items-center text-white bg-background hover:bg-[#525252] rounded-full transition-all duration-400 cursor-pointer hover:[&>div]:-translate-y-2"
      >
        <div
          className="transition-transform duration-500"
        ><LuArrowUpFromDot size={30} /></div>
      </div>
      <Link
        as="button"
        id="contact-wa"
        onClick={() => window.open(contact.url_wa, '_blank')}
        target="_blank"
        className="z-50 opacity-0 fixed bottom-28 right-6 size-14"
      >
        <img
          src={`${basePath}/images/wa.svg`}
          alt="Icon Whatsapp"
          className="w-full hover:opacity-50 transition-opacity duration-500"
        />
      </Link>
      <Footers />
    </div>
  )
}

export { LayoutPages }
