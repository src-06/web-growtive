import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { FaInstagram, FaTiktok } from "react-icons/fa6"

export function ServicesSection() {
  return (
    <section
      id="ServiceSection"
      className="w-full h-screen bg-linear-to-tl from-white to-[#999797]"
    >
      <div
        className="w-[90%] h-full mx-auto flex flex-col justify-center items-center"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: -20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          className="text-3xl text-bg uppercase"
        >Layanan Yang Kami <span className="font-bold">Tawarkan</span></motion.h1>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          className="mt-20 w-full flex justify-evenly items-center"
        >
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                x: -20
              },
              whileInView: {
                opacity: 1,
                x: 0
              }
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "backInOut"
            }}
          >
            <Link
              href="/endors"
              className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-bg rounded-3xl"
            >
              <h1
                className="mt-4 text-2xl font-bold"
              >Endorsement</h1>
              <img
                src="assets/images/endors/service.png"
                alt="endorsement"
                className="w-40"
              />
            </Link>
          </motion.div>
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                x: 20
              },
              whileInView: {
                opacity: 1,
                x: 0
              }
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: "backInOut"
            }}
          >
            <Link
              href="/services"
              className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-bg rounded-3xl"
            >
              <h1
                className="mt-4 text-2xl text-center font-bold"
              >Social Media Management</h1>
              <div
                className="relative mt-6 px-4 grid grid-cols-3 grid-rows-3"
              >
                <hr className="absolute -bottom-8 w-87 h-1 -rotate-45 origin-left bg-fg" />
                <FaInstagram className="col-start-1 col-span-1 size-19" />
                <FaTiktok className="col-start-3 col-span-1 row-start-3 size-19" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
