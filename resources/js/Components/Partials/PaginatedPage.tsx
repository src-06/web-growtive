import { cn } from "@/Lib/util";
import { PaginatedProps } from "@/Types";
import { router, usePage } from "@inertiajs/react";
import { ComponentProps } from "react";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

function PaginatedPage<T>({ data, className }: { data: PaginatedProps<T>, className?: string }) {
  const pages = []; for (let i = 1; i <= data.last_page; i++)
    pages.push(i)

  return (
    <div
      className="mt-2 flex justify-center items-center gap-2"
    >
      <Button
        disabled={!usePage().url.includes('?page='+data.current_page)}
        className={className}
      ><LuChevronsLeft size={20} strokeWidth={3} /></Button>
      <Button
        to={data.current_page-1}
        disabled={data.current_page == 1}
        className={className}
      ><LuChevronLeft size={20} strokeWidth={3} /></Button>
      { pages.map(page =>
        <Button
          key={page}
          to={page}
          active={data.current_page == page}
          className={className}
        >{ page }</Button>
      )}
      <Button
        to={data.current_page+1}
        disabled={data.current_page == data.last_page}
        className={className}
      ><LuChevronRight size={20} strokeWidth={3} /></Button>
      <Button
        to={data.last_page}
        disabled={data.current_page == data.last_page}
        className={className}
      ><LuChevronsRight size={20} strokeWidth={3} /></Button>
    </div>
  )
}

function Button({ children, className, to, active, disabled }: ComponentProps<"button"> & { to?: number; active?: boolean }) {
  const { url } = usePage()
  return (
    <button
      onClick={() => router.get(url, { page: to })}
      className={cn(`size-7 flex justify-center items-center ${active || !disabled && active == undefined ? 'text-white' : 'text-foreground/50' } font-bold bg-background rounded-md`, className)}
      disabled={disabled}
    >{ children }</button>
  )
}

export { PaginatedPage }
