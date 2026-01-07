import { motion } from "framer-motion";

export function WorkSection() {
  return (
    <section
      id="WorkSection"
      className="w-full h-full py-16 bg-fg text-bg"
    >
      <div
        className="w-[90%] h-full mx-auto pt-8 pb-20 flex flex-wrap justify-center items-center gap-10"
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
            delay: 0.1,
            duration: 0.5,
            ease: "backInOut"
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
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "backInOut"
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
  )
}
