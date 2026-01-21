import { Background, LayoutAdmin } from "@/Components"
import { User, Users } from "@/Types"
import { router, usePage } from "@inertiajs/react"
import { ChangeEvent } from "react"
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu"
import { route } from "ziggy-js"

const AdminUsers = ({ users }: { users: Users }) => {
  const destroy = (id: number, name: string) => {
    if (confirm(`Mau hapus ${name}?`))
      router.delete(route('users.destroy', id))
  }, authUser = usePage().props.auth.user,
  canEdit = (user: User) => user.role === 'admin' || authUser?.role !== 'admin' // Admin only this is for diabled button when role user other than admin

  return (
    <LayoutAdmin
      title="Tambah Data Penjualan"
    >
      <Background
        className="p-6"
      >
        <div
          className="flex justify-between"
        >
          <div
            id="instagram"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Name</h1>
            { users.data.map(user =>
              <p
                key={user.id}
                className="w-full h-8 px-2 flex items-center font-semibold border border-foreground/50"
              >{user.name}</p>
            )}
          </div>
          <div
            id="tiktok"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Email</h1>
            { users.data.map(user =>
              <p
                key={user.id}
                className="w-full h-8 px-2 flex items-center font-semibold border border-foreground/50"
              >{user.email}</p>
            )}
          </div>
          <div
            id="instagram_tiktok"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Role</h1>
            { users.data.map(user =>
              <RoleSelect user={user} canEdit={canEdit(user)} />
            )}
          </div>
          <div
            id="action"
            className="ml-2 w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Action</h1>
            { users.data.map(user =>
              <button
                key={user.id}
                onClick={() => destroy(user.id, user.name)}
                disabled={canEdit(user)}
                className="w-full h-6 my-1 px-2 text-background font-bold bg-red-500 hover:bg-red-300 disabled:bg-red-900 rounded-md transition-colors duration-500"
              >Hapus</button>
            )}
          </div>
        </div>
        <PaginationUsers users={users} />
      </Background>
    </LayoutAdmin>
  )
}

function RoleSelect({ user, canEdit }: { user: User; canEdit: boolean }) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    if (!canEdit && confirm(`Mau ubah role ${user.name}?`))
      router.patch(route('users.update', user.id), {
        'role': e.target.value
      })
    else e.target.value = user.role
  }

  return (
    canEdit ?
      <span className="w-full h-8 px-2 flex items-center font-semibold uppercase border border-foreground/50">{user.role}</span>
    : <select
        defaultValue={user.role}
        onChange={e => handleChange(e)}
        className="w-full h-8 px-2 font-semibold border border-foreground/50"
      >
        <option value="editor">EDITOR</option>
        <option value="user">USER</option>
      </select>
  )
}

function PaginationUsers({ users }: { users: Users }) {
  const pages = []; for (let _ = 1; _ <= users.last_page; _++)
    pages.push(_)

  return (
    <div
      className="mt-2 flex justify-center items-center gap-2"
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
      onClick={() => router.get('/Admin/Users', { page: to })}
      className={`size-7 flex justify-center items-center ${active || !disabled && active == undefined ? 'text-white' : 'text-foreground/50' } font-bold bg-background rounded-md`}
      disabled={disabled}
      {...props}
    >{ children }</button>
  )
}

export default AdminUsers
