import { Background, LayoutAdmin } from "@/Components"
import { router, useForm, usePage } from "@inertiajs/react"
import { route } from "ziggy-js"

const PengaturanMenu = () => {
  const { data, setData, post, processing } = useForm({
    name: '',
    url: '',
  })

  const { menus } = usePage().props

  const destroy = (id: number) => {
    if (confirm(`Mau hapus?`))
    router.delete(route('menus.destroy', id), {
      onSuccess: () => alert("Berhasil menghapus."),
      onError: () => alert("Gagal menghapus!"),
    })
  }

  const submit = () => {
    post(route('menus.store'), {
      onSuccess: () => alert("Berhasil menambahkan."),
      onError: () => alert("Gagal menambahkan!"),
    })
    setData('name', '')
    setData('url', '')
  }

  return (
    <LayoutAdmin
      title="Pengaturan Menu"
    >
      <Background
        className="p-6"
      >
        <div
          className="flex justify-between"
        >
          <div
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Menu</h1>
            { menus.map(menu =>
              <p
                key={menu.id}
                className="w-full h-8 px-3 flex justify-start items-center font-semibold border border-foreground/50"
              >{menu.name}</p>
            )}
            <input
              type="text"
              placeholder="..."
              value={data.name}
              onChange={e => {setData('name', e.target.value)}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
          </div>
          <div
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Menu Url</h1>
            { menus.map(menu =>
              <p
                key={menu.id}
                className="w-full h-8 px-3 flex justify-start items-center font-semibold border border-foreground/50"
              >{menu.contact ? menu.contact.url_wa : menu.url}</p>
            )}
            <input
              type="text"
              placeholder="..."
              value={data.url}
              onChange={e => {setData('url', e.target.value)}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
          </div>
          <div
            className="ml-2 w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Action</h1>
            { menus.map(menu => {
              if (menu.id <= 5) return <div key={menu.id} className="w-full h-6 my-1 px-2" />

              return (
                <button
                  key={menu.id}
                  onClick={() => destroy(menu.id)}
                  className="w-full h-6 my-1 px-2 text-background font-bold bg-red-500 hover:bg-red-300 rounded-md transition-colors duration-500"
                >Hapus</button>
              )
            }
            )}
            <input
              type="submit"
              onClick={submit}
              value="Tambahkan"
              disabled={processing}
              className="w-full h-6 my-1 px-2 text-background font-bold bg-green-500 hover:bg-green-300 rounded-md transition-colors duration-500"
            />
          </div>
        </div>
      </Background>
    </LayoutAdmin>
  )
}

export default PengaturanMenu
