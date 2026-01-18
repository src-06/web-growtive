import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="relative w-full h-dvh flex items-center overflow-hidden"
    >
      <img
        src="/assets/images/bg/endors.svg"
        alt="bg-endors"
        className="-z-50 absolute -left-0.5 w-full scale-101"
      />
      <div
        className="w-[90%] h-full mt-20 mx-auto flex justify-evenly items-center gap-20"
      >
        <div
          className="w-[40%] flex flex-col gap-10"
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
          >Endorsmen with influencer</motion.h1>
          <motion.p
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
          >Kami memanfaatkan pengaruh influencer yang tepat untuk membuat produk Anda dipercaya lebih cepat, dibicarakan lebih luas, dan mendorong audiens langsung ke tindakan pembelian.</motion.p>
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
          src="/assets/images/endors/hero.png"
          alt="endors"
          className="w-[40%]"
        />
      </div>
    </section>
  )
}
