import { Link } from "@inertiajs/react"
import { LayoutPages, SectionGradBG } from "@/Components"

import bgHero from "~/images/bg/endors.svg"
import imgHero from "~/images/services/hero.png"
import imgAbout1 from "~/images/services/about1.png"
import imgAbout2 from "~/images/services/about2.png"
import logoIG from "~/images/services/ig.svg"
import logoTT from "~/images/services/tt.svg"
import logoIG_TT from "~/images/services/ig-tt.svg"

import { Card } from "./services/partials/card"
import { CardPaket } from "./services/partials/card-paket"
import { Card2 } from "./services/partials/card2"
import { motion } from "framer-motion"

const HalamanPengelolaanAkunMedsos = () => {
  return (
    <LayoutPages>
      <section
        className="relative w-full h-dvh flex items-center overflow-hidden"
      >
        <img
          src={bgHero}
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
                duration: 0.6,
                ease: 'backInOut',
              }}
              className="text-5xl font-bold"
            >Pengelolaan Media Sosial</motion.h1>
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
            >Solusi kreatif yang mempercepat perjalanan konsumen dari <p>lihat → tertarik → beli.</p></motion.div>
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
              delay: 0.8,
              duration: 0.6,
              ease: 'backInOut',
            }}
            src={imgHero}
            alt="endors"
            className="w-[40%]"
          />
        </div>
      </section>

      <SectionGradBG>
        <div
          className="pt-10 pb-5 grid grid-cols-2 grid-rows-2 text-background"
        >
          <div
            className="w-full h-full flex justify-center items-center"
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
              src={imgAbout1}
              alt="Image About 1"
              className="w-70 rounded-[504px/442px]"
            />
          </div>
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
            className="p-8 flex flex-col gap-y-3"
          >
            <h1
              className="text-2xl font-bold"
            >Apa Itu Social Media?</h1>
            <p>Social Media Management adalah layanan pengelolaan akun media sosial secara strategis untuk membantu bisnis membangun kehadiran digital yang konsisten, relevan, dan berdampak pada pertumbuhan.</p>
            <p>Layanan ini cocok untuk bisnis yang ingin fokus menjalankan operasional, sementara strategi dan eksekusi media sosial ditangani secara konsisten dan terukur.</p>
          </motion.div>
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
            className="p-8 flex flex-col gap-y-3"
          >
            <h1
              className="text-2xl font-bold"
            >Kenapa Social Media Management Penting?</h1>
            <p>Tanpa pengelolaan yang tepat, media sosial hanya menjadi aktivitas rutin tanpa hasil yang jelas. Dengan strategi yang terarah, media sosial menjadi aset yang mendukung pertumbuhan bisnis jangka panjang.</p>
          </motion.div>
          <div
            className="w-full h-full flex justify-center items-center"
          >
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
                duration: 0.6,
                ease: 'backInOut',
              }}
              src={imgAbout2}
              alt="Image About 2"
              className="w-70 rounded-[517px/471px]"
            />
          </div>
        </div>
      </SectionGradBG>

      <SectionGradBG>
        <div
          className="relative w-[90%] h-full mx-auto px-6 flex justify-evenly items-center gap-12"
        >
          <div className="absolute bottom-0 w-full h-[50vh] bg-linear-to-r from-[#DEDEDE] to-[#313131] border border-[#999797] opacity-55 rounded-t-[3rem]" ></div>
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
            className="absolute top-15 text-4xl text-background font-normal"
          ><span className="font-bold">Konten Media sosial</span> untuk semua platform</motion.h1>
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
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src={logoIG}
              alt="services-ig"
              className="h-20 -mt-10"
            />
            <h1
              className="text-2xl text-center font-bold"
            >Konten Instagram</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              as="button"
              href="#instagram"
              className="w-[70%] py-3 uppercase text-background text-center bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </motion.div>
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
              delay: 0.6,
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src={logoTT}
              alt="services-ig"
              className="h-20 -mt-10 bg-white rounded-2xl"
            />
            <h1
              className="text-2xl text-center font-bold"
            >Konten Tiktok</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              as="button"
              href="#tiktok"
              className="w-[70%] py-3 uppercase text-background text-center bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </motion.div>
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
            className="z-10 pb-2 px-3 flex flex-col justify-center items-center gap-5 bg-[#C4C4C4] border-3 border-white rounded-3xl"
          >
            <img
              src={logoIG_TT}
              alt="services-ig"
              className="h-20 -mt-10"
            />
            <h1
              className="text-2xl text-center font-bold"
            >Konten Instagram & Tiktok</h1>
            <p>Layanan konten dan kelola media sosial Instagram bisnis atau perusahaan anda.</p>
            <Link
              as="button"
              href="#instagram_tiktok"
              className="w-[70%] py-3 uppercase text-background text-center bg-[#FFC00B] hover:opacity-80 rounded-2xl transition-opacity"
            >Lihat Paket</Link>
          </motion.div>
        </div>
      </SectionGradBG>

      <SectionGradBG
        className="h-full"
      >
        <div
          className="h-full py-30 flex flex-col items-center gap-30 text-background"
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
            className="text-4xl font-semibold uppercase"
          >Paket Kami</motion.h1>
          <Card
            icon={logoIG}
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
            icon={logoTT}
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
      </SectionGradBG>
    </LayoutPages>
  )
}

export default HalamanPengelolaanAkunMedsos
