import { basePath } from "@/Config/env"
import { Link, usePage } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaChevronRight, FaInstagram, FaTiktok } from "react-icons/fa6"

const Headers = () => {
  const { contact } = usePage().props

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
          src={`${basePath}/images/logo.png`}
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
          onClick={() => window.open(contact.url_ig, '_blank')}
        ><FaInstagram size={30} /></Link>
        <Link
          as="button"
          onClick={() => window.open(contact.url_tt, '_blank')}
        ><FaTiktok size={30} /></Link>
      </div>
    </motion.header>
  )
}

const NavBtn = ({ orientation = 'vertical' }: { orientation?: 'vertical' | 'horizontal' }) => {
  const [dropdown, setDropdown] = useState(false),
    { url, props } = usePage(),
    horiz = orientation === 'horizontal',
    menus = props.menus

  return (
    <nav
      className={`flex ${horiz ? "flex-col gap-1 [&>button]:text-left" : "gap-4"}`}
    >
      {menus.map(menu => {
        if (menu.id <= 5) {
          if (menu.submenu?.length) {
            return (
              <div
                key={menu.id}
                className="relative"
              >
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="w-full nav-btn"
                >
                  <span
                    className={`flex ${horiz && "justify-between"} items-center gap-2`}
                  >
                    {menu.name}
                    <FaChevronRight size={16} className={`${dropdown && !horiz && "rotate-90"} ${!dropdown && horiz && "rotate-90" || dropdown && horiz && "rotate-0"} transition-transform duration-300`} />
                  </span>
                </button>
                {dropdown &&
                  <div
                    className={`absolute left-1/2 ${horiz ? "top-1/2 -translate-y-1/2 translate-x-1/3" : "top-10 -translate-x-1/2"} flex flex-col bg-background/30 rounded-lg`}
                  >
                    {menu.submenu.map(sub =>
                      <Link
                        key={sub.name}
                        as="button"
                        href={basePath + sub.url}
                        className={`px-3 py-1 text-left text-nowrap ${url === sub.url && "font-bold"} hover:bg-background/20 ${sub.name === "Endorsement" ? "rounded-t-lg" : "rounded-b-lg"}`}
                      >{sub.name}</Link>
                    )}
                  </div>
                }
              </div>
            )
          }

          if (menu.contact) {
            return (
              <Link
                key={menu.id}
                as="button"
                onClick={() => window.open(menu.contact?.url_wa, '_blank')}
                className="nav-btn"
              >{menu.name}</Link>
            )
          }

          return (
            <Link
              key={menu.id}
              as="button"
              href={basePath + menu.url}
              className={`nav-btn ${url === (basePath + menu.url) && "font-bold"}`}
            >{menu.name}</Link>
          )
        }

        return (
          <Link
            key={menu.id}
            as="button"
            onClick={() => window.open(menu.url, '_blank')}
            className={`nav-btn`}
          >{menu.name}</Link>
        )
      })}
    </nav>
  )
}

export { Headers, NavBtn }
