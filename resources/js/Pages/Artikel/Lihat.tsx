import { LayoutPages, SectionGradBG } from "@/Components"
import { basePath } from "@/Config/env"
import { toLocalDate } from "@/Lib/util"
import { Article } from "@/Types"
import { motion } from "framer-motion"

const AdminArtikelLihat = ({ article }: { article: Article }) => {
  return (
    <LayoutPages>
      <SectionGradBG
        className="h-full py-20 text-foreground from-[#666666] to-foreground"
      >
        <motion.div
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
          className="p-6 bg-background/70 shadow-xl shadow-background/50 rounded-3xl"
        >
          <motion.img
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: 'backInOut',
            }}
            src={basePath+"/"+article.thumbnail}
            alt={"Tumbnail "+article.title}
            className="w-full h-auto shadow-md shadow-background rounded-2xl"
          />
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
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
            className="text-4xl text-left font-semibold"
          >{article.title}</motion.h1>
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <motion.div
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
              <span>Diedit pada: <span className="font-semibold">{toLocalDate({ISO_date: article.updated_at})}</span></span>
            </div>
          </motion.div>
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <hr className="w-full h-0.5 my-3 border border-dashed outline-0" />
          <div
            className="flex flex-col gap-y-2"
          >
            {article.body.split('\n').map((paragraph, index) =>
              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1 + 0.1*index,
                  duration: 0.6,
                  ease: 'backInOut',
                }}
                key={index} className="text-pretty indent-8 tracking-wider whitespace-break-spaces">{paragraph}</motion.p>
            )}
          </div>
        </motion.div>
      </SectionGradBG>
    </LayoutPages>
  )
}

export default AdminArtikelLihat
