import { Background, LayoutAdmin } from "@/Components"
import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"
import { route } from "ziggy-js"

const AdminTestimoniTambah = () => {
  const { data, setData, post, errors, processing } = useForm<{
    profile: File | null,
    name: string,
    company: string,
    testimonial: string,
  }>({
    profile: null,
    name: '',
    company: '',
    testimonial: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post(route('testimonials.store'))
  }

  return (
    <LayoutAdmin
      title="Tambah Testimoni"
    >
      <Background
        className="pb-4"
      >
        <form
          onSubmit={submit}
          className="w-full flex flex-col justify-center"
        >
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="profile" className="text-lg font-semibold">Upload Profile</label></td>
                <td>
                  <input
                    type="file"
                    id="profile"
                    accept="image/png,image/jpg,image/jpeg"
                    onChange={(e) => setData('profile', e.target.files?.[0] ?? null)}
                    className="w-full p-2 border-b outline-0"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="name" className="text-lg font-semibold">Nama</label></td>
                <td>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nur Cahyo Hikari"
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full p-2 border-b outline-0"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="company" className="text-lg font-semibold">Perusahaan</label></td>
                <td>
                  <input
                    type="text"
                    id="company"
                    placeholder="PT. Pecel Ayam"
                    onChange={(e) => setData('company', e.target.value)}
                    className="w-full p-2 border-b outline-0"
                  />
                </td>
              </tr>
              <tr>
                <td><label htmlFor="testimonial" className="text-lg font-semibold">Pendapat Klien</label></td>
                <td>
                  <textarea
                    rows={4}
                    id="testimonial"
                    placeholder="Cerita dari klien..."
                    onChange={(e) => setData('testimonial', e.target.value)}
                    className="w-full p-2 border-b outline-0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            value="Tambahkan"
            disabled={processing}
            className="w-full h-6 my-1 px-2 text-background font-bold bg-green-500 hover:bg-green-300 disabled:bg-green-900 rounded-md transition-colors duration-500"
          />
        </form>
      </Background>
    </LayoutAdmin>
  )
}

export default AdminTestimoniTambah
