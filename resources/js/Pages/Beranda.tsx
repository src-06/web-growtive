import { LayoutPages, SectionGradBG } from "@/Components"
import { FaChevronRight, FaInstagram, FaTiktok } from "react-icons/fa6"
import { Link } from "@inertiajs/react"
import bgHome from "~/images/bg/home.svg"
import imgServices from "~/images/endors/service.png"
import { motion } from "framer-motion"

interface StepsProps {
  title: string
  description: string
}

const Steps: StepsProps[] = [
  {
    title: 'Konsultasi & Brief Awal',
    description: 'Anda mengisi form singkat untuk menjelaskan kebutuhan, tujuan bisnis, dan target audiens. Dari sini, kami menyusun gambaran awal strategi yang paling sesuai.',
  },
  {
    title: 'Penentuan Strategi & Kreator',
    description: 'Kami memilih konsep konten dan kreator yang relevan dengan brand Anda. Draft konten disiapkan dan diajukan untuk persetujuan sebelum produksi dimulai.',
  },
  {
    title: 'Produksi & Penayangan Konten',
    description: 'Performa konten dianalisis untuk melihat dampak dan peluang pengembangan. Hasil evaluasi digunakan sebagai dasar optimasi ke depannya.',
  },
  {
    title: 'Monitoring & Evaluasi',
    description: 'Konten diproduksi dan dipublikasikan sesuai jadwal yang telah disepakati. Setiap proses dijalankan secara bertahap dan terkontrol.',
  },
]

const HalamanBeranda = () => {
  return (
    <LayoutPages>
      <section
        className="relative w-full h-dvh flex justify-center items-center"
      >
        <img
          src={bgHome}
          alt="Background Home"
          className="-z-1 absolute top-0 w-full -mt-0.5"
        />
        <div
          className="w-170 h-full flex flex-col justify-center gap-6 text-6xl uppercase"
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
            className="font-serif"
          >
            Periklanan<br />
            <span
              className="font-sans font-black"
            >Melalui Digital</span>
          </motion.h1>
          <motion.p
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
            className="italic"
          >Pengelolaan akun media sosial</motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: 'backInOut',
            }}
          >
            <Link
              as="button"
              href="/TentangKami"
              className="w-fit flex items-center gap-2 hover:[&>span]:text-foreground hover:[&>span]:bg-transparent hover:[&>svg]:translate-x-4"
            >
              <span
                className="w-fit px-6 py-2 text-base text-background uppercase bg-foreground border-2 border-foreground rounded-full transition-all"
              >Tentang Kami</span>
              <FaChevronRight size={26} className="transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionGradBG>
        <div
          className="h-full flex flex-col justify-center items-center"
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
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="text-3xl uppercase"
          >Layanan Yang Kami <span className="font-bold">Tawarkan</span></motion.h1>
          <div
            className="mt-20 w-full flex justify-evenly items-center text-foreground"
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
                duration: 0.6,
                ease: 'backInOut',
              }}
            >
              <Link
                as="button"
                href="/Endorsement"
                className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-background rounded-3xl"
              >
                <h1
                  className="mt-4 text-2xl font-bold"
                >Endorsement</h1>
                <img
                  src={imgServices}
                  alt="Endorsements Image"
                  className="w-40"
                />
              </Link>
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
                duration: 0.6,
                ease: 'backInOut',
              }}
            >
              <Link
                as="button"
                href="/PengelolaanAkunMedsos"
                className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-background rounded-3xl"
              >
                <h1
                  className="mt-4 text-2xl text-center font-bold"
                >Social Media Management</h1>
                <div
                  className="relative mt-6 px-4 grid grid-cols-3 grid-rows-3"
                >
                  <hr className="absolute -bottom-8 w-87 h-1 -rotate-45 origin-left bg-foreground border-transparent" />
                  <FaInstagram className="col-start-1 col-span-1 size-19" />
                  <FaTiktok className="col-start-3 col-span-1 row-start-3 size-19" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionGradBG>

      <SectionGradBG
        className="h-fit"
      >
        <div
          className="w-full h-fit pt-20 pb-30 flex flex-col jus items-center"
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
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="text-3xl text-background uppercase"
          >Cara Kita <span className="font-bold">Bekerja</span></motion.h1>
          <div
            className="w-full h-fit mt-10 grid grid-cols-5 grid-rows-4 gap-y-12"
          >
            { Steps.map((value, index) =>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2 * (index + 1),
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                key={index}
                className={index % 2 == 0 ? "col-span-3" : "col-span-3 col-start-3"}
              >
                <h1
                  className={`${index % 2 && "text-right"} text-2xl text-background font-bold`}
                >{value.title}</h1>
                <p
                  className="px-2 py-4 text-lg text-foreground font-semibold bg-linear-to-br from-stone-400 to-background border border-background rounded-2xl"
                >{value.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </SectionGradBG>
    </LayoutPages>
  )
}

export default HalamanBeranda
