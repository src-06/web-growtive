import { LayoutPages, SectionGradBG } from "@/Components"
import { toLocalDate } from "@/Lib/util"
import { Article } from "@/Types"

const AdminArtikelLihat = ({ article }: { article: Article }) => {
  return (
    <LayoutPages>
      <SectionGradBG
        className="h-full py-20 text-foreground from-[#666666] to-foreground"
      >
        <div
          className="p-6 bg-background/70 shadow-xl shadow-background/50 rounded-3xl"
        >
          <h1
            className="text-2xl text-left font-semibold"
          >{article.title}</h1>
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <div
            className="flex justify-between items-start"
          >
            <p
              className="text-foreground/80"
            >
              Oleh:{" "}
              <span
                className="font-semibold"
              >{article.user.name}</span>
            </p>
            <div
              className="flex flex-col text-foreground/80"
            >
              <span>Dibuat pada: <span className="font-semibold">{toLocalDate({ISO_date: article.created_at})}</span></span>
              <span>Update terakhir: <span className="font-semibold">{toLocalDate({ISO_date: article.updated_at})}</span></span>
            </div>
          </div>
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <p>
            {article.body}
          </p>
        </div>
      </SectionGradBG>
    </LayoutPages>
  )
}

export default AdminArtikelLihat
