import Hero from '../components/Hero'
import About from '../components/About'
import PrincipalMessage from '../components/PrincipalMessage'
import Journey from '../components/Journey'
import Academics from '../components/Academics'
import Facilities from '../components/Facilities'
import Faculty from '../components/Faculty'
import Achievements from '../components/Achievements'
import ChampionsAndNews from '../components/ChampionsAndNews'
import WhyUs from '../components/WhyUs'
import TrustSafety from '../components/TrustSafety'
import Affiliations from '../components/Affiliations'
import MandatoryDisclosure from '../components/MandatoryDisclosure'
import VideoTour from '../components/VideoTour'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import AlumniSpeak from '../components/AlumniSpeak'
import NewsBlog from '../components/NewsBlog'
import Downloads from '../components/Downloads'
import Careers from '../components/Careers'
import FAQ from '../components/FAQ'
import Admissions from '../components/Admissions'
import Contact from '../components/Contact'
import { Reveal } from '../components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><PrincipalMessage /></Reveal>
      <Reveal><Journey /></Reveal>
      <Reveal><Academics /></Reveal>
      <Reveal><Facilities /></Reveal>
      <Reveal><Faculty /></Reveal>
      <Reveal><Achievements /></Reveal>
      <Reveal><ChampionsAndNews /></Reveal>
      <Reveal><WhyUs /></Reveal>
      <Reveal><TrustSafety /></Reveal>
      <Reveal><Affiliations /></Reveal>
      <Reveal><MandatoryDisclosure /></Reveal>
      <Reveal><VideoTour /></Reveal>
      <Reveal><Events /></Reveal>
      <Reveal><Gallery /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><AlumniSpeak /></Reveal>
      <Reveal><NewsBlog /></Reveal>
      <Reveal><Downloads /></Reveal>
      <Reveal><Careers /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><Admissions /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  )
}
