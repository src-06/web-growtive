import { Background, LayoutAdmin, PaginatedPage } from "@/Components"
import { Article, PaginatedProps } from "@/Types"
import { Link, router } from "@inertiajs/react"
import { FaTrashCan } from "react-icons/fa6"
import { route } from "ziggy-js"

const AdminArtikelList = ({ articles }: { articles: PaginatedProps<Article> }) => {
  const destroy = (id_article: string, title: string) => {
    if (confirm(`Mau hapus artikel "${title}"?`))
      router.delete(route('articles.destroy', id_article))
  }

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
            <div>
              <div
                className="flex justify-between items-center"
              >
                <Link
                  as="button"
                  href={"/Artikel/"+article.id_article}
                  className="text-2xl text-left font-semibold"
                >{article.title}</Link>
                <button
                  onClick={() => destroy(article.id_article, article.title)}
                  className="size-8 flex justify-center items-center text-red-500 hover:bg-foreground/30 rounded-md"
                ><FaTrashCan size={20} /></button>
              </div>
              <p
                className="text-sm font-semibold"
              >
                Oleh:
                <span
                  className="opacity-70"
                > {article.user?.name}</span>
              </p>
              <p className="text-pretty indent-8 tracking-wider">
                {article.body.slice(0, 300)+"... "}
                <Link
                  as="button"
                  href={"/Artikel/"+article.id_article}
                  className="font-semibold underline opacity-65 hover:opacity-100 transition-all duration-300"
                >Lihat artikel.</Link>
              </p>
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
