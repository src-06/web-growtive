import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { HeroSection } from "@/components/endors/hero"
import { WhatSection } from "@/components/endors/what"

export default function Endors() {
  return (
    <Layouts>
      <Head title="Endorsement" />
      <HeroSection />
      <WhatSection />
    </Layouts>
  )
}
