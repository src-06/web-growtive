import { Head } from "@inertiajs/react"
import Layouts from "@/components/layouts"
import { HeroSection } from "@/components/about/hero"
import { AboutSection } from "@/components/about/about"
import { VMSection } from "@/components/about/vm"
import { WorkSection } from "@/components/about/work"

export default function About() {
  return (
    <Layouts>
      <Head title="Tentang Kami" />
      <HeroSection />
      <AboutSection />
      <VMSection />
      <WorkSection />
    </Layouts>
  )
}
