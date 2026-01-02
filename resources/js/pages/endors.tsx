import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { LuChevronDown } from "react-icons/lu"
import { useEffect } from "react"

export default function Endors() {
  return (
    <Layouts>
      <Head title="Endorsement" />

      <section
        id="HeroSection"
        className="relative w-full h-dvh flex items-center overflow-hidden"
      >
        <img
          src="/assets/images/bg/endors.svg"
          alt="bg-endors"
          className="-z-50 absolute -left-0.5 w-full scale-101"
        />
        <div
          className="w-[90%] h-full mt-20 mx-auto flex justify-evenly items-center gap-20"
        >
          <div
            className="w-[40%] flex flex-col gap-10"
          >
            <h1
              className="text-5xl font-bold"
            >Endorsmen with influencer</h1>
            <p>Kami memanfaatkan pengaruh influencer yang tepat untuk membuat produk Anda dipercaya lebih cepat, dibicarakan lebih luas, dan mendorong audiens langsung ke tindakan pembelian.</p>
          </div>
          <img
            src="/assets/images/endors/hero.png"
            alt="endors"
            className="w-[40%]"
          />
        </div>
      </section>

      <section
        id="WhatSection"
        className="relative w-full h-full -mt-10 pt-25 pb-10 bg-linear-to-tl from-white to-[#999797] rounded-t-[3rem]"
      >
        <div
          className="absolute top-10 left-[calc(1/2*100%-40%)]"
        >
          <img
            src="/assets/images/endors/about1.png"
            alt="endors1"
            className="z-0 relative top-10 left-10 w-55"
          />
          <img
            src="/assets/images/endors/about2.png"
            alt="endors2"
            className="z-1 relative top-0 left-30 w-55"
          />
        </div>
        <div
          className="absolute top-20 left-[calc(1/2*100%-7%)] text-bg"
        >
          <div
            className="w-130 h-fit px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
          >
            <h1
              className="mb-4 text-lg font-bold"
            >Apa itu Endorsment?</h1>
            <p>Endorsement adalah suatu bentuk promosi dimana seorang individu yang sering dikenal sebagai endorser atau influencer, membagikan pendapat atau rekomendasi positif mereka tentang suatu produk atau layanan, yang dapat berdampak signifikan pada persepsi audiens dan proses pengambilan keputusan.</p>
          </div>
          <div
            className="w-130 h-fit mt-13 ml-18 px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
          >
            <h1
              className="mb-4 text-lg font-bold"
            >Mengapa Endorsment?</h1>
            <p>Kami menawarkan layanan dukungan untuk membantu bisnis memanfaatkan kekuatan tokoh berpengaruh dan suara tepercaya untuk meningkatkan reputasi merek, memperluas jangkauan, dan mendorong pertumbuhan bisnis. Kami bekerja sama dengan anda untuk mengidentifikasi endorser yang tepat yang selaras dengan nilai dan tujuan merek anda, memastikan dampak dan kesuksesan maksimum.objectives, ensuring maximum impact and success.</p>
          </div>
        </div>
        <div className="pt-200"></div>
        <div
          className="py-12 text-bg"
        >
          <h1
            className="ml-20 text-5xl font-bold"
          >Proses Pengaplikasian</h1>
          <ApplicationProcess />
        </div>
        <div
          className="mt-25 pb-30 flex justify-center items-center"
        >
          <img
            src="/assets/images/endors/contact-us.svg"
            alt="endors-d"
            className="w-[80%]"
          />
        </div>
      </section>
    </Layouts>
  )
}

interface ProcessProps {
  title: string
  img: string
  detail: string
}

const process: ProcessProps[] = [
  {
    title: "Konsultasi",
    img: "konsultasi.png",
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Negosiasi Kebutuhan",
    img: "negosiasi.png",
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Pengerjaan & Revisi",
    img: "pengerjaan.png",
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Publish",
    img: "publish.png",
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
]

function ApplicationProcess() {
  useEffect(() => {
    for (let id = 0; id < process.length; id++) {
      const detail = document.getElementById("detail-"+id)
      const button = document.getElementById("button-"+id)

      button?.addEventListener("click", () => {
        if (detail?.classList.contains("h-0")) {
          detail.classList.remove("h-0")
          detail.classList.add("h-full")
        } else {
          detail?.classList.remove("h-full")
          detail?.classList.add("h-0")
        }

        if (detail?.classList.contains("opacity-0")) {
          detail.classList.remove("opacity-0")
          detail.classList.add("opacity-100")
        } else {
          detail?.classList.remove("opacity-100")
          detail?.classList.add("opacity-0")
        }

        if (button.classList.contains("rotate-180"))
          button.classList.remove("rotate-180")
        else button.classList.add("rotate-180")
      })
    }
  }, [])

  return (
    <div
      className="w-[95%] mt-20 mx-auto grid grid-cols-4 gap-4"
    >
      { process.map((data, index) =>
        <div
          key={index}
          className="relative h-fit p-6 flex flex-col justify-between items-center gap-4 bg-[#D9D9D9] rounded-3xl shadow-xl shadow-bg/30"
        >
          <h1 className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex justify-center items-center text-4xl text-fg font-bold bg-linear-to-b from-bg to-[#9e9e9e] rounded-full p-4">{index+1}</h1>
          <img src={`/assets/images/endors/${data.img}`} alt={data.title} />
          <h2
            className="h-20 text-3xl text-center font-semibold"
          >{data.title}</h2>
          <p
            id={"detail-"+index}
            className="h-0 opacity-0 text-pretty underline"
          >{data.detail}</p>
          <button
            id={"button-"+index}
            className="z-50 cursor-pointer"
          ><LuChevronDown className="size-30" /></button>
        </div>
      )}
    </div>
  )
}
