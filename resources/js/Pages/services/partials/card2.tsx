import { motion } from "framer-motion";
import logoIG from "~/images/services/ig.svg"
import logoTT from "~/images/services/tt.svg"

export function Card2({ id, children, count }: { id: string; children: React.ReactNode; count: number }) {
  return (
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
        delay: 0.2,
        duration: 0.8,
        ease: 'backInOut',
      }}
      id={`${id}`}
      className="w-full h-fit px-6 py-20 grid grid-cols-4 gap-1 bg-white rounded-[3rem]"
    >
      <div
        className="col-span-1 flex items-center gap-1 text-3xl font-semibold"
      >
        <div
          className="flex flex-col justify-center items-center gap-8"
        >
          <div
            className="w-full flex items-center gap-2"
          >
            <img
              src={logoTT}
              alt="tt"
              className="w-15"
            />
            <h1>Tiktok</h1>
          </div>
          <h1 className="-my-9 font-bold">&</h1>
          <div
            className="w-full flex items-center gap-2"
          >
            <img
              src={logoIG}
              alt="ig"
              className="w-15"
            />
            <h1>Instagram</h1>
          </div>
          <p>Harga Kelola Sosial Media ( Instagram & Tiktok )</p>
        </div>
        <hr className="mx-2 w-0 h-70 border-3" />
      </div>
      <div
        className="ml-4 col-span-3"
      >
        <div
          className={`grid grid-cols-${count} gap-13 text-foreground overflow-x-auto`}
        >{children}</div>
      </div>
    </motion.div>
  )
}
