import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6"

const Headers = () => {
  return (
    <header
      className="z-50 absolute top-0 w-full h-18 px-14 flex justify-between items-center"
    >
      <h1
        className="text-3xl font-bold"
      >Growdience</h1>
      <nav
        className="flex gap-4"
      >
        <button
          className="btn-nav"
        >Beranda</button>
        <button
          className="btn-nav"
        >Layanan</button>
        <button
          className="btn-nav"
        >Tentang Kami</button>
        <button
          className="btn-nav"
        >Kontak Kami</button>
      </nav>
      <div
        className="flex gap-4"
      >
        <FaInstagram size={30} />
        <FaTiktok size={30} />
        <FaLinkedinIn size={30} />
      </div>
    </header>
  )
}

export { Headers }
