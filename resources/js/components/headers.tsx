import { useState } from "react"
import { LuChevronRight } from "react-icons/lu"
import { FaLinkedin, FaSquareInstagram, FaTiktok } from "react-icons/fa6"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"

export default function Headers() {
  return (
    <motion.header
      initial={{
        y: -80
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 1,
        ease: "backInOut"
      }}
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
    </motion.header>
  )
}

export function NavMenu({ is_footer = false }: { is_footer?: boolean }) {
  const [btnDrp, setBtnDrp] = useState(false)

  const handleBtnDrp = () => setBtnDrp(!btnDrp)

  return (
    <nav
      className={`flex ${is_footer ? "flex-col" : ""} gap-2`}
    >
      <Link
        href="/"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Beranda</Link>
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
          <Link
            href="/endors"
            className="w-full px-2 py-1 hover:bg-bg/40 rounded-t-lg"
          >Endorsement</Link>
          <Link
            href="/services"
            className="w-full px-2 py-1 text-nowrap hover:bg-bg/40 rounded-b-lg"
          >Pengelolaan Akun Media Sosial</Link>
        </div>
      </div>
      <Link
        href="/about"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Tentang Kami</Link>
      <a
        href="https://web.whatsapp.com/send/?phone=6281224510817&text&type=phone_number&app_absent=0"
        target="_blank"
        className="px-2 py-1 hover:bg-bg/40 rounded-lg"
      >Kontak Kami</a>
    </nav>
  )
}
