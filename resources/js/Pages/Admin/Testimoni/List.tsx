import { Background, LayoutAdmin } from "@/Components"
import { basePath } from "@/Config/env"
import { Testimonial } from "@/Types"
import { router, usePage } from "@inertiajs/react"
import { FaTrashCan } from "react-icons/fa6"
import { route } from "ziggy-js"

const AdminTestimoni = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const destroy = (id: number, title: string) => {
    if (confirm(`Mau hapus testimoni "${title}"?`))
    router.delete(route('testimonials.destroy', id), {
      onSuccess: () => alert("Berhasil menghapus."),
      onError: () => alert("Gagal menghapus!"),
    })
  }

  const AuthUser = usePage().props.auth.user

  return (
    <LayoutAdmin
      title="Testimoni"
    >
      <Background
        className="p-4 flex flex-col gap-y-2"
      >
        { testimonials.map(testimonial =>
          <div
            key={testimonial.id}
            className="w-full h-full flex gap-x-2 text-background bg-foreground rounded-2xl"
          >
            <img
              src={basePath+"/"+testimonial.profile}
              alt={`Profile ${testimonial.name}`}
              className="w-[10%] h-fit m-4 shadow-md shadow-background rounded-full"
            />
            <div
              className="w-[90%] h-full my-2 mr-2 flex flex-col gap-y-2"
            >
              <div
                className="w-full h-[20%]"
              >
                <div
                  className="flex justify-between items-center"
                >
                  <h1
                    className="text-2xl font-bold"
                  >{testimonial.name}</h1>
                  { AuthUser?.role !== 'user' &&
                    <button
                      onClick={() => destroy(testimonial.id, testimonial.name)}
                      className="size-8 flex justify-center items-center text-red-500 hover:bg-foreground/30 rounded-md"
                    ><FaTrashCan size={20} /></button>
                  }
                </div>
                <h2
                  className="text-sm"
                >Dari perusahaan <span className="text-background/70 font-bold">{testimonial.company}</span></h2>
              </div>
              <div
                className="w-full h-[80%]"
              >
                <p
                  className="p-4 bg-white border shadow rounded-2xl"
                >{testimonial.testimonial}</p>
              </div>
            </div>
          </div>
        )}
      </Background>
    </LayoutAdmin>
  )
}

export default AdminTestimoni
