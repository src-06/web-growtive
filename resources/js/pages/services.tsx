import { Head, Link } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { Card } from "@/components/services/card"
import { CardPaket } from "@/components/services/card-paket"
import { Card2 } from "@/components/services/card2"

export default function Services() {
  return (
    <Layouts>
      <Head title="Pengelola Akun Media Sosial" />

      <section
        id="HeroSection"
        className="relative flex justify-center items-center gap-12 overflow-hidden"
      >
        <img
          src="/assets/images/bg/endors.svg"
          alt="bg-endors"
          className="-z-50 absolute -left-0.5 w-full scale-101"
        />
        <div
          className="w-[90%] h-dvh mx-auto flex justify-center items-center gap-30"
        >
          <div
            className="w-150"
          >
            <h1
              className="text-5xl font-bold"
            >Pengelolaan Media Sosial</h1>
            <div
              className="w-75 mt-10 text-lg"
            >Solusi kreatif yang mempercepat perjalanan konsumen dari <p>lihat → tertarik → beli.</p></div>
          </div>
          <img
            src="/assets/images/services/hero.png"
            alt="services"
            className="w-100 rounded-4xl"
          />
        </div>
      </section>

      <section
        id="AboutSection"
        className="w-full h-full -mt-10 pt-25 pb-10 bg-linear-to-tl from-white to-[#999797] rounded-t-[3rem]"
      >
        <div
          className="w-[90%] mx-auto grid grid-cols-2 grid-rows-2 text-bg"
        >
          <div
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="assets/images/services/about1.png"
              alt="services-about1"
              className="w-70 rounded-full"
            />
          </div>
          <div
            className="p-8 flex flex-col gap-y-3"
          >
            <h1
              className="text-2xl font-bold"
            >Apa Itu Social Media?</h1>
            <p>Social Media Management adalah layanan pengelolaan akun media sosial secara strategis untuk membantu bisnis membangun kehadiran digital yang konsisten, relevan, dan berdampak pada pertumbuhan.</p>
            <p>Layanan ini cocok untuk bisnis yang ingin fokus menjalankan operasional, sementara strategi dan eksekusi media sosial ditangani secara konsisten dan terukur.</p>
          </div>
          <div
            className="p-8 flex flex-col gap-y-3"
          >
            <h1
              className="text-2xl font-bold"
            >Kenapa Social Media Management Penting?</h1>
            <p>Tanpa pengelolaan yang tepat, media sosial hanya menjadi aktivitas rutin tanpa hasil yang jelas. Dengan strategi yang terarah, media sosial menjadi aset yang mendukung pertumbuhan bisnis jangka panjang.</p>
          </div>
          <div
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src="assets/images/services/about2.png"
              alt="services-about2"
              className="w-70 rounded-full"
            />
          </div>
        </div>
      </section>

      <section
        id="list-services"
        className="-z-50 w-full h-screen bg-linear-to-br from-white to-[#999797] text-white text-center font-semibold uppercase"
      >
        <div
          className="relative w-[90%] h-full mx-auto px-6 flex justify-evenly items-center gap-12"
        >
          <div className="absolute bottom-0 w-full h-[50vh] bg-linear-to-r from-[#DEDEDE] to-[#313131] border border-[#999797] opacity-55 rounded-t-[3rem]" ></div>
          <h1
            className="absolute top-15 text-4xl text-bg font-normal"
          ><span className="font-bold">Konten Media sosial</span> untuk semua platform</h1>
          <div
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src="assets/images/services/ig.svg"
              alt="services-ig"
              className="h-20 -mt-10"
            />
            <h1
              className="text-2xl font-bold"
            >Konten Instagram</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              href="#instagram"
              className="w-[70%] py-3 uppercase text-bg bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </div>
          <div
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src="assets/images/services/tt.svg"
              alt="services-ig"
              className="h-20 -mt-10 bg-white rounded-2xl"
            />
            <h1
              className="text-2xl font-bold"
            >Konten Instagram</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              href="#tiktok"
              className="w-[70%] py-3 uppercase text-bg bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </div>
          <div
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src="assets/images/services/ig-tt.svg"
              alt="services-ig"
              className="h-20 -mt-10"
            />
            <h1
              className="text-2xl font-bold"
            >Konten Instagram</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              href="#instagram_tiktok"
              className="w-[70%] py-3 uppercase text-bg bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </div>
        </div>
      </section>

      <section
        id="PaketSection"
        className="w-full h-full pt-20 pb-40 bg-linear-to-br from-white to-[#999797]"
      >
        <div
          className="w-[90%] mx-auto flex flex-col items-center gap-30 text-bg"
        >
          <h1
            className="text-4xl font-semibold uppercase"
          >Paket Kami</h1>
          <Card
            icon="ig"
            id="instagram"
            nama="Instagram"
            detail="Harga Kelola Feed & Story Instagram"
            count={6}
          >
            <CardPaket
              paket="Hanya Feed Dan Story"
              price1="499k/bulan"
            >
              <li>12 konten feed</li>
              <li>3 konten story</li>
              <li>2 revisi minor</li>
              <li>2 template story</li>
              <li>riset hashtag</li>
              <li>ide konten</li>
              <li>konten terjadwal</li>
            </CardPaket>
            <CardPaket
              paket="Social Feed"
              price1="999k/bulan"
            >
              <li>18 konten feed</li>
              <li>10 konten story</li>
              <li>3 revisi minor</li>
              <li>3 template story</li>
              <li>riset hashtag</li>
              <li>ide konten</li>
              <li>konten terjadwal</li>
              <li>kelola akun (posting)</li>
              <li>caption dan copywriting</li>
            </CardPaket>
            <CardPaket
              paket="Crazy Rich Feed"
              price1="1.699k/bulan"
            >
              <li>24 konten feed</li>
              <li>15 konten story</li>
              <li>5 revisi minor</li>
              <li>3 template story</li>
              <li>riset hashtag</li>
              <li>ide konten</li>
              <li>konten terjadwal</li>
              <li>caption dan copywriting</li>
              <li>kelola akun (posting)</li>
              <li>optimasi akun</li>
              <li>laporan bulanan</li>
            </CardPaket>
            <CardPaket
              paket="BPJS FR"
              price1="1.999k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>8 konten feed</li>
              <li>4 konten reels</li>
              <li>6 konten story interaksi</li>
              <li>voice over konten</li>
              <li>1 talent (random)</li>
              <li>durasi 15-30 detik</li>
              <li>3 kali revisi minor</li>
              <li>riset hashtag</li>
              <li>jadwal posting</li>
            </CardPaket>
            <CardPaket
              paket="Sosialita FR"
              price1="2.499k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>16 konten feed</li>
              <li>6 konten reels</li>
              <li>10 konten story interaksi</li>
              <li>voice over konten</li>
              <li>1 talent (random)</li>
              <li>durasi 30-60 detik</li>
              <li>3 kali revisi minor</li>
              <li>riset hashtag</li>
              <li>jadwal posting</li>
              <li>laporan bulanan</li>
              <li>setup boost post ads</li>
              <li>balas komen dan dm</li>
            </CardPaket>
            <CardPaket
              paket="Crazy Rich Feed"
              price1="3.199k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>16 konten feed</li>
              <li>12 konten reels</li>
              <li>15 konten story interaksi</li>
              <li>voice over konten</li>
              <li>1 talent (random)</li>
              <li>durasi 15-30 detik</li>
              <li>3 kali revisi minor</li>
              <li>riset hashtag</li>
              <li>jadwal posting</li>
              <li>laporan bulanan</li>
              <li>setup boost post ads</li>
              <li>balas komen dan dm</li>
            </CardPaket>
          </Card>
          <Card
            icon="tt"
            id="tiktok"
            nama="Tiktok"
            detail="Harga Kelola Video Tiktok"
            count={3}
          >
            <CardPaket
              paket="Harga Bawah"
              price1="1.499k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>6 konten tiktok</li>
              <li>Voice Over content</li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 30 detik</li>
              <li>3x Revisi Minor</li>
              <li>Jadwal Posting</li>
            </CardPaket>
            <CardPaket
              paket="Harga Menengah"
              price1="1.999k/bulan"
            >
              <li>15 Konten tiktok</li>
              <li>Voice Over content </li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 30 detik</li>
              <li>3x Revisi Minor</li>
              <li>Riset Hastag</li>
              <li>Jadwal Posting</li>
              <li>Caption & Copywritting </li>
              <li>Riset Hashtag</li>
              <li>Laporan Bulanan</li>
              <li>Setup Boost Post Ads</li>
              <li>Balas Komen & DM</li>
            </CardPaket>
            <CardPaket
              paket="Harga Highclass"
              price1="2.699k/bulan"
            >
              <li>20 Konten tiktok</li>
              <li>Voice Over content </li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 60 detik</li>
              <li>3x Revisi Minor</li>
              <li>Riset Hastag</li>
              <li>Jadwal Posting</li>
              <li>Caption & Copywritting</li>
              <li>Riset Hashtag</li>
              <li>Laporan Bulanan</li>
              <li>Setup Boost Post Ads</li>
              <li>Balas Komen & DM</li>
            </CardPaket>
          </Card>
          <Card2
            id="instagram_tiktok"
            count={3}
          >
            <CardPaket
              paket="Harga Minimal"
              price1="3.499k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>8 Short Video/Reels/Tiktok</li>
              <li>Voice Over content</li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 30 detik</li>
              <li>3x Revisi Minor</li>
              <li>10 Feed Image/Carousel</li>
              <li>10 Story Interaksi</li>
              <li>Riset Hastag</li>
            </CardPaket>
            <CardPaket
              paket="Harga Menengah"
              price1="3.999k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>12 Short Video/Reels/Tiktok</li>
              <li>Voice Over content</li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 60 detik</li>
              <li>3x Revisi Minor</li>
              <li>15 Feed Image/Carousel</li>
              <li>10 Story Interaksi</li>
              <li>Riset Hastag</li>
            </CardPaket>
            <CardPaket
              paket="Harga Highclass"
              price1="4.699k/bulan"
              price2="(minimal order 3 bulan)"
            >
              <li>16 Short Video/Reels/Tiktok</li>
              <li>Voice Over content</li>
              <li>1 Talent Random</li>
              <li>Durasi 15 - 60 detik</li>
              <li>3x Revisi Minor</li>
              <li>20 Feed Image/Carousel</li>
              <li>15 Story Interaksi </li>
              <li>Riset Hastag</li>
            </CardPaket>
          </Card2>
        </div>
      </section>
    </Layouts>
  )
}
