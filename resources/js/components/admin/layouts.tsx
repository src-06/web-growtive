import { cn } from "@/lib/utils"
import { Link, router, usePage } from "@inertiajs/react"
import { route } from "ziggy-js"

export default function Layouts({ children, title, className }: { children: React.ReactNode; title?: string; className?: string }) {
  const authUser = usePage().props.auth.user,
    logout = () => router.post(route('users.logout'))

    return (
    <div className="flex">
      <aside
        className="w-60 h-screen p-4 flex flex-col justify-between bg-bg shadow-xl shadow-black"
      >
        <div>
          <h1
            className="mb-4 text-xl text-center font-bold border-b-2"
          >Growdience Creative</h1>
          <div
            className="flex flex-col gap-2 [&>a]:px-3 [&>a]:py-1 [&>a]:flex [&>a]:justify-between [&>a]:after:content-['→_'] [&>a:hover]:bg-fg/20 [&>a]:rounded-md"
          >
            <Link href="/admin">Dashboard</Link>
            {/* <Link href="/admin/profile">Profiles</Link> */}
            <Link href="/admin/users">Users</Link>
          </div>
        </div>
        <div
          className="flex flex-col gap-2"
        >
          <p
            className="mb-6 px-3"
          >
            User:
            <span
              className="font-bold"
            > { authUser?.name }</span>
          </p>
          <button
            onClick={logout}
            className="px-3 py-1 text-left bg-red-600/30 hover:bg-red-700/20 rounded-md"
          >Keluar</button>
          <Link
            as="button"
            href="/register"
            className="px-3 py-1 text-left hover:bg-fg/20 rounded-md"
          >Buat User Baru</Link>
        </div>
      </aside>
      <main
        className={cn("w-full h-full p-4 text-bg select-text", className)}
      >
        <h1
          className="text-3xl font-bold"
        >{ title }</h1>
        <hr className="w-full h-1 mb-2 bg-bg" />
        {children}
      </main>
    </div>
  )
}
