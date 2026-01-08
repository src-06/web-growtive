import { Users } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

export function Pagination({ users }: { users: Users }) {
  const pages = []; for (let _ = 1; _ <= users.last_page; _++)
    pages.push(_)

  return (
    <div
      className="flex justify-center items-center gap-2"
    >
      <Button
        disabled={!usePage().url.includes('?page='+users.current_page)}
      ><LuChevronsLeft size={20} strokeWidth={3} /></Button>
      <Button
        to={users.current_page-1}
        disabled={users.current_page == 1}
      ><LuChevronLeft size={20} strokeWidth={3} /></Button>
      { pages.map(page =>
        <Button
          key={page}
          to={page}
          active={users.current_page == page}
        >{ page }</Button>
      )}
      <Button
        to={users.current_page+1}
        disabled={users.current_page == users.last_page}
      ><LuChevronRight size={20} strokeWidth={3} /></Button>
      <Button
        to={users.last_page}
        disabled={users.current_page == users.last_page}
      ><LuChevronsRight size={20} strokeWidth={3} /></Button>
    </div>
  )
}

function Button({ children, to, active, disabled, ...props }: { children: React.ReactNode; to?: number; active?: boolean; disabled?: boolean }) {
  return (
    <button
      onClick={() => router.get('/admin/users', { page: to })}
      className={`size-7 flex justify-center items-center ${active || !disabled && active == undefined ? 'text-white' : 'text-fg/70' } font-bold bg-bg rounded-md`}
      disabled={disabled}
      {...props}
    >{ children }</button>
  )
}
