import { Background, LayoutAdmin, PaginatedPage } from "@/Components"
import { basePath } from "@/Config/env"
import { toLocalDate } from "@/Lib/util"
import { Article, PaginatedProps } from "@/Types"
import { Link, router, usePage } from "@inertiajs/react"
import { FaTrashCan } from "react-icons/fa6"
import { route } from "ziggy-js"

const AdminArtikelList = ({ articles }: { articles: PaginatedProps<Article> }) => {
  const destroy = (id_article: string, title: string) => {
    if (confirm(`Mau hapus artikel "${title}"?`))
    router.delete(route('articles.destroy', id_article), {
      onSuccess: () => alert("Berhasil menghapus."),
      onError: () => alert("Gagal menghapus!"),
    })
  }

  const AuthUser = usePage().props.auth.user

  return (
    <LayoutAdmin
      title="Artikel"
    >
      <Background
        className="p-6"
      >
        { articles.data.map((article, index) =>
          <div
            key={article.id_article}
          >
            <div
              className="flex items-center gap-x-4"
            >
              <img
                src={basePath+"/"+article.thumbnail}
                alt={"Tumbnail "+article.title}
                className="w-[20%] h-auto shadow-md shadow-background rounded-2xl"
              />
              <div
                className="w-[80%]"
              >
                <div
                  className="flex justify-between items-center"
                >
                  <Link
                    as="button"
                    href={basePath+"/Artikel/"+article.id_article}
                    className="text-2xl text-left font-semibold"
                  >{article.title}</Link>
                  { AuthUser?.role !== 'user' &&
                    <button
                      onClick={() => destroy(article.id_article, article.title)}
                      className="size-8 flex justify-center items-center text-red-500 hover:bg-foreground/30 rounded-md"
                    ><FaTrashCan size={20} /></button>
                  }
                </div>
                <div
                  className="flex justify-between items-start"
                >
                  <p
                    className="text-sm text-foreground/80"
                  >
                    Oleh:{" "}
                    <span
                      className="font-semibold"
                    >{article.user.name}</span>
                  </p>
                  <div
                    className="flex flex-col text-xs"
                  >
                    <span>Dibuat pada: {toLocalDate({ISO_date: article.created_at})}</span>
                    <span>Diedit pada: {toLocalDate({ISO_date: article.updated_at})}</span>
                  </div>
                </div>
                <p className="text-pretty indent-8 tracking-wider">
                  { article.body.slice(0, 300).split('\n').map((paragraph, index) => index === 0 &&
                    <span key={index}>{paragraph}</span>
                  )}{"... "}
                  <Link
                    as="button"
                    href={basePath+"/Artikel/"+article.id_article}
                    className="font-semibold underline opacity-65 hover:opacity-100 transition-all duration-300"
                  >Lihat artikel.</Link>
                </p>
              </div>
            </div>
            { index !== articles.data.length - 1 && <hr className="w-full h-0.5 my-3 border border-dashed outline-0" /> }
          </div>
        )}
        <PaginatedPage data={articles} />
      </Background>
    </LayoutAdmin>
  )
}

export default AdminArtikelList
