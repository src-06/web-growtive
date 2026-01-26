import { Background, LayoutAdmin } from "@/Components"
import { useForm, usePage } from "@inertiajs/react"
import { route } from "ziggy-js"

const PengaturanKontak = () => {
  const { contact } = usePage().props

  const { data, setData, patch, processing } = useForm({
    url_wa: contact.url_wa,
    url_ig: contact.url_ig,
    url_tt: contact.url_tt,
  }),
  contacts: {
    id: "url_wa" | "url_ig" | "url_tt"
    name: string
    url?: string
  }[] = [
    {
      id: "url_wa",
      name: "Whatsapp",
      url: data.url_wa
    },
    {
      id: "url_ig",
      name: "Instagram",
      url: data.url_ig
    },
    {
      id: "url_tt",
      name: "Tiktok",
      url: data.url_tt
    }
  ]

  const submit = (id: number) => {
    patch(route('contacts.update', id), {
      onSuccess: () => alert("Berhasil update."),
      onError: () => alert("Gagal update!"),
    })
  }

  return (
    <LayoutAdmin
      title="Pengaturan Kontak"
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
            >Platform</h1>
            { contacts.map(contact =>
              <p
                key={contact.id}
                className="w-full h-8 px-3 flex justify-start items-center font-semibold border border-foreground/50"
              >{contact.name}</p>
            )}
          </div>
          <div
            className="w-full flex flex-col items-center"
          >
            <h1
              className="mb-2 font-semibold"
            >Url</h1>
            { contacts.map(contact =>
              <input
                key={contact.id}
                type="text"
                placeholder="..."
                value={contact.url}
                onChange={e => {setData(contact.id, e.target.value)}}
                className="w-full h-8 px-2 text-left font-semibold border border-foreground/50 outline-0"
              />
            )}
          </div>
        </div>
        <input
          type="submit"
          onClick={() => submit(contact.id)}
          value="Update"
          disabled={processing}
          className="w-full mt-6 px-2 text-background font-bold bg-amber-500 hover:bg-amber-300 disabled:bg-amber-900 rounded-md transition-colors duration-500"
        />
      </Background>
    </LayoutAdmin>
  )
}

export default PengaturanKontak
