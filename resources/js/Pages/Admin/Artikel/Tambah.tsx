import { Background, LayoutAdmin } from "@/Components"
import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"
import { route } from "ziggy-js"

const AdminArtikelBaru = () => {
  const { data, setData, post, errors, processing } = useForm<{
    thumbnail: File | null,
    title: string,
    body: string,
  }>({
    thumbnail: null,
    title: '',
    body: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post(route('articles.store'))
  }

  return (
    <LayoutAdmin
      title="Tambah Artikel Baru"
    >
      <form
        onSubmit={submit}
        className="flex gap-x-4"
      >
        <Background
          className="w-[30%] h-full p-6 flex flex-col gap-y-4 [&>div]:flex [&>div]:flex-col"
        >
          <div>
            <label htmlFor="thumbnail" className="text-lg font-semibold">Thumbnail</label>
            <input
              type="file"
              id="thumbnail"
              accept="image/png,image/jpg,image/jpeg"
              onChange={(e) => setData('thumbnail', e.target.files?.[0] ?? null)}
              className="w-full border-b outline-0"
            />
          </div>
          <div>
            <label htmlFor="title" className="text-lg font-semibold">Judul</label>
            <input
              type="text"
              id="title"
              placeholder="Tambahkan judul"
              onChange={(e) => setData('title', e.target.value)}
              className="w-full border-b outline-0"
            />
          </div>
          <input
            type="submit"
            value="Tambahkan"
            disabled={processing}
            className="w-full h-6 my-1 px-2 text-background font-bold bg-green-500 hover:bg-green-300 disabled:bg-green-900 rounded-md transition-colors duration-500"
          />
        </Background>
        <Background
          className="w-[70%] h-full flex flex-col gap-4"
        >
          <label htmlFor="body" className="ml-4 text-lg font-semibold">Isi artikel</label>
          <textarea
            id="body"
            rows={8}
            placeholder="Tambahkan text..."
            onChange={(e) => setData('body', e.target.value)}
            className="w-full mb-3 p-2 border-2 outline-0 rounded-2xl"
          />
        </Background>
      </form>
    </LayoutAdmin>
  )
}

export default AdminArtikelBaru
