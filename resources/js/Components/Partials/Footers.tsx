import { NavBtn } from "./Headers"
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu"

const Footers = () => {
  return (
    <footer
      className="relative w-full h-60 -mt-10 px-24 flex justify-between items-center text-background bg-linear-to-br from-foreground to-[#aaa] border rounded-t-[3rem]"
    >
      <h1
        className="text-3xl font-bold"
      >Growdience</h1>
      <NavBtn orientation="horizontal" />
      <div
        className="flex flex-col gap-2 font-semibold [&>p]:flex [&>p]:items-center [&>p]:gap-x-2"
      >
        <p><LuMapPin size={20} /> <span>Cileungsi, Bogor, Jawa Barat</span></p>
        <p><LuMail size={20} /> <span>support@growdience.help</span></p>
        <p><LuPhone size={20} /> <span>+62 819 2171 4297</span></p>
      </div>
    </footer>
  )
}

export { Footers }
