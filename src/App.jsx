import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-[68px] lg:pb-0">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}
