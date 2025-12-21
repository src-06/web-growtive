import { useState } from "react"
import { LuChevronRight } from "react-icons/lu"
import { FaLinkedin, FaSquareInstagram, FaTiktok } from "react-icons/fa6"

export default function Headers() {
  return (
    <header
      className="z-50 absolute w-full h-20 px-20 flex justify-between items-center"
    >
      <h1
        className="text-2xl font-bold"
      >Digital Market</h1>
      <NavMenu />
      <div
        className="flex items-center gap-4"
      >
        <FaSquareInstagram size={30} />
        <FaTiktok size={25} />
        <FaLinkedin size={30} />
      </div>
    </header>
  )
}

export function NavMenu({ is_footer = false }: { is_footer?: boolean }) {
  const [btnDrp, setBtnDrp] = useState(false)

  const handleBtnDrp = () => setBtnDrp(!btnDrp)

  return (
    <nav
      className={`flex ${is_footer ? "flex-col" : ""} gap-2`}
    >
      <a
        href="/"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Beranda</a>
      <div
        className="relative"
      >
        <button
          onClick={handleBtnDrp}
          className="px-2 py-1 flex items-center gap-1 hover:bg-bg/40 rounded-lg transition-colors"
        >Layanan <LuChevronRight size={20} className={`${btnDrp ? "rotate-90" : ""} transition-transform`} /></button>
        <div
          className={`absolute ${is_footer ? "top-0 left-35" : "top-10 left-0"} ${btnDrp ? "flex" : "hidden"} flex-col justify-center items-center bg-bg/20 rounded-lg`}
        >
          <a
            href="/endors"
            className="w-full px-2 py-1 hover:bg-bg/40 rounded-t-lg"
          >Endorsement</a>
          <a
            href="/services"
            className="w-full px-2 py-1 text-nowrap hover:bg-bg/40 rounded-b-lg"
          >Pengelolaan Akun Media Sosial</a>
        </div>
      </div>
      <a
        href="/about"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Tentang Kami</a>
      <a
        href="https://wa.me/6281224510817"
        target="_blank"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Kontak Kami</a>
    </nav>
  )
}
