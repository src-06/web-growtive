import { LayoutPages, PaginatedPage, SectionGradBG } from "@/Components"
import { basePath } from "@/Config/env"
import { toLocalDate } from "@/Lib/util"
import { Article, PaginatedProps } from "@/Types"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"

const ArtikelList = ({ articles }: { articles: PaginatedProps<Article> }) => {
  return (
    <LayoutPages>
      { articles.data.length > 0
      ? <SectionGradBG
          className="h-full py-20 text-foreground from-[#666666] to-foreground"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'backInOut',
            }}
            className="text-3xl text-center font-bold uppercase"
          >Artikel Kami</motion.h1>
          <div
            className="mt-10 flex flex-col gap-y-10"
          >
            { articles.data.map(article =>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                key={article.id_article}
                className="p-6 flex items-center gap-x-4 bg-background/70 shadow-xl shadow-background/50 rounded-3xl"
              >
                <img
                  src={basePath+"/"+article.thumbnail}
                  alt={"Tumbnail "+article.title}
                  className="w-[20%] h-auto shadow-md shadow-background rounded-2xl"
                />
                <div
                  className="w-[80%]"
                >
                  <Link
                    as="button"
                    href={basePath+"/Artikel/"+article.id_article}
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
              </motion.div>
            )}
            <PaginatedPage data={articles} className="bg-background/70" />
          </div>
        </SectionGradBG>
      : <SectionGradBG>
          <div className="w-full h-full flex justify-center items-center"><h1 className="text-4xl text-white font-bold">Tidak ada artikel saat ini...</h1></div>
        </SectionGradBG>
      }
    </LayoutPages>
  )
}

export default ArtikelList
