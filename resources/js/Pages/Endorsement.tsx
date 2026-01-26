import { motion } from "framer-motion"
import { Link, usePage } from "@inertiajs/react"
import { ApplicationProcess, LayoutPages, SectionGradBG } from "@/Components"
import { basePath } from "@/Config/env"

const HalamanEndorsement = () => {
  const { contact } = usePage().props
  return (
    <LayoutPages>
      <section
        className="relative w-full h-dvh flex items-center overflow-hidden"
      >
        <img
          src={`${basePath}/images/bg/endors.svg`}
          alt="Background Endorsement"
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
              className="text-5xl font-bold"
            >Endorsmen with influencer</motion.h1>
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
            >Kami memanfaatkan pengaruh influencer yang tepat untuk membuat produk Anda dipercaya lebih cepat, dibicarakan lebih luas, dan mendorong audiens langsung ke tindakan pembelian.</motion.p>
          </div>
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
              delay: 0.6,
              duration: 0.6,
              ease: 'backInOut',
            }}
            src={`${basePath}/images/endors/hero.png`}
            alt="endors"
            className="w-[40%]"
          />
        </div>
      </section>

      <SectionGradBG
        className="h-full"
      >
        <div
          className="relative pb-220"
        >
          <div
            className="absolute top-10 left-[calc(1/2*100%-40%)]"
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
                duration: 0.6,
                ease: 'backInOut',
              }}
              src={`${basePath}/images/endors/about1.png`}
              alt="endors1"
              className="z-0 relative top-10 left-10 w-55"
            />
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
              src={`${basePath}/images/endors/about2.png`}
              alt="endors2"
              className="z-1 relative top-0 left-30 w-55"
            />
          </div>
          <div
            className="absolute top-20 left-[calc(1/2*100%-7%)] text-bg"
          >
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
                delay: 0.2,
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="w-130 h-fit px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
            >
              <h1
                className="mb-4 text-lg font-bold"
              >Apa itu Endorsment?</h1>
              <p>Endorsement adalah suatu bentuk promosi dimana seorang individu yang sering dikenal sebagai endorser atau influencer, membagikan pendapat atau rekomendasi positif mereka tentang suatu produk atau layanan, yang dapat berdampak signifikan pada persepsi audiens dan proses pengambilan keputusan.</p>
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
              className="w-130 h-fit mt-13 ml-18 px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
            >
              <h1
                className="mb-4 text-lg font-bold"
              >Mengapa Endorsment?</h1>
              <p>Kami menawarkan layanan dukungan untuk membantu bisnis memanfaatkan kekuatan tokoh berpengaruh dan suara tepercaya untuk meningkatkan reputasi merek, memperluas jangkauan, dan mendorong pertumbuhan bisnis. Kami bekerja sama dengan anda untuk mengidentifikasi endorser yang tepat yang selaras dengan nilai dan tujuan merek anda, memastikan dampak dan kesuksesan maksimum.objectives, ensuring maximum impact and success.</p>
            </motion.div>
          </div>
        </div>
        <div
          className="py-12 text-bg"
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
            className="ml-20 text-5xl font-bold"
          >Proses Pengaplikasian</motion.h1>
          <ApplicationProcess />
        </div>
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
          className="mt-25 pb-30 flex justify-center items-center"
        >
          <Link
            as="button"
            onClick={() => window.open(contact.url_wa, '_blank')}
            className="w-[80%]"
          >
            <img
              src={`${basePath}/images/endors/contact-us.svg`}
              alt="Contact Us"
              className="w-full"
            />
          </Link>
        </motion.div>
      </SectionGradBG>
    </LayoutPages>
  )
}

export default HalamanEndorsement
