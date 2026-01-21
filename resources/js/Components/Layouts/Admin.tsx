import { Link, router, usePage } from "@inertiajs/react"
import { FaUserCircle } from "react-icons/fa"
import { route } from "ziggy-js"

const LayoutAdmin = ({ children, title }: { children?: React.ReactNode, title?: string }) => {
  const { props } = usePage()

  const AuthUser = props.auth.user

  return (
    <div className="w-full h-full flex overflow-hidden">
      <aside
        className="w-80 h-screen p-4 flex flex-col justify-between bg-background"
      >
        <div>
          <h1
            className="mb-4 text-xl text-center font-bold border-b-2"
          >Growdience Creative</h1>
          <div
            className="flex flex-col gap-2 [&>button]:px-3 [&>button]:py-1 [&>button]:flex [&>button]:justify-between [&>button]:after:content-['→_'] [&>button:hover]:bg-foreground/20 [&>button]:rounded-md"
          >
            <Link as="button" href="/Admin">Dashboard</Link>
            { AuthUser?.role === 'admin' &&
              <Link as="button" href="/Admin/Users">Users</Link>
            }
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
            href="/Admin/Register"
            className="px-3 py-1 hover:bg-foreground/20 rounded-md"
          >Register</Link>
          <Link
            as="button"
            href="/Admin/Login"
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
              href="/Admin/Chart/Tambah"
              className="w-fit h-full px-4 py-1 text-foreground bg-background shadow-sm shadow-background rounded-md"
            >
              Tambah Data
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

export { LayoutAdmin }
