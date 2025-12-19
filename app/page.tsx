// app/page.js
import HeroScroll from '@/app/components/Hero'
import Team from '@/app/components/Team'
import UpcomingEvents from '@/app/components/UpcomingEvents'
import { Award, Users, Calendar, Music } from 'lucide-react'
// import Team from './components/Team'
import TextScroll from '@/app/components/Textscroll'
import Contactus from '@/app/components/Contectus'
import ProgramSection from './components/ProgramSection'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroScroll />
      <TextScroll />
      <ProgramSection />
      <UpcomingEvents />
      <Testimonial />
      <hr className="text-white" />
      <Team />
      <Contactus />
    </div>
  )
}