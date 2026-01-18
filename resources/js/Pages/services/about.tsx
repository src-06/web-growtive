
export function AboutSection() {
  return (
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
            className="w-70 rounded-[504px/442px]"
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
            className="w-70 rounded-[517px/471px]"
          />
        </div>
      </div>
    </section>
    )
}
