import { User, Users } from "@/types";
import Layouts from "./components/layouts";
import { Link, router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

export default function UserPage({ users }: { users: Users }) {
  const destroy = (id: number, name: string) => {
    if (confirm(`Mau hapus ${name}?`))
      router.delete(route('users.destroy', id))
  }, auth = usePage().props.auth,
  canEdit = (user: User) => user.role === 'system' || user.role === auth.user?.role || auth.user?.role === 'user'

  return (
    <Layouts
      title="Users"
    >
      <div
        className="w-full h-[calc(100dvh-5.5rem)] flex flex-col justify-between items-center"
      >
        <table>
          <thead>
            <tr>
              <TH>No</TH>
              <TH>Name</TH>
              <TH>Email</TH>
              <TH>Role</TH>
              <TH
                className="border-r-0"
              >Action</TH>
            </tr>
          </thead>
          <tbody>
            { users.data.map((user, index) => (
              <tr key={ user.id }>
                <TD>{ index + users.from + '.' }</TD>
                <TD>{ user.name }</TD>
                <TD>{ user.email }</TD>
                <TD><RoleSelect user={user} canEdit={canEdit(user)} /></TD>
                <TD
                  className="border-r-0"
                >
                  <button
                    onClick={() => destroy(user.id, user.name)}
                    className="px-2 text-white hover:text-bg disabled:text-fg bg-red-500 hover:bg-red-300 disabled:bg-red-800 rounded-md transition-colors duration-500"
                    disabled={canEdit(user)}
                  >Delete User</button>
                </TD>
              </tr>
            ))}
          </tbody>
        </table>
        {1 !== users.last_page && <Pagination users={users} />}
      </div>
    </Layouts>
  )
}

function TH({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={cn("px-4 py-1 text-left border-b-2 border-r-2", className)}
    >
      { children }
    </th>
  )
}

function TD({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <td
      className={cn("px-4 py-1 border-t-2 border-r-2", className)}
    >
      { children }
    </td>
  )
}

function RoleSelect({ user, canEdit }: { user: User; canEdit: boolean }) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    if (!canEdit && confirm(`Mau ubah role ${user.name}?`))
      router.patch(route('users.update', user.id), { 'role': e.target.value })
    else e.target.value = user.role
  }

  return (
    canEdit ?
      <span className="font-bold uppercase">{ user.role }</span>
    : <select
        defaultValue={ user.role }
        onChange={e => handleChange(e)}
        className="font-bold"
      >
        <option value="admin">ADMIN</option>
        <option value="user">USER</option>
      </select>
  )
}

function Pagination({ users }: { users: Users }) {
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
          active={users.current_page === page}
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
