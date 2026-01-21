import { motion } from "framer-motion"
import { useEffect } from "react"
import { LuChevronDown } from "react-icons/lu"
import imgKonsultasi from "~/images/endors/konsultasi.png"
import imgNegosiasi from "~/images/endors/negosiasi.png"
import imgPengerjaan from "~/images/endors/pengerjaan.png"
import imgPublish from "~/images/endors/publish.png"

interface ProcessProps {
  title: string
  img: string
  detail: string
}

const process: ProcessProps[] = [
  {
    title: "Konsultasi",
    img: imgKonsultasi,
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Negosiasi Kebutuhan",
    img: imgNegosiasi,
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Pengerjaan & Revisi",
    img: imgPengerjaan,
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
  {
    title: "Publish",
    img: imgPublish,
    detail: "Konsultasi adalah proseskomunikasi atau pertemuan antara dua pihak atau lebih untuk mendiskusikan, berbagi informasi, dan mencapai keputusan atau solusi terkait suatu masalah atau topik tertentu. Dalam konteks lain, konsultasi juga dapat diartikan sebagai pertukaran pikiran untuk mendapatkan kesimpulan, seperti nasihat atau saran.",
  },
]

export function ApplicationProcess() {
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
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 40 * (index - 2)
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "backInOut"
          }}
          className="relative h-fit p-6 flex flex-col justify-between items-center gap-4 bg-[#D9D9D9] rounded-3xl shadow-xl shadow-background/30"
        >
          <h1 className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex justify-center items-center text-4xl text-foreground font-bold bg-linear-to-b from-background to-[#9e9e9e] rounded-full p-4">{index+1}</h1>
          <img src={data.img} alt={data.title} />
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
        </motion.div>
      )}
    </div>
  )
}
