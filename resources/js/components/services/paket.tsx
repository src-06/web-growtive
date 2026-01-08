import { Card } from "./partials/card";
import { CardPaket } from "./partials/card-paket";
import { Card2 } from "./partials/card2";

export function PaketService() {
  return (
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
  )
}
