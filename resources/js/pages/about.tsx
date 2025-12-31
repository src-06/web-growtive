import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"

export default function About() {
  return (
    <Layouts>
      <Head title="Tentang Kami" />

      <section
        id="HeroSection"
        className="relative bg-linear-to-r from-bg to-fg"
      >
        {/* NOTE: Backgrounds */}
        <div className="z-1 absolute -top-20 -left-20 w-120 h-70 -rotate-25 bg-linear-to-b from-bg via-[#333] to-[#666] rounded-[240px/140px]" />
        <div className="z-1 absolute bottom-[20dvh] right-0 w-85 h-70 bg-linear-to-b from-fg to-[#555] rounded-l-4xl" />

        {/* NOTE: Contents */}
        <div
          className="w-[90%] h-dvh mx-auto flex justify-evenly items-center gap-36"
        >
          <h1
            className="text-7xl font-bold uppercase"
          >Tentang kami</h1>
          <img
            src="/assets/images/about/hero.png"
            alt="about-hero"
            className="z-10 w-85"
          />
        </div>
      </section>

      <section
        id="AboutSection"
        className="-z-50 relative w-full h-screen bg-linear-to-br from-fg via-[#999] to-[#555]"
      >
        {/* NOTE: Backgrounds */}
        <div className="absolute -top-20 -left-20 w-120 h-70 -rotate-25 bg-[#cacaca] rounded-[240px/140px]" />

        {/* NOTE: Contents */}
        <div
          className="w-[90%] mx-auto h-full flex justify-evenly items-center gap-10"
        >
          <div
            className="z-0 w-140"
          >
            <p
              className="p-10 flex justify-center items-center text-bg text-shadow-sm text-shadow-bg/40 text-justify font-semibold bg-[#D9D9D9]/60 uppercase border-2 border-bg rounded-2xl"
            >Growdience Creative adalah Industri kreatif yang didirikan pada tahun 2025 dengan komitmen kuat untuk mendorong pertumbuhan bisnis melalui strategi digital yang inovatif. Pendirian Growdience terinspirasi dari dinamika industri kreatif dan kebutuhan mendesak UMKM Indonesia untuk beradaptasi serta unggul di ranah digital, sejalan dengan visi agensi terkemuka di sektor ini.</p>
          </div>
          <img
            src="/assets/images/about/profile.jpg"
            alt="about-hero"
            className="w-70 rounded-2xl"
          />
        </div>
      </section>

      <section
        id="VMSection"
        className="relative w-full h-screen flex justify-center items-center bg-linear-to-l from-[#555] to-fg"
      >
        {/* NOTE: Backgrounds */}
        <div className="w-[60%] h-[61%] bg-fg rounded-2xl" />
        <img
          src="assets/images/about/visi-misi.png"
          alt="about-vm"
          className="absolute bottom-0 left-0 w-[25%]"
        />

        {/* NOTE: Contents */}
        <div
          className="absolute top-0 w-full h-full p-20 flex flex-col justify-center items-center gap-10"
        >
          <h1
            className="text-4xl text-bg font-bold"
          >VISI & MISI</h1>
          <div
            className="mb-22 flex gap-4 text-bg"
          >
            <div
              className="h-fit p-8 bg-white/80 shadow shadow-bg/30 rounded-3xl"
            >
              <h1>VISI</h1>
              <p>Menjadi mitra strategis terdepan dalam transformasi digital dan branding bagi pelaku usaha di Indonesia.</p>
            </div>
            <div
              className="p-8 bg-white/80 shadow shadow-bg/30 rounded-3xl"
            >
              <h1>MISI</h1>
              <ul
                className="ml-4 list-disc"
              >
                <li>Menyediakan layanan manajemen media sosial yang efektif untuk meningkatkan visibilitas dan omset UMKM.</li>
                <li>Membangun citra dan ekuitas merek yang kuat melalui strategi branding yang terpersonalisasi.</li>
                <li>Mengembangkan ekosistem kolaborasi yang saling menguntungkan antara merek, perusahaan ternama, dan talent di industri kreatif.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="WorkSection"
        className="w-full h-full py-16 bg-fg text-bg"
      >
        <div
          className="w-[90%] h-full mx-auto pt-8 pb-20 flex flex-wrap justify-center items-center gap-10"
        >
          <div
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
          </div>
          <div
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
          </div>
          <div
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
          </div>
        </div>
      </section>
    </Layouts>
  )
}
