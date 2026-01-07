import { motion } from "framer-motion"

export function AboutUsSection() {
  return (
    <section
      id="AboutUsSection"
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
        >Tentang <span className="font-bold">Kami</span></motion.h1>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          className="mt-30 flex gap-8"
        >
          <motion.img
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
            src="assets/images/about/profile.jpg"
            alt="profile"
            className="w-70 rounded-2xl"
          />
          <motion.p
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
            className="px-20 flex justify-center items-center text-bg text-shadow-sm text-shadow-bg/40 text-justify font-semibold bg-[#D9D9D9] uppercase border-2 border-bg rounded-2xl"
          >Growdience Creative adalah mitra strategis Anda dalam membangun dan memperluas audiens brand secara kreatif dan terukur. Kami percaya bahwa iklan yang efektif bukan hanya tentang menjangkau banyak orang, tetapi tentang menumbuhkan komunitas yang setia ("Growing an Audience").</motion.p>
        </motion.div>
      </div>
    </section>
  )
}
