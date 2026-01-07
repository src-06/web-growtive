import { motion } from "framer-motion";

export function VMSection() {
  return (
    <section
      id="VMSection"
      className="relative w-full h-screen flex justify-center items-center bg-linear-to-l from-[#555] to-fg"
    >
      {/* NOTE: Backgrounds */}
      <div className="w-[60%] h-[61%] bg-fg rounded-2xl" />
      <img
        src="assets/images/about/visi-misi.png"
        alt="about-vm"
        className="absolute bottom-0 left-0 w-[25%]"
      />

      {/* NOTE: Contents */}
      <div
        className="absolute top-0 w-full h-full p-20 flex flex-col justify-center items-center gap-10"
      >
        <motion.h1
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: "backInOut"
          }}
          className="text-4xl text-bg font-bold"
        >VISI & MISI</motion.h1>
        <div
          className="mb-22 flex gap-4 text-bg"
        >
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
              delay: 0.3,
              duration: 0.5,
              ease: "backInOut"
            }}
            className="h-fit p-8 bg-white/80 shadow shadow-bg/30 rounded-3xl"
          >
            <h1>VISI</h1>
            <p>Menjadi mitra strategis terdepan dalam transformasi digital dan branding bagi pelaku usaha di Indonesia.</p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "backInOut"
            }}
            className="p-8 bg-white/80 shadow shadow-bg/30 rounded-3xl"
          >
            <h1>MISI</h1>
            <ul
              className="ml-4 list-disc"
            >
              <li>Menyediakan layanan manajemen media sosial yang efektif untuk meningkatkan visibilitas dan omset UMKM.</li>
              <li>Membangun citra dan ekuitas merek yang kuat melalui strategi branding yang terpersonalisasi.</li>
              <li>Mengembangkan ekosistem kolaborasi yang saling menguntungkan antara merek, perusahaan ternama, dan talent di industri kreatif.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
