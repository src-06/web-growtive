import { User, Users } from "@/types";
import Layouts from "@/components/admin/layouts";
import { router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { cn } from "@/lib/utils";
import { RoleSelect } from "@/components/admin/users/role_select";
import { Pagination } from "@/components/admin/users/pagination";

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
