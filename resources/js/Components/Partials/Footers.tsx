import { motion } from "framer-motion"
import { NavBtn } from "./Headers"
import { LuMail, LuMapPin } from "react-icons/lu"
import logo from "~/images/logo_dark.png"

const Footers = () => {
  return (
    <footer
      className="relative w-full h-60 -mt-10 px-24 flex justify-between items-center text-background bg-linear-to-br from-foreground to-[#aaa] border rounded-t-[3rem]"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'backInOut',
        }}
        className="flex items-center gap-2"
      >
        <img
          src={logo}
          alt="Logo Growdience Creative"
          className="w-45 drop-shadow-[0_0_2px] drop-shadow-white rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: 'backInOut',
        }}
      ><NavBtn orientation="horizontal" /></motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'backInOut',
        }}
        className="flex flex-col gap-2 font-semibold [&>p]:flex [&>p]:items-center [&>p]:gap-x-2"
      >
        <p><LuMapPin size={20} /> <span>Cileungsi, Bogor, Jawa Barat</span></p>
        <p><LuMail size={20} /> <span>support@growdience.help</span></p>
      </motion.div>
    </footer>
  )
}

export { Footers }
