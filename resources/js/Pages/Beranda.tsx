import { Background, LayoutPages, SectionGradBG } from "@/Components"
import { FaChevronRight, FaInstagram, FaTiktok } from "react-icons/fa6"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { basePath } from "@/Config/env"
import { Article, PaginatedProps, Testimonial } from "@/Types"
import { toLocalDate } from "@/Lib/util"

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

const HalamanBeranda = ({ articles, testimonials }: { articles: PaginatedProps<Article>; testimonials: PaginatedProps<Testimonial> }) => {
  return (
    <LayoutPages>
      <section
        className="relative w-full h-dvh flex justify-center items-center"
      >
        <img
          src={`${basePath}/images/bg/home.svg`}
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
              href={`${basePath}/TentangKami`}
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
                href={`${basePath}/Endorsement`}
                className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-background rounded-3xl"
              >
                <h1
                  className="mt-4 text-2xl font-bold"
                >Endorsement</h1>
                <img
                  src={`${basePath}/images/endors/service.png`}
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
                href={`${basePath}/PengelolaanAkunMedsos`}
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
          className="w-full h-fit pt-20 pb-20 flex flex-col items-center"
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

      { articles.data.length > 0 &&
        <SectionGradBG
          className="h-full py-20 text-foreground from-[#666666] to-foreground"
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
            className="text-3xl text-center text-background uppercase"
          >Artikel <span className="font-bold">Kami</span></motion.h1>
          <div
            className="mt-10 flex flex-col gap-y-10"
          >
            { articles.data.map(article =>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                key={article.id_article}
                className="p-6 flex items-center gap-x-4 bg-background/70 shadow-xl shadow-background/50 rounded-3xl"
              >
                <img
                  src={basePath+"/"+article.thumbnail}
                  alt={"Tumbnail "+article.title}
                  className="w-[20%] h-auto shadow-md shadow-background rounded-2xl"
                />
                <div
                  className="w-[80%]"
                >
                  <Link
                    as="button"
                    href={basePath+"/Artikel/"+article.id_article}
                    className="text-2xl text-left font-semibold"
                  >{article.title}</Link>
                  <div
                    className="flex justify-between items-start"
                  >
                    <p
                      className="text-sm text-foreground/80"
                    >
                      Oleh:{" "}
                      <span
                        className="font-semibold"
                      >{article.user.name}</span>
                    </p>
                    <div
                      className="flex flex-col text-xs"
                    >
                      <span>Dibuat pada: {toLocalDate({ISO_date: article.created_at})}</span>
                      <span>Diedit pada: {toLocalDate({ISO_date: article.updated_at})}</span>
                    </div>
                  </div>
                  <p className="text-pretty indent-8 tracking-wider">
                    { article.body.slice(0, 300).split('\n').map((paragraph, index) => index === 0 &&
                      <span key={index}>{paragraph}</span>
                    )}{"... "}
                    <Link
                      as="button"
                      href={basePath+"/Artikel/"+article.id_article}
                      className="font-semibold underline opacity-65 hover:opacity-100 transition-all duration-300"
                    >Lihat artikel.</Link>
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </SectionGradBG>
      }

      { testimonials.data.length > 0 &&
        <SectionGradBG
          className="h-fit"
        >
          <div
            className="w-full h-fit pt-20 pb-30 flex flex-col justify-center items-center"
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
            >Cerita <span className="font-bold">Klien</span></motion.h1>
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
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="w-full"
            >
              <Background
                className="w-full h-fit mt-10 p-4 flex flex-col gap-y-2"
              >
                { testimonials.data.map(testimonial =>
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
                      delay: 0.3,
                      duration: 0.6,
                      ease: 'backInOut',
                    }}
                    key={testimonial.id}
                    className="w-full h-full flex gap-x-2 text-background bg-foreground rounded-2xl"
                  >
                    <img
                      src={basePath+"/"+testimonial.profile}
                      alt={`Profile ${testimonial.name}`}
                      className="w-[10%] h-fit m-4 shadow-md shadow-background rounded-full"
                    />
                    <div
                      className="w-[90%] h-full my-2 mr-2 flex flex-col gap-y-2"
                    >
                      <div
                        className="w-full h-[20%]"
                      >
                        <h1
                          className="text-2xl font-bold"
                        >{testimonial.name}</h1>
                        <h2
                          className="text-sm"
                        >Dari perusahaan <span className="text-background/70 font-bold">{testimonial.company}</span></h2>
                      </div>
                      <div
                        className="w-full h-[80%]"
                      >
                        <p
                          className="p-4 bg-white border shadow rounded-2xl"
                        >{testimonial.testimonial}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </Background>
            </motion.div>
          </div>
        </SectionGradBG>
      }
    </LayoutPages>
  )
}

export default HalamanBeranda
