import { User } from "@/types";
import { router } from "@inertiajs/react";
import { ChangeEvent } from "react";
import { route } from "ziggy-js";

export function RoleSelect({ user, canEdit }: { user: User; canEdit: boolean }) {
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
