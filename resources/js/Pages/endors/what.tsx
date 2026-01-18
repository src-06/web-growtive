import { motion } from "framer-motion";
import { ApplicationProcess } from "./partials/applicationProcess";

export function WhatSection() {
  return (
    <section
      id="WhatSection"
      className="relative w-full h-full -mt-10 pt-25 pb-10 bg-linear-to-tl from-white to-[#999797] rounded-t-[3rem]"
    >
      <div
        className="absolute top-10 left-[calc(1/2*100%-40%)]"
      >
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          src="/assets/images/endors/about1.png"
          alt="endors1"
          className="z-0 relative top-10 left-10 w-55"
        />
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "backInOut"
          }}
          src="/assets/images/endors/about2.png"
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
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
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
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "backInOut"
          }}
          className="w-130 h-fit mt-13 ml-18 px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
        >
          <h1
            className="mb-4 text-lg font-bold"
          >Mengapa Endorsment?</h1>
          <p>Kami menawarkan layanan dukungan untuk membantu bisnis memanfaatkan kekuatan tokoh berpengaruh dan suara tepercaya untuk meningkatkan reputasi merek, memperluas jangkauan, dan mendorong pertumbuhan bisnis. Kami bekerja sama dengan anda untuk mengidentifikasi endorser yang tepat yang selaras dengan nilai dan tujuan merek anda, memastikan dampak dan kesuksesan maksimum.objectives, ensuring maximum impact and success.</p>
        </motion.div>
      </div>
      <div className="pt-200"></div>
      <div
        className="py-12 text-bg"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: -40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          className="ml-20 text-5xl font-bold"
        >Proses Pengaplikasian</motion.h1>
        <ApplicationProcess />
      </div>
      <div
        className="mt-25 pb-30 flex justify-center items-center"
      >
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            ease: "backInOut"
          }}
          src="/assets/images/endors/contact-us.svg"
          alt="endors-d"
          className="w-[80%]"
        />
      </div>
    </section>
  )
}
