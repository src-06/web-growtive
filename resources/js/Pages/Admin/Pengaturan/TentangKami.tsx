import { Background, LayoutAdmin } from "@/Components"
import { basePath } from "@/Config/env"
import { About } from "@/Types"
import { Link, router, useForm, usePage } from "@inertiajs/react"
import { FormEvent } from "react"
import { FaTrashCan } from "react-icons/fa6"
import { route } from "ziggy-js"

const PengaturanTentangKami = ({ about }: { about: About }) => {
  const destroy = (id: number, title: string) => {
    if (confirm(`Mau hapus tujuan "${title}"?`))
    router.delete(route('about_goals.destroy', id), {
      onSuccess: () => alert("Berhasil menghapus."),
      onError: () => alert("Gagal menghapus!"),
    })
  }

  const AuthUser = usePage().props.auth.user

  const { data, setData, post, processing, errors } = useForm<{
    _method: 'patch',
    profile_owner: File | null,
    profile_company: File | null,
    description: string,
    visi: string,
    misi: string,
    goals: {
      id: number
      title: string
      text: string
    }[]
  }>({
    _method: 'patch',
    profile_owner: null,
    profile_company: null,
    description: about.description,
    visi: about.visi,
    misi: about.misi,
    goals: about.goals
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post(route('abouts.update', about.id), {
      forceFormData: true,
      onSuccess: () => alert("Berhasil mengubah."),
      onError: () => alert("Gagal mengubah!"),
    })
  }

  return (
    <LayoutAdmin
      title="Pengaturan Tentang Kami"
    >
      <Background
        className="pb-6"
      >
        <form onSubmit={submit}>
          <div
            className="w-full flex gap-x-4"
          >
            <div>
              <img
                src={basePath+"/"+about.profile_owner}
                alt="Owner Profile"
                className="w-40"
              />
              <label htmlFor="profile_owner" className="text-xl font-bold">Ganti Profil Pemilik</label>
              <input type="file" id="profile_owner" onChange={(e) => setData('profile_owner', e.target.files?.[0] ?? null)} />
            </div>
            <div>
              <img
                src={basePath+"/"+about.profile_company}
                alt="Company Profile"
                className="w-40"
              />
              <label htmlFor="profile_company" className="text-xl font-bold">Ganti Profil Perusahaan</label>
              <input type="file" id="profile_company" onChange={(e) => setData('profile_company', e.target.files?.[0] ?? null)} />
            </div>
          </div>
          <div
            className="w-full mt-10"
          >
            <h1 className="text-xl font-bold">Description</h1>
            <textarea rows={8} defaultValue={about.description} onChange={(e) => setData('description', e.target.value)} className="w-full p-2 border-2 outline-0 rounded-2xl" />
          </div>
          <div
            className="w-full mt-10 flex justify-center items-center gap-x-4"
          >
            <div
              className="w-full"
            >
              <h1 className="text-xl font-bold">VISI</h1>
              <textarea rows={8} defaultValue={about.visi} onChange={(e) => setData('visi', e.target.value)} className="w-full p-2 border-2 outline-0 rounded-2xl" />
            </div>
            <div
              className="w-full"
            >
              <h1 className="text-xl font-bold">Misi</h1>
              <textarea rows={8} defaultValue={about.misi} onChange={(e) => setData('misi', e.target.value)} className="w-full p-2 border-2 outline-0 rounded-2xl" />
            </div>
          </div>
          <div
            className="w-full mt-10 flex flex-col justify-center items-center gap-y-4"
          >
            <h1 className="text-xl font-bold">Tujuan</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-y-12">
              { about.goals.map(goal =>
                <div
                  key={goal.id}
                  className="w-full"
                >
                  <div className="flex items-center gap-x-1">
                    <input type="text" defaultValue={goal.title} onChange={(e) => setData('goals', data.goals.map(g =>
                      g.id === goal.id
                        ? { ...g, title: e.target.value }
                        : g
                    ))} className="w-full p-2 text-xl font-bold border-2 outline-0 rounded-2xl" />
                    { AuthUser?.role !== 'user' &&
                      <button
                        type="button"
                        onClick={() => destroy(goal.id, goal.title)}
                        className="size-8 flex justify-center items-center text-red-500 hover:bg-foreground/30 rounded-md"
                      ><FaTrashCan size={20} /></button>
                    }
                  </div>
                  <textarea rows={12} defaultValue={goal.text} onChange={(e) => setData('goals', data.goals.map(g =>
                    g.id === goal.id
                      ? { ...g, text: e.target.value }
                      : g
                  ))} className="w-full mt-4 p-2 border-2 outline-0 rounded-2xl" />
                </div>
              )}
            </div>
          </div>
          <div
            className="flex gap-x-4"
          >
            <input
              type="submit"
              value="Simpan Perubahan"
              disabled={processing}
              className="w-fit mt-6 px-2 text-background font-bold bg-amber-500 hover:bg-amber-300 disabled:bg-amber-900 rounded-md transition-colors duration-500"
            />
            <Link
              as="button"
              href={basePath+"/Admin/Pengaturan/TentangKami/Tambah"}
              className="w-fit mt-6 px-2 text-background font-bold bg-green-500 hover:bg-green-300 disabled:bg-green-900 rounded-md transition-colors duration-500"
            >Tambah Tujuan</Link>
          </div>
        </form>
      </Background>
    </LayoutAdmin>
  )
}

export default PengaturanTentangKami
