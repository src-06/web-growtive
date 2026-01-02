import { motion } from "framer-motion";
import { NavMenu } from "./headers";

export default function Footers() {
  return (
    <footer
      className="relative w-full h-full -mt-10 bg-linear-to-r from-[#DEDEDE] to-[#313131] border border-[#313131] rounded-t-[3rem]"
    >
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{
          duration: 0.6,
          ease: "backInOut"
        }}
        className="z-50 w-[80%] h-60 mx-auto px-10 flex justify-between items-center"
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
            delay: 0.15
          }}
          className="text-3xl text-bg font-bold"
        >DigitalMarket</motion.h1>
        <motion.div
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
            delay: 0.45
          }}
        ><NavMenu is_footer={true} /></motion.div>
        <motion.div
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
            delay: 0.3
          }}
          className="h-[70%] flex flex-col items-start"
        >
          <p
            className="h-fit px-2 py-1 bg-bg rounded-md"
          >growtive@ads.id</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
