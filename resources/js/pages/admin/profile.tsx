import { router, usePage } from "@inertiajs/react";
import Layouts from "./components/layouts";
import { route } from "ziggy-js";

export default function Profile() {
  const authUser = usePage().props.auth.user,
    logout = () => router.post(route('users.logout'))

  return (
    <Layouts
      title="Profile"
    >
      <div>
        <div>
          <h1>{ authUser?.name } { authUser?.role != 'user' && `(${ authUser?.role })` }</h1>
          <p>{ authUser?.email }</p>
          <button
            onClick={logout}
            className="w-fit px-3 py-1 text-fg bg-bg rounded-md"
          >Logout</button>
        </div>
        <div>
          <form>

          </form>
        </div>
      </div>
    </Layouts>
  )
}
