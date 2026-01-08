import { User } from "@/types"
import Layouts from "@/components/admin/layouts"

export default function AdminPanel({ users }: { users: User[] }) {
  return (
    <Layouts>
      {users.map((user) =>
        <p key={user.id}>
          {user.id}. {user.name} ({user.email}) <span className="font-bold">{user.role}</span>
        </p>
      )}
    </Layouts>
  )
}
