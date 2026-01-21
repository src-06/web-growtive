import { Link } from "@inertiajs/react";

export function ListService() {
  return (
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
  )
}
