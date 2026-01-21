import { Background, LayoutAdmin } from "@/Components"
import { PaginateCharts } from "@/Types"
import { router, useForm, usePage } from "@inertiajs/react"
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu"
import { route } from "ziggy-js"

const ChartTambah = ({ charts }: { charts: PaginateCharts }) => {
  const { setData, post, errors } = useForm({
    instagram: 0,
    tiktok: 0,
    instagram_tiktok: 0,
    endorsement: 0,
  })


  const destroy = (id: number) => {
    if (confirm(`Mau hapus?`))
      router.delete(route('charts.destroy', id))
  }

  const submit = () => {
    post(route('charts.store'))
    confirm('Data berhasil ditambahkan.')
  }

  return (
    <LayoutAdmin
      title="Tambah Data Penjualan"
    >
      <Background
        className="p-6"
      >
        <div
          // onSubmit={submit}
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
            >Instagram & Tiktok</h1>
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
              >{chart.endorsement}</p>
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
        <PaginationCharts charts={charts} />
      </Background>
    </LayoutAdmin>
  )
}

function PaginationCharts({ charts }: { charts: PaginateCharts }) {
  const pages = []; for (let _ = 1; _ <= charts.last_page; _++)
    pages.push(_)

  return (
    <div
      className="mt-2 flex justify-center items-center gap-2"
    >
      <Button
        disabled={!usePage().url.includes('?page='+charts.current_page)}
      ><LuChevronsLeft size={20} strokeWidth={3} /></Button>
      <Button
        to={charts.current_page-1}
        disabled={charts.current_page == 1}
      ><LuChevronLeft size={20} strokeWidth={3} /></Button>
      { pages.map(page =>
        <Button
          key={page}
          to={page}
          active={charts.current_page == page}
        >{ page }</Button>
      )}
      <Button
        to={charts.current_page+1}
        disabled={charts.current_page == charts.last_page}
      ><LuChevronRight size={20} strokeWidth={3} /></Button>
      <Button
        to={charts.last_page}
        disabled={charts.current_page == charts.last_page}
      ><LuChevronsRight size={20} strokeWidth={3} /></Button>
    </div>
  )
}

function Button({ children, to, active, disabled, ...props }: { children: React.ReactNode; to?: number; active?: boolean; disabled?: boolean }) {
  return (
    <button
      onClick={() => router.get('/Admin/Chart/Tambah', { page: to })}
      className={`size-7 flex justify-center items-center ${active || !disabled && active == undefined ? 'text-white' : 'text-foreground/50' } font-bold bg-background rounded-md`}
      disabled={disabled}
      {...props}
    >{ children }</button>
  )
}

export default ChartTambah
