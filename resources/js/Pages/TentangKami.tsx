import { LayoutPages, SectionGradBG } from "../Components"
import profile from "~/images/about/profile.jpg"
import imgHero from "~/images/about/hero.png"
import imgVM from "~/images/about/visi-misi.png"
import { motion } from "framer-motion"

const HalamanTentangKami = () => {
  return (
    <LayoutPages>
      <SectionGradBG
        className="relative bg-linear-to-br from-background to-foreground"
      >
        {/* NOTE: Background */}
        <div className="absolute -top-40 -left-40 w-160 h-90 -rotate-25 bg-linear-to-b from-background via-[#333] to-[#aaa] to-100% rounded-[640px/360px]" />
        <div className="z-1 absolute bottom-[20dvh] right-0 w-85 h-70 bg-linear-to-b from-foreground to-[#555] rounded-l-4xl" />

        {/* NOTE: Content */}
        <div
          className="w-[90%] h-dvh mx-auto flex justify-evenly items-center gap-36"
        >
          <motion.h1
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
            className="text-7xl text-foreground font-bold uppercase"
          >Tentang kami</motion.h1>
          <motion.img
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
            src={imgHero}
            alt="about-hero"
            className="z-10 w-85"
          />
        </div>
      </SectionGradBG>

      <SectionGradBG
        className="bg-linear-to-tl to-[#ccc]"
      >
        <div
          className="relative w-full h-full py-10 flex justify-center items-center"
        >
          <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: 'backInOut',
              }}
            className="w-full p-10 flex justify-between gap-4 bg-foreground rounded-3xl"
          >
            <motion.img
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: 'backInOut',
              }}
              src={profile}
              alt="Profile Image"
              className="w-80 rounded-3xl"
            />
            <motion.h1
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="w-full mt-10 text-3xl text-center text-shadow-lg text-shadow-background/30 font-bold uppercase"
            >Perusahaan Kami</motion.h1>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="absolute bottom-1/3 right-0 w-200 translate-y-1/2 h-fit p-12 text-lg text-justify text-foreground text-shadow-lg text-shadow-foreground/30 font-bold uppercase leading-8 tracking-wider bg-background/70 border border-background shadow-lg shadow-foreground rounded-3xl"
          >Growdience Creative adalah Industri kreatif yang didirikan pada tahun 2025 dengan komitmen kuat untuk mendorong pertumbuhan bisnis melalui strategi digital yang inovatif. Pendirian Growdience terinspirasi dari dinamika industri kreatif dan kebutuhan mendesak UMKM Indonesia untuk beradaptasi serta unggul di ranah digital, sejalan dengan visi agensi terkemuka di sektor ini.</motion.p>
        </div>
      </SectionGradBG>

      <SectionGradBG
        className="relative bg-linear-to-tl to-[#ccc]"
      >
        <div
          className="flex justify-center items-center"
        >
          {/* NOTE: Backgrounds */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="absolute top-1/2 -translate-y-1/2 w-[60%] h-[61%] bg-foreground rounded-2xl"
          />
          <motion.img
            initial={{
              opacity: 0,
              y: 30,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: 'backInOut',
            }}
            src={imgVM}
            alt="Image Visi Misi"
            className="absolute bottom-0 left-0 w-[25%]"
          />

          {/* NOTE: Contents */}
          <div
            className="absolute top-0 w-full h-full p-20 flex flex-col justify-center items-center gap-10"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="text-4xl text-background font-bold"
            >VISI & MISI</motion.h1>
            <div
              className="mb-22 flex gap-4 text-background"
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
                  delay: 0.6,
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                className="w-full h-fit p-8 bg-white/80 shadow shadow-background/30 rounded-3xl"
              >
                <h1>VISI</h1>
                <p>Menjadi mitra strategis terdepan dalam transformasi digital dan branding bagi pelaku usaha di Indonesia.</p>
              </motion.div>
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
                  delay: 0.6,
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                className="w-full p-8 bg-white/80 shadow shadow-background/30 rounded-3xl"
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
        </div>
      </SectionGradBG>

      {/* TODO: Ubah ke SectionGradBG  */}
      <section
        className="w-full max-h-full py-30 text-background bg-linear-to-tl from-[#888] to-foreground"
      >
        <div
          className="w-[90%] h-full mx-auto flex flex-wrap justify-center items-center gap-10"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="w-[45%] p-5 bg-white rounded-3xl shadow"
          >
            <h1
              className="text-lg font-semibold"
            >1. Fokus Eksklusif pada Pertumbuhan UMKM</h1>
            <ul
              className="ml-4 pt-2 list-disc flex flex-col gap-4"
            >
              <li>Kami memiliki dedikasi khusus dan pemahaman mendalam terhadap tantangan dan potensi bisnis skala UMKM di Indonesia.</li>
              <li>Solusi Skalabilitas: Kami merancang strategi yang tidak hanya menarik perhatian, tetapi juga menghasilkan omset nyata. Fokus kami adalah menciptakan konten yang mendorong konversi dan memperkuat brand equity Anda di pasar yang kompetitif.</li>
              <li>Efisiensi Anggaran: Strategi kami dirancang untuk memberikan Return on Investment (ROI) maksimal dengan mengoptimalkan anggaran digital Anda, memastikan setiap rupiah yang diinvestasikan menghasilkan dampak signifikan.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="w-[45%] p-5 bg-white rounded-3xl shadow"
          >
            <h1
              className="text-lg font-semibold"
            >2. Strategi Konten Berbasis Data (Data-Driven Strategy)</h1>
            <ul
              className="ml-4 pt-2 list-disc flex flex-col gap-4"
            >
              <li>Kami melangkah melampaui konten yang "cantik" dan berfokus pada konten yang "bekerja" sesuai tujuan bisnis Anda.</li>
              <li>Penelitian Mendalam: Kami melakukan analisis pasar, tren, dan kompetitor secara ekstensif untuk memastikan pesan Anda relevan dan menonjol.</li>
              <li>Optimalisasi Berkelanjutan: Strategi kami bersifat dinamis. Kami secara rutin memantau metrik performa (seperti engagement rate, reach, dan konversi) untuk melakukan penyesuaian cepat, memastikan akun Anda selalu berada di jalur pertumbuhan yang optimal.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="w-[45%] p-5 bg-white rounded-3xl shadow"
          >
            <h1
              className="text-lg font-semibold"
            >3. Tim Kolaboratif yang Berorientasi Visi</h1>
            <ul
              className="ml-4 pt-2 list-disc flex flex-col gap-4"
            >
              <li>Growdience didirikan oleh tim yang memiliki visi tunggal: melihat bisnis Anda berhasil di ranah digital.</li>
              <li>Keahlian Terintegrasi: Tim kami terdiri dari spesialis konten, perancang visual, dan ahli strategi digital yang bekerja selaras untuk menghasilkan eksekusi yang konsisten dan profesional.</li>
              <li>Pendekatan Personal: Kami memperlakukan setiap klien sebagai rekan. Kami menyediakan komunikasi yang transparan dan laporan kinerja yang komprehensif, memastikan Anda selalu terinformasi mengenai perkembangan dan hasil yang dicapai.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </LayoutPages>
  )
}

export default HalamanTentangKami
