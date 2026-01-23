import { LayoutPages, PaginatedPage, SectionGradBG } from "@/Components"
import { toLocalDate } from "@/Lib/util"
import { Article, PaginatedProps } from "@/Types"
import { Link } from "@inertiajs/react"

const ArtikelList = ({ articles }: { articles: PaginatedProps<Article> }) => {
  return (
    <LayoutPages>
      <SectionGradBG
        className="h-full py-20 text-foreground from-[#666666] to-foreground"
      >
        <h1
          className="text-3xl text-center font-bold uppercase"
        >Artikel Kami</h1>
        <div
          className="mt-10 flex flex-col gap-y-10"
        >
          { articles.data.map(article =>
            <div
              key={article.id_article}
              className="p-6 bg-background/70 shadow-xl shadow-background/50 rounded-3xl"
            >
              <Link
                as="button"
                href={"/Artikel/"+article.id_article}
                className="text-2xl text-left font-semibold"
              >{article.title}</Link>
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
                {article.body.slice(0, 300)}...{" "}
                <Link
                  as="button"
                  href={"/Artikel/"+article.id_article}
                  className="font-semibold underline opacity-65 hover:opacity-100 transition-all duration-300"
                >Lihat artikel</Link>
              </p>
            </div>
          )}
          <PaginatedPage data={articles} className="bg-background/70" />
        </div>
      </SectionGradBG>
    </LayoutPages>
  )
}

export default ArtikelList
