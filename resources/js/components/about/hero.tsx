import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="relative bg-linear-to-r from-bg to-fg"
    >
      {/* NOTE: Backgrounds */}
      <div className="z-1 absolute -top-20 -left-20 w-120 h-70 -rotate-25 bg-linear-to-b from-bg via-[#333] to-[#666] rounded-[240px/140px]" />
      <div className="z-1 absolute bottom-[20dvh] right-0 w-85 h-70 bg-linear-to-b from-fg to-[#555] rounded-l-4xl" />

      {/* NOTE: Contents */}
      <div
        className="w-[90%] h-dvh mx-auto flex justify-evenly items-center gap-36"
      >
        <motion.h1
          initial={{
            opacity: 0,
            x: -40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: "backInOut"
          }}
          className="text-7xl font-bold uppercase"
        >Tentang kami</motion.h1>
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
          src="/assets/images/about/hero.png"
          alt="about-hero"
          className="z-10 w-85"
        />
      </div>
    </section>
  )
}
