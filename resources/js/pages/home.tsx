import { Head, Link } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { LuChevronRight } from "react-icons/lu"

export default function Home() {
  return (
    <Layouts>
      <Head title="Beranda" />

      <section
        id="HeroSection"
        className="w-[90%] h-dvh mx-auto pt-40 pb-30 flex justify-center items-center gap-12"
      >
        <img
          src="assets/images/bg/home.svg"
          alt="bg-home"
          className="-z-50 absolute -top-0.5 left-0 w-full"
        />
        <div
          className="w-180 h-100 flex flex-col justify-around text-6xl uppercase"
        >
          <h1
            className="font-serif font-light"
          >Periklanan <div className="font-sans font-black">Melalui Digital</div></h1>
          <h1
            className="italic"
          >Pengelolaan akun media sosial</h1>
          <span
            className="flex items-center"
          >
            <Link
              href="/about"
              className="px-6 py-2 text-base text-bg hover:text-bg bg-fg hover:bg-transparent border-2 border-fg rounded-full transition-all duration-500"
            >Tentang Kami</Link>
            <LuChevronRight className="size-10" />
          </span>
        </div>
      </section>

      <section
        id="AboutUsSection"
        className="w-full h-screen bg-linear-to-tl from-white to-[#999797]"
      >
        <div
          className="w-[90%] h-full mx-auto flex flex-col justify-center items-center"
        >
          <h1
            className="text-3xl text-bg uppercase"
          >Tentang <span className="font-bold">Kami</span></h1>
          <div
            className="mt-30 flex gap-8"
          >
            <img
              src="assets/images/about/profile.jpg"
              alt="profile"
              className="w-70 rounded-2xl"
            />
            <p
              className="px-20 flex justify-center items-center text-bg text-shadow-sm text-shadow-bg/40 text-justify font-semibold bg-[#D9D9D9] uppercase border-2 border-bg rounded-2xl"
            >Growdience Creative adalah mitra strategis Anda dalam membangun dan memperluas audiens brand secara kreatif dan terukur. Kami percaya bahwa iklan yang efektif bukan hanya tentang menjangkau banyak orang, tetapi tentang menumbuhkan komunitas yang setia ("Growing an Audience").</p>
          </div>
        </div>
      </section>

      <section
        id="ServiceSection"
        className="w-full h-screen bg-linear-to-tl from-white to-[#999797]"
      >
        <div
          className="w-[90%] h-full mx-auto flex flex-col justify-center items-center"
        >
          <h1
            className="text-3xl text-bg uppercase"
          >Layanan Yang Kami <span className="font-bold">Tawarkan</span></h1>
          <div
            className="mt-20 w-full flex justify-evenly items-center"
          >
            <Link
              href="/endors"
              className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-bg rounded-3xl"
            >
              <h1
                className="mt-4 text-2xl font-bold"
              >Endorsement</h1>
              <img
                src="assets/images/endors/service.png"
                alt="endorsement"
                className="w-40"
              />
            </Link>
            <Link
              href="/services"
              className="w-60 h-90 flex flex-col items-center bg-linear-to-br from-stone-400 to-bg rounded-3xl"
            >
              <h1
                className="mt-4 text-2xl text-center font-bold"
              >Social Media Management</h1>
              <div
                className="relative mt-6 px-4 grid grid-cols-3 grid-rows-3"
              >
                <hr className="absolute -bottom-8 w-87 h-1 -rotate-45 origin-left bg-fg" />
                <FaInstagram className="col-start-1 col-span-1 size-19" />
                <FaTiktok className="col-start-3 col-span-1 row-start-3 size-19" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="HowToSection"
        className="w-full h-full bg-linear-to-tl from-white to-[#999797]"
      >
        <div
          className="w-[80%] mx-auto pt-20 pb-30 flex flex-col jus items-center"
        >
          <h1
            className="text-3xl text-bg uppercase"
          >Cara Kita <span className="font-bold">Bekerja</span></h1>
          <div
            className="w-full h-full mt-10 grid grid-cols-5 grid-rows-4 gap-y-8"
          >
            <div
              className="col-span-3"
            >
              <h1
                className="text-2xl text-bg font-bold"
              >Konsultasi & Brief Awal</h1>
              <p
                className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
              >Anda mengisi form singkat untuk menjelaskan kebutuhan, tujuan bisnis, dan target audiens. Dari sini, kami menyusun gambaran awal strategi yang paling sesuai.</p>
            </div>
            <div
              className="col-start-3 col-span-3"
            >
              <h1
                className="text-2xl text-bg text-right font-bold"
              >Penentuan Strategi & Kreator</h1>
              <p
                className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
              >Kami memilih konsep konten dan kreator yang relevan dengan brand Anda. Draft konten disiapkan dan diajukan untuk persetujuan sebelum produksi dimulai.</p>
            </div>
            <div
              className="col-span-3"
            >
              <h1
                className="text-2xl text-bg font-bold"
              >Produksi & Penayangan Konten</h1>
              <p
                className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
              >Performa konten dianalisis untuk melihat dampak dan peluang pengembangan. Hasil evaluasi digunakan sebagai dasar optimasi ke depannya.</p>
            </div>
            <div
              className="col-start-3 col-span-3"
            >
              <h1
                className="text-2xl text-bg text-right font-bold"
              >Monitoring & Evaluasi</h1>
              <p
                className="px-2 py-4 text-lg font-semibold bg-linear-to-br from-stone-400 to-bg border border-bg rounded-2xl"
              >Konten diproduksi dan dipublikasikan sesuai jadwal yang telah disepakati. Setiap proses dijalankan secara bertahap dan terkontrol.</p>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  )
}
