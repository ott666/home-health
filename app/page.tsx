'use client'
import HeroSection from '@/components/Sections/HeroSection/HeroSection'
import SegurancaSection from '@/components/Sections/SegurancaSection/SegurancaSection'
import ServicosSection from '@/components/Sections/ServicosSection/ServicosSection'
import FotosSection from '@/components/Sections/FotosSection/FotosSection'
import TestimonialsSection from '@/components/Sections/TestimonialsSection/TestimonialsSection'
import PerguntasSection from '@/components/Sections/PerguntasSection/PerguntasSection'
import GoogleMaps from '@/components/components/GoogleMaps'
import ContatoSection from '@/components/Sections/ContatoSection/ContatoSection'
export default function Home() {
  return (
    <main>
      <HeroSection/>
      <SegurancaSection/>
      <ServicosSection/>
      <TestimonialsSection/>
      <FotosSection/>
      <PerguntasSection/>
      <ContatoSection/>
    </main>
  )
}
