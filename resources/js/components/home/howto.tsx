import { motion } from "framer-motion"

export function HowToSection() {
  return (
    <section
      id="HowToSection"
      className="w-full h-full bg-linear-to-tl from-white to-[#999797]"
    >
      <div
        className="w-[80%] mx-auto pt-20 pb-30 flex flex-col jus items-center"
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
        >Cara Kita <span className="font-bold">Bekerja</span></motion.h1>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          className="w-full h-full mt-10 grid grid-cols-5 grid-rows-4 gap-y-8"
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
            className="col-span-3"
          >
            <h1
              className="text-2xl text-bg font-bold"
            >Konsultasi & Brief Awal</h1>
            <p
              className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
            >Anda mengisi form singkat untuk menjelaskan kebutuhan, tujuan bisnis, dan target audiens. Dari sini, kami menyusun gambaran awal strategi yang paling sesuai.</p>
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
              delay: 0.6,
              duration: 0.7,
              ease: "backInOut"
            }}
            className="col-start-3 col-span-3"
          >
            <h1
              className="text-2xl text-bg text-right font-bold"
            >Penentuan Strategi & Kreator</h1>
            <p
              className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
            >Kami memilih konsep konten dan kreator yang relevan dengan brand Anda. Draft konten disiapkan dan diajukan untuk persetujuan sebelum produksi dimulai.</p>
          </motion.div>
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
              delay: 0.9,
              duration: 0.7,
              ease: "backInOut"
            }}
            className="col-span-3"
          >
            <h1
              className="text-2xl text-bg font-bold"
            >Produksi & Penayangan Konten</h1>
            <p
              className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
            >Performa konten dianalisis untuk melihat dampak dan peluang pengembangan. Hasil evaluasi digunakan sebagai dasar optimasi ke depannya.</p>
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
              delay: 1.2,
              duration: 0.7,
              ease: "backInOut"
            }}
            className="col-start-3 col-span-3"
          >
            <h1
              className="text-2xl text-bg text-right font-bold"
            >Monitoring & Evaluasi</h1>
            <p
              className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
            >Konten diproduksi dan dipublikasikan sesuai jadwal yang telah disepakati. Setiap proses dijalankan secara bertahap dan terkontrol.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
