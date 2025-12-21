
export function Card2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div
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
              src="assets/images/services-tt.svg"
              alt="services-tt"
              className="w-15"
            />
            <h1>Tiktok</h1>
          </div>
          <h1 className="-my-9 font-bold">&</h1>
          <div
            className="w-full flex items-center gap-2"
          >
            <img
              src="assets/images/services-ig.svg"
              alt="services-ig"
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
          className={`grid grid-cols-6 gap-75 text-fg overflow-x-auto`}
        >{children}</div>
      </div>
    </div>
  )
}
