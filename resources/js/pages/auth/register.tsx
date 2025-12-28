import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"
import { route } from "ziggy-js"

export default function Register() {
  const { data, setData, post, errors } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post(route('users.store'))
  }

  return (
    <section
      className="w-full h-dvh flex justify-center items-center  bg-linear-to-tl from-fg to-[#999797]"
    >
      <form
        onSubmit={submit}
        className="px-20 py-15 flex flex-col gap-4  bg-linear-to-tl from-black to-bg to-90% rounded-2xl shadow-2xl shadow-bg [&>div]:flex [&>div]:flex-col"
      >
        <div>
          <label
            htmlFor="name"
          >Name</label>
          <input
            type="text"
            id="name"
            placeholder="Someone"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
          >Email</label>
          <input
            type="email"
            id="email"
            placeholder="someone@example.com"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
          >Password</label>
          <input
            type="text"
            id="password"
            placeholder="Your password..."
          />
          <input
            type="text"
            id="retypePassword"
            placeholder="Retype your password..."
            value={data.password}
            onChange={e => setData('password', e.target.value)}
          />
        </div>
        <button
          className="mt-6 py-1 hover:text-bg font-semibold hover:bg-fg/75 border-2 border-fg/70 rounded-md"
        >Register</button>
      </form>
    </section>
  )
}
