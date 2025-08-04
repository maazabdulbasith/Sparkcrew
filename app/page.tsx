'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhySparkCrewSection from '@/components/WhySparkCrewSection'
import CertificationsSection from '@/components/CertificationsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import GetInvolvedSection from '@/components/GetInvolvedSection'
import ContactSection from '@/components/ContactSection'
import ComingSoonSection from '@/components/ComingSoonSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <HowItWorksSection />
      <WhySparkCrewSection />
      <CertificationsSection />
      <TestimonialsSection />
      <GetInvolvedSection />
      <ContactSection />
      <ComingSoonSection />
      <Footer />
    </main>
  )
} 