import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="relative flex justify-center items-center gap-12 overflow-hidden"
    >
      <img
        src="/assets/images/bg/endors.svg"
        alt="bg-endors"
        className="-z-50 absolute -left-0.5 w-full scale-101"
      />
      <div
        className="w-[90%] h-dvh mx-auto flex justify-center items-center gap-30"
      >
        <div
          className="w-150"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: -40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut"
            }}
            className="text-5xl font-bold"
          >Pengelolaan Media Sosial</motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut"
            }}
            className="w-75 mt-10 text-lg"
          >Solusi kreatif yang mempercepat perjalanan konsumen dari <p>lihat → tertarik → beli.</p></motion.div>
        </div>
        <motion.img
          initial={{
            opacity: 0,
            x: 40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: "backInOut"
          }}
          src="/assets/images/services/hero.png"
          alt="services"
          className="w-100 rounded-4xl"
        />
      </div>
    </section>
  )
}
