import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { HeroSection } from "@/components/home/hero"
import { AboutUsSection } from "@/components/home/about"
import { ServicesSection } from "@/components/home/services"
import { HowToSection } from "@/components/home/howto"

export default function Home() {
  return (
    <Layouts>
      <Head title="Beranda" />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <HowToSection />
    </Layouts>
  )
}
