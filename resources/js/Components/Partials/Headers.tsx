import { Link, usePage } from "@inertiajs/react"
import { useState } from "react"
import { FaChevronDown, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6"

const Headers = () => {
  return (
    <header
      className="z-50 absolute top-0 w-full h-18 px-14 flex justify-between items-center"
    >
      <h1
        className="text-3xl font-bold"
      >Growdience</h1>
      <NavBtn />
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

const NavBtn = ({ orientation = 'vertical' }: { orientation?: 'vertical' | 'horizontal' }) => {
  const [ dropdown, setDropdown ] = useState(false),
    { url } = usePage(),
    horiz = orientation === 'horizontal'

  return (
    <nav
      className={`flex ${ horiz ? "flex-col gap-1 [&>button]:text-left" : "gap-4" }`}
    >
      { [ "Beranda", "Layanan", "Tentang Kami" ].map((value, index) =>
        index === 1
        ? <div
            key={index}
            className="relative"
          >
            <button
              onClick={() => setDropdown(!dropdown)}
              className="w-full nav-btn"
            >
              <span
                className={`flex items-center gap-2 ${ dropdown && "[&>svg]:-rotate-90" }`}
              >
                {value}
                <FaChevronDown size={16} />
              </span>
            </button>
            { dropdown &&
              <div
                className={`absolute left-1/2 ${ horiz ? "top-1/2 -translate-y-1/2 translate-x-1/3" : "top-10 -translate-x-1/2" } flex flex-col bg-background/30 rounded-lg`}
              >
                { [ "Endorsement", "Pengelolaan Akun Medsos" ].map((value, index) =>
                  <Link
                    key={index}
                    as="button"
                    href={`/${value.replaceAll(' ', '')}`}
                    className={`px-3 py-1 text-left text-nowrap ${ url === "/"+value.replaceAll(' ', '') && "font-bold" } hover:bg-background/20 ${ index === 0 ? "rounded-t-lg" : "rounded-b-lg" }`}
                  >{value}</Link>
                )}
              </div>
            }
          </div>
        : <Link
            key={index}
            as="button"
            href={`/${value === "Beranda" ? "" : value.replace(' ', '')}`}
            className={`nav-btn ${ url === "/"+(value === "Beranda" ? "" : value.replace(' ', '')) && "font-bold" }`}
          >{value}</Link>
      )}
      <Link
        as="button"
        onClick={() => window.open('https://google.com/', '_blank')}
        className="nav-btn"
      >Kontak Kami</Link>
    </nav>
  )
}

export { Headers, NavBtn }
