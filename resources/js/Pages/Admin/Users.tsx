import { Background, LayoutAdmin, PaginatedPage } from "@/Components"
import { User, PaginatedProps } from "@/Types"
import { router, usePage } from "@inertiajs/react"
import { ChangeEvent } from "react"
import { route } from "ziggy-js"

const AdminUsers = ({ users }: { users: PaginatedProps<User> }) => {
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
              <RoleSelect key={user.id} user={user} canEdit={canEdit(user)} />
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
        <PaginatedPage data={users} />
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

export default AdminUsers
