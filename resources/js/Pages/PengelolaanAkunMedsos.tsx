// TODO: Buat ulang codingan ini hasilnya ngebug karena ada banyak perubahan setelah downgrade.

import { LayoutPages } from "../Components"
import { AboutSection } from "./services/about"
import { HeroSection } from "./services/hero"
import { ListService } from "./services/list"
import { PaketService } from "./services/paket"

const HalamanPengelolaanAkunMedsos = () => {
  return (
    <LayoutPages>
      <HeroSection />
      <AboutSection />
      <ListService />
      <PaketService />
    </LayoutPages>
  )
}

export default HalamanPengelolaanAkunMedsos
