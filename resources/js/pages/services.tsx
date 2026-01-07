import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { HeroSection } from "@/components/services/hero"
import { AboutSection } from "@/components/services/about"
import { ListService } from "@/components/services/list"
import { PaketService } from "@/components/services/paket"

export default function Services() {
  return (
    <Layouts>
      <Head title="Pengelola Akun Media Sosial" />
      <HeroSection />
      <AboutSection />
      <ListService />
      <PaketService />
    </Layouts>
  )
}
