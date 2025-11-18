import Link from 'next/link'
import { Mail, Briefcase, Zap } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import ExperienceSection from '@/components/experience-section'
import TestimonialsSection from '@/components/testimonials-section'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
