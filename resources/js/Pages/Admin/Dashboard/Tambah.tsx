import { Background, LayoutAdmin, PaginatedPage } from "@/Components"
import { Charts, PaginatedProps } from "@/Types"
import { router, useForm } from "@inertiajs/react"
import { route } from "ziggy-js"

const AdminDashboardTambah = ({ charts }: { charts: PaginatedProps<Charts> }) => {
  const { setData, post, processing } = useForm({
    instagram: 0,
    tiktok: 0,
    instagram_tiktok: 0,
    endorsement: 0,
  })

  const destroy = (id: number) => {
    if (confirm(`Mau hapus?`))
    router.delete(route('charts.destroy', id), {
      onSuccess: () => alert("Berhasil menghapus."),
      onError: () => alert("Gagal menghapus!"),
    })
  }

  const submit = () => post(route('charts.store'), {
    onSuccess: () => alert("Berhasil menambahkan."),
    onError: () => alert("Gagal menambahkan!"),
  })

  return (
    <LayoutAdmin
      title="Tambah Data Penjualan"
    >
      <Background
        className="p-6"
      >
        <div
          className="flex justify-between"
        >
          <div
            id="instagram"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Instagram</h1>
            <input
              type="text"
              placeholder="..."
              onChange={e => {setData('instagram', Number(e.target.value))}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
            { charts.data.map(chart =>
              <p
                key={chart.id}
                className="w-full h-8 flex justify-center items-center font-semibold border border-foreground/50"
              >{chart.instagram}</p>
            )}
          </div>
          <div
            id="tiktok"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Tiktok</h1>
            <input
              type="text"
              placeholder="..."
              onChange={e => {setData('tiktok', Number(e.target.value))}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
            { charts.data.map(chart =>
              <p
                key={chart.id}
                className="w-full h-8 flex justify-center items-center font-semibold border border-foreground/50"
              >{chart.tiktok}</p>
            )}
          </div>
          <div
            id="instagram_tiktok"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >IG & Tiktok</h1>
            <input
              type="text"
              placeholder="..."
              onChange={e => {setData('instagram_tiktok', Number(e.target.value))}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
            { charts.data.map(chart =>
              <p
                key={chart.id}
                className="w-full h-8 flex justify-center items-center font-semibold border border-foreground/50"
              >{chart.instagram_tiktok}</p>
            )}
          </div>
          <div
            id="endorsement"
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Endorsement</h1>
            <input
              type="text"
              placeholder="..."
              onChange={e => {setData('endorsement', Number(e.target.value))}}
              className="w-full h-8 flex justify-center items-center text-center font-semibold border border-foreground/50 outline-0"
            />
            { charts.data.map(chart =>
              <p
                key={chart.id}
                className="w-full h-8 flex justify-center items-center font-semibold border border-foreground/50"
              >{ chart.endorsement }</p>
            )}
          </div>
          <div
            id="action"
            className="ml-2 w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Action</h1>
            <input
              type="submit"
              onClick={submit}
              value="Tambahkan"
              disabled={processing}
              className="w-full h-6 my-1 px-2 text-background font-bold bg-green-500 hover:bg-green-300 rounded-md transition-colors duration-500"
            />
            { charts.data.map(chart =>
              <button
                key={chart.id}
                onClick={() => destroy(chart.id)}
                className="w-full h-6 my-1 px-2 text-background font-bold bg-red-500 hover:bg-red-300 rounded-md transition-colors duration-500"
              >Hapus</button>
            )}
          </div>
        </div>
        <PaginatedPage data={charts} />
      </Background>
    </LayoutAdmin>
  )
}

export default AdminDashboardTambah
