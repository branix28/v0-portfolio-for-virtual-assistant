'use client'

import Link from 'next/link'
import { Mail, Facebook, Briefcase, Phone, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-200 dark:bg-slate-900 border-t-2 border-blue-400/30 dark:border-blue-500/20 py-12 px-6 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Bryan Napoles</h3>
            <p className="text-slate-700 dark:text-slate-400 text-sm">Technical Virtual Assistant specializing in Zapier & Make automation</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a></li>
              <li><a href="#skills" className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a></li>
              <li><a href="#projects" className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Projects</a></li>
              <li><a href="#experience" className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Experience</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-medium">Zapier Automation</span></li>
              <li><span className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-medium">Make.com Workflows</span></li>
              <li><span className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-medium">Process Optimization</span></li>
              <li><span className="text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-medium">Integration Setup</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:brynapoles12@gmail.com" className="flex items-center gap-2 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">
                  <Mail size={16} />
                  <span className="text-sm">brynapoles12@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:09393241868" className="flex items-center gap-2 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">
                  <Phone size={16} />
                  <span className="text-sm">09393241868</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t-2 border-slate-300 dark:border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <Link
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-200 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 transform"
            >
              <Briefcase size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-200 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 transform"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="mailto:brynapoles12@gmail.com"
              className="p-2 rounded-lg bg-blue-200 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 transform"
            >
              <Mail size={20} />
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-200 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-300 dark:hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 transform"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <p className="text-slate-700 dark:text-slate-400 text-sm text-center md:text-right">
            © {currentYear} Bryan Napoles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
