import { basePath } from "@/Config/env"
import { LayoutPages, SectionGradBG } from "../Components"
import { motion } from "framer-motion"
import { About } from "@/Types"

const HalamanTentangKami = ({ about }: { about: About }) => {
  return (
    <LayoutPages>
      <SectionGradBG
        className="relative bg-linear-to-br from-background to-foreground"
      >
        {/* NOTE: Background */}
        <div className="absolute -top-40 -left-40 w-160 h-90 -rotate-25 bg-linear-to-b from-background via-[#333] to-[#aaa] to-100% rounded-[640px/360px]" />
        <div className="absolute bottom-[20dvh] right-0 w-85 h-70 bg-linear-to-b from-foreground to-[#555] rounded-l-4xl" />

        {/* NOTE: Content */}
        <div
          className="absolute w-[90%] h-dvh mx-auto flex justify-evenly items-center gap-36"
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
            className="relative w-fit h-fit"
          >
            <img
              src={`${basePath}/images/about/bg-hero.png`}
              alt="about-hero"
              className="w-85"
            />
            <img
              src={basePath+"/"+about.profile_owner}
              alt="about-hero"
              className="absolute bottom-0 z-10 w-85"
            />
          </motion.div>
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
              src={basePath+"/"+about.profile_company}
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
          >{about.description}</motion.p>
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
            src={`${basePath}/images/about/visi-misi.png`}
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
                <p>{about.visi}</p>
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
                  {about.misi.split('\n\n').map((misi, index) => <li key={index}>{misi}</li>)}
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
          { about.goals.map((goal, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2 * index,
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="w-[45%] p-5 bg-white rounded-3xl shadow"
            >
              <h1
                className="text-lg font-semibold"
              >{goal.title}</h1>
              <ul
                className="ml-4 pt-2 list-disc flex flex-col gap-4"
              >
                { goal.text.split('\n\n').map((text, index) =>
                  <li key={index}>{text}</li>
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </section>
    </LayoutPages>
  )
}

export default HalamanTentangKami
