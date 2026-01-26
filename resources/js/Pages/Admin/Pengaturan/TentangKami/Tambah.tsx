import { Background, LayoutAdmin } from "@/Components"
import { useForm } from "@inertiajs/react"
import { route } from "ziggy-js"

const TentangKamiTambah = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    text: '',
  })

  const submit = () => {
    post(route('about_goals.store'), {
      onSuccess: () => alert("Berhasil menambahkan."),
      onError: () => alert("Gagal menambahkan!"),
    })
  }

  return (
    <LayoutAdmin
      title="Tambah Tujuan"
    >
      <form>
        <Background
          className="pb-5"
        >
          <div className="w-full flex flex-wrap justify-center items-center gap-y-12">
            <div
              className="w-full flex flex-col gap-y-4"
            >
              <div>
                <label htmlFor="title" className="text-xl font-bold">Nama Tujuan</label>
                <input
                  type="text"
                  id="title"
                  onChange={e => {setData('title', e.target.value)}}
                  className="w-full p-2 text-xl font-bold border-2 outline-0 rounded-2xl"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-xl font-bold">Isi Tujuan</label>
                <textarea
                  rows={12}
                  id="text"
                  onChange={e => {setData('text', e.target.value)}}
                  className="w-full p-2 border-2 outline-0 rounded-2xl"
                />
              </div>
            </div>
          </div>
          <button
            onClick={submit}
            disabled={processing}
            className="w-fit mt-6 px-2 text-background font-bold bg-green-500 hover:bg-green-300 disabled:bg-green-900 rounded-md transition-colors duration-500"
          >Tambahkan</button>
        </Background>
      </form>
    </LayoutAdmin>
  )
}

export default TentangKamiTambah
