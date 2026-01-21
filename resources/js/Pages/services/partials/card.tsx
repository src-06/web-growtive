import { motion } from "framer-motion";

export function Card({ id, icon, nama, detail, children, count }: { id: string; icon: string; nama: string; detail: string; children: React.ReactNode; count: number }) {
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
          className="flex flex-col justify-center gap-8"
        >
          <div
            className="flex items-center gap-2"
          >
            <img
              src={icon}
              alt={`${icon}`}
              className="w-15"
            />
            <h1>{nama}</h1>
          </div>
          <p>{detail}</p>
        </div>
        <hr className="mx-2 w-0 h-70 border-3" />
      </div>
      <div
        className="ml-4 col-span-3"
      >
        <div
          className={`grid ${count == 6 ? 'grid-cols-6' : 'grid-cols-3' } ${count == 6 ? 'gap-75' : 'gap-13'} grid-rows-1 text-foreground overflow-x-auto`}
        >{children}</div>
      </div>
    </motion.div>
  )
}
