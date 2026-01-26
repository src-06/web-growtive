import { basePath } from "@/Config/env"
import { Link, router, usePage } from "@inertiajs/react"
import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { LuChevronRight } from "react-icons/lu"
import { route } from "ziggy-js"

interface MenuAdminProps {
  title: string
  url?: string
  submenu?: {
    title: string
    url: string
  }[]
}

const MenuAdmin: MenuAdminProps[] = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Artikel",
    url: "/Artikel",
  },
  {
    title: "Testimoni",
    url: "/Testimoni",
  },
  {
    title: "Users",
    url: "/Users",
  },
  {
    title: "Pengaturan",
    submenu: [
      {
        title: "Tentang Kami",
        url: "/TentangKami",
      },
      {
        title: "Kontak",
        url: "/Kontak",
      },
      {
        title: "Menu",
        url: "/Menu",
      },
    ],
  },
]

const LayoutAdmin = ({ children, title }: { children?: React.ReactNode, title?: string }) => {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const AuthUser = usePage().props.auth.user

  return (
    <div className="w-full h-full flex overflow-hidden">
      <aside
        className="w-80 h-screen px-4 py-6 flex flex-col justify-between bg-background shadow-xl shadow-background rounded-r-[3em]"
      >
        <div>
          <h1
            className="mb-4 text-xl text-center font-bold border-b-2"
          >Growdience Creative</h1>
          <div
            className="flex flex-col gap-2"
          >
            { MenuAdmin.map(menu => {
              if (AuthUser?.role !== "admin" && menu.title === "Users") return
              if (AuthUser?.role === "user" && (menu.title === "Artikel" || menu.title === "Pengaturan")) return

              if (menu.submenu) {
                return (
                  <div
                    key={menu.title}
                  >
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="w-full px-3 py-1 flex justify-between hover:bg-foreground/20 rounded-md"
                    >{menu.title} <LuChevronRight size={20} className={`${menuOpen && "rotate-90"} transition-transform duration-300`} /></button>
                    { menuOpen &&
                      <div
                        className="ml-4"
                      >
                        { menu.submenu.map(sub =>
                          <Link
                            key={sub.title}
                            as="button"
                            href={basePath+"/Admin/"+menu.title+sub.url}
                            className="w-full px-3 py-1 flex justify-between after:content-['→_'] hover:bg-foreground/20 rounded-md"
                          >{sub.title}</Link>
                        )}
                      </div>
                    }
                  </div>
                )
              }

              return (
                <Link
                  key={menu.title}
                  as="button"
                  href={basePath+"/Admin"+menu.url}
                  className="w-full px-3 py-1 flex justify-between after:content-['→_'] hover:bg-foreground/20 rounded-md"
                >{menu.title}</Link>
              )
            })}
          </div>
        </div>
        <div
          className="flex flex-col gap-2"
        >
          <p
            className="mb-2 flex items-center gap-2"
          >
            <FaUserCircle className="size-10" />
            <span
              className="font-bold"
            > {AuthUser?.name}</span>
          </p>
          <button
            onClick={() => router.post(route('users.logout'))}
            className="px-3 py-1 bg-red-500/50 hover:bg-red-600/20 rounded-md"
          >Logout</button>
          <Link
            as="button"
            href={`${basePath}/Admin/Register`}
            className="px-3 py-1 hover:bg-foreground/20 rounded-md"
          >Register</Link>
          <Link
            as="button"
            href={`${basePath}/Admin/Login`}
            className="px-3 py-1 hover:bg-foreground/20 rounded-md"
          >Login</Link>
        </div>
      </aside>
      <main
        className="w-full h-screen p-4 text-background select-text overflow-y-scroll"
      >
        <div
          className="flex justify-between"
        >
          <h1
            className="text-3xl font-bold"
          >{title}</h1>
          { AuthUser?.role !== "user" && title === "Dashboard" &&
            <Link
              as="button"
              href={`${basePath}/Admin/Tambah`}
              className="w-fit h-full px-4 py-1 text-foreground bg-background shadow-sm shadow-background rounded-md"
            >
              Tambah Data
            </Link>
          }
          { AuthUser?.role !== "user" && title === "Artikel" &&
            <Link
              as="button"
              href={`${basePath}/Admin/Artikel/Tambah`}
              className="w-fit h-full px-4 py-1 text-foreground bg-background shadow-sm shadow-background rounded-md"
            >
              Buat Artikel
            </Link>
          }
          { AuthUser?.role !== "user" && title === "Testimoni" &&
            <Link
              as="button"
              href={`${basePath}/Admin/Testimoni/Tambah`}
              className="w-fit h-full px-4 py-1 text-foreground bg-background shadow-sm shadow-background rounded-md"
            >
              Tambah Testimoni
            </Link>
          }
        </div>
        <hr className="w-full h-1 mb-2 bg-background" />
        <div
          className="p-4"
        >{children}</div>
      </main>
    </div>
  )
}

export { LayoutAdmin, MenuAdmin }
