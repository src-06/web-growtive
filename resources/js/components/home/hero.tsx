import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { LuChevronRight } from "react-icons/lu"

export function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="w-[90%] h-dvh mx-auto pt-40 pb-30 flex justify-center items-center gap-12"
    >
      <img
        src="assets/images/bg/home.svg"
        alt="bg-home"
        className="-z-50 absolute -top-0.5 left-0 w-full"
      />
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{
          ease: "backInOut"
        }}
        className="w-180 h-100 flex flex-col justify-around text-6xl uppercase"
      >
        <motion.h1
          variants={{
            initial: {
              opacity: 0,
              y: -20
            },
            whileInView: {
              opacity: 1,
              y: 0
            }
          }}
          transition={{
            delay: 0.6
          }}
          className="font-serif font-light"
        >Periklanan <div className="font-sans font-black">Melalui Digital</div></motion.h1>
        <motion.h1
          variants={{
            initial: {
              opacity: 0,
              y: -20
            },
            whileInView: {
              opacity: 1,
              y: 0
            }
          }}
          transition={{
            delay: 0.9
          }}
          className="italic"
        >Pengelolaan akun media sosial</motion.h1>
        <motion.span
          variants={{
            initial: {
              opacity: 0,
              y: -20
            },
            whileInView: {
              opacity: 1,
              y: 0
            }
          }}
          transition={{
            delay: 1.2
          }}
          className="flex items-center"
        >
          <Link
            href="/about"
            className="px-6 py-2 text-base text-bg hover:text-bg bg-fg hover:bg-transparent border-2 border-fg rounded-full transition-all duration-500"
          >Tentang Kami</Link>
          <LuChevronRight className="size-10" />
        </motion.span>
      </motion.div>
    </section>
  )
}
