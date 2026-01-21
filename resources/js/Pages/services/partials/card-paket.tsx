
export function CardPaket({ paket, price1, price2, children }: { paket: string; price1: string; price2?: string; children: React.ReactNode }) {
  return (
    <div
      className="relative w-60 h-110 flex flex-col items-center bg-linear-to-r from-[#797979] to-background rounded-3xl"
    >
      <h1
        className="py-3 font-black"
      >{paket}</h1>
      <hr className="w-full border" />
      <ul
        className="ml-8 pt-3 w-[90%] list-disc font-semibold"
      >{children}</ul>
      <button
        className="absolute bottom-3 px-2 py-1 text-lg font-bold border-2"
      >
        <div
          className="flex flex-col items-center"
        >
          <span>{price1}</span>
          <p className="text-base">{price2}</p>
        </div>
      </button>
    </div>
  )
}
