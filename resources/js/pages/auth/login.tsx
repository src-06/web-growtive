import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"
import { route } from "ziggy-js"

export default function Login() {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post(route('users.login'))
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
          <p>{errors.email}</p>
          <p>{errors.password}</p>
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
            value={data.password}
            onChange={e => setData('password', e.target.value)}
          />
        </div>
        <button
          className="mt-6 py-1 hover:text-bg font-semibold hover:bg-fg/75 border-2 border-fg/70 rounded-md"
        >Login</button>
      </form>
    </section>
  )
}
