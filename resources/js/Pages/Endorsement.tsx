// TODO: Buat ulang codingan ini hasilnya ngebug karena ada banyak perubahan setelah downgrade.

import { LayoutPages } from "../Components"
import { HeroSection } from "./endors/hero"
import { WhatSection } from "./endors/what"

const HalamanEndorsement = () => {
  return (
    <LayoutPages>
      <HeroSection />
      <WhatSection />
    </LayoutPages>
  )
}

export default HalamanEndorsement
