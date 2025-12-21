import { NavMenu } from "./headers";

export default function Footers() {
  return (
    <footer
      className="w-full h-full -mt-10 bg-linear-to-r from-[#DEDEDE] to-[#313131] border border-[#313131] rounded-t-[3rem]"
    >
      <div
        className="z-50 w-[80%] h-60 mx-auto px-10 flex justify-between items-center"
      >
        <h1
          className="text-3xl text-bg font-bold"
        >DigitalMarket</h1>
        <NavMenu is_footer={true} />
        <div
          className="h-[70%] flex flex-col items-start"
        >
          <p
            className="h-fit px-2 py-1 bg-bg rounded-md"
          >growtive@ads.id</p>
        </div>
      </div>
    </footer>
  )
}
