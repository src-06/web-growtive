import { Link, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaChevronDown, FaInstagram, FaTiktok } from "react-icons/fa6"
import logo from "~/images/logo.png"

const Headers = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.7,
        ease: 'backInOut',
      }}
      className="z-50 absolute top-0 w-full h-18 px-14 flex justify-between items-center"
    >
      <div
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Logo Growdience Creative"
          className="w-25 drop-shadow-[0_0_2px] drop-shadow-background rounded-full"
        />
      </div>
      <NavBtn />
      <div
        className="flex gap-4"
      >
        <Link
          as="button"
          onClick={() => window.open('https://www.instagram.com/growdience.creative?igsh=MXhwMDdqeTNsd2tkeA%3D%3D&utm_source=qr', '_blank')}
        ><FaInstagram size={30} /></Link>
        <Link
          as="button"
          onClick={() => window.open('https://www.tiktok.com/@growdience.creati?_r=1&_t=ZS-93GHT8LJgnN', '_blank')}
        ><FaTiktok size={30} /></Link>
      </div>
    </motion.header>
  )
}

interface NavMenusProps {
  title: string
  url?: string
  submenu?: {
    title: string
    url: string
  }[]
}

const NavMenus: NavMenusProps[] = [
  {
    title: "Beranda",
    url: "/",
  },
  {
    title: "TentangKami",
    url: "/TentangKami",
  },
  {
    title: "Layanan",
    submenu: [
      {
        title: "Endorsement",
        url: "/Endorsement",
      },
      {
        title: "Pengelolaan Akun Medsos",
        url: "/PengelolaanAkunMedsos",
      },
    ],
  },
  {
    title: "Artikel",
    url: "/Artikel",
  },
  {
    title: "Kontak Kami",
    url: "https://wa.wizard.id/ac9290",
  },
]

const NavBtn = ({ orientation = 'vertical' }: { orientation?: 'vertical' | 'horizontal' }) => {
  const [ dropdown, setDropdown ] = useState(false),
    { url } = usePage(),
    horiz = orientation === 'horizontal'

  return (
    <nav
      className={`flex ${ horiz ? "flex-col gap-1 [&>button]:text-left" : "gap-4" }`}
    >
      { NavMenus.map(menu => {
        if (menu.submenu) {
          return (
            <div
              key={menu.title}
              className="relative"
            >
              <button
                onClick={() => setDropdown(!dropdown)}
                className="w-full nav-btn"
              >
                <span
                  className={`flex items-center gap-2 ${ dropdown && "[&>svg]:-rotate-90" }`}
                >
                  {menu.title}
                  <FaChevronDown size={16} />
                </span>
              </button>
              { dropdown &&
                <div
                  className={`absolute left-1/2 ${ horiz ? "top-1/2 -translate-y-1/2 translate-x-1/3" : "top-10 -translate-x-1/2" } flex flex-col bg-background/30 rounded-lg`}
                >
                  { menu.submenu.map(sub =>
                    <Link
                      key={sub.title}
                      as="button"
                      href={sub.url}
                      className={`px-3 py-1 text-left text-nowrap ${ url === sub.url && "font-bold" } hover:bg-background/20 ${ sub.title === "Endorsement" ? "rounded-t-lg" : "rounded-b-lg" }`}
                    >{sub.title}</Link>
                  )}
                </div>
              }
            </div>
          )
        }

        if (menu.title === "Kontak Kami") {
          return (
            <Link
              key={menu.title}
              as="button"
              onClick={() => window.open(menu.url, '_blank')}
              className={`nav-btn ${ url === menu.url && "font-bold" }`}
            >{menu.title}</Link>
          )
        }

        return (
          <Link
            key={menu.title}
            as="button"
            href={menu.url}
            className={`nav-btn ${ url === menu.url && "font-bold" }`}
          >{menu.title}</Link>
        )
      })}
    </nav>
  )
}

export { Headers, NavBtn }
