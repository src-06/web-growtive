import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="AboutSection"
      className="-z-50 relative w-full h-screen bg-linear-to-br from-fg via-[#999] to-[#555]"
    >
      {/* NOTE: Backgrounds */}
      <div className="absolute -top-20 -left-20 w-120 h-70 -rotate-25 bg-[#cacaca] rounded-[240px/140px]" />

      {/* NOTE: Contents */}
      <div
        className="w-[90%] mx-auto h-full flex justify-evenly items-center gap-10"
      >
        <div
          className="z-0 w-140"
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              ease: "backInOut"
            }}
            className="p-10 flex justify-center items-center text-bg text-shadow-sm text-shadow-bg/40 text-justify font-semibold bg-[#D9D9D9]/60 uppercase border-2 border-bg rounded-2xl"
          >Growdience Creative adalah Industri kreatif yang didirikan pada tahun 2025 dengan komitmen kuat untuk mendorong pertumbuhan bisnis melalui strategi digital yang inovatif. Pendirian Growdience terinspirasi dari dinamika industri kreatif dan kebutuhan mendesak UMKM Indonesia untuk beradaptasi serta unggul di ranah digital, sejalan dengan visi agensi terkemuka di sektor ini.</motion.p>
        </div>
        <motion.img
            initial={{
              opacity: 0,
              y: -40,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.4,
              ease: "backInOut"
            }}
          src="/assets/images/about/profile.jpg"
          alt="about-hero"
          className="w-70 rounded-2xl"
        />
      </div>
    </section>
  )
}
