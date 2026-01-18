import { SectionGradBG } from "@/Components"
import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"
import { route } from "ziggy-js"

const AdminRegister = () => {
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
    <SectionGradBG>
      <div
        className="w-full h-screen flex justify-center items-center"
      >
        <form
          onSubmit={submit}
          className="px-20 py-15 flex flex-col gap-4 text-foreground bg-linear-to-tl from-black to-background to-90% rounded-2xl shadow-2xl shadow-background [&>div]:flex [&>div]:flex-col"
        >
          <h1
            className="mb-6 text-3xl text-center font-bold"
          >Register</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name..."
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              className="px-2 py-1 outline-0 border-b-2 border-fg/80"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
              className="px-2 py-1 outline-0 border-b-2 border-fg/80"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password..."
              value={data.password}
              onChange={e => setData('password', e.target.value)}
              className="px-2 py-1 outline-0 border-b-2 border-fg/80"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-6 py-1 hover:text-background font-semibold hover:bg-foreground/75 border-2 border-foreground/70 rounded-md"
          />
        </form>
      </div>
    </SectionGradBG>
  )
}

export default AdminRegister
