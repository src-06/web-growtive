import { cn } from "@/lib/utils"
import { Link } from "@inertiajs/react"

export default function Layouts({ children, title, className }: { children: React.ReactNode; title?: string; className?: string }) {
  return (
    <div className="flex">
      <aside
        className="w-50 h-screen p-4 bg-bg"
      >
        <h1
          className="mb-4 text-xl text-center font-bold border-b-2"
        >Growdience Creative</h1>
        <div
          className="flex flex-col gap-2 [&>a]:px-3 [&>a]:py-1 [&>a]:flex [&>a]:justify-between [&>a]:after:content-['→_'] [&>a:hover]:bg-fg/20 [&>a]:rounded-md"
        >
          <Link href="#">Paket</Link>
          <Link href="/admin/profile">Profiles</Link>
          <Link href="/admin/users">Users</Link>
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
