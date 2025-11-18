import Link from 'next/link'
import { Mail, Facebook, Briefcase, ExternalLink } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
              Bryan T. Napoles
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              Technical Virtual Assistant & Automation Specialist
            </p>

            {/* Description */}
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
              Expert in designing and implementing scalable no-code automations using 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Zapier</span> and 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> Make</span>. 
              I help businesses eliminate repetitive tasks, reduce manual work by 90%+, 
              and build reliable self-running systems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {/* Email */}
              <Link 
                href="mailto:brynapoles12@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Mail size={18} />
                Email
              </Link>

              {/* Upwork */}
              <Link 
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-medium transition-all duration-300 hover:scale-105"
              >
                <Briefcase size={18} />
                Upwork
              </Link>

              {/* Facebook */}
              <Link 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-medium transition-all duration-300 hover:scale-105"
              >
                <Facebook size={18} />
                Facebook
              </Link>

              {/* Contact */}
              <Link 
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 font-medium transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={18} />
                Contact
              </Link>
            </div>

            {/* Phone */}
            <p className="text-slate-600 dark:text-slate-400">
              <span className="text-slate-900 dark:text-white font-semibold">📞 09393241868</span>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl bg-gradient-to-br from-blue-400/20 to-blue-500/20 dark:from-blue-500/20 dark:to-blue-600/20 border-2 border-blue-600 dark:border-blue-400/50 flex items-center justify-center overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform">
              {/* Profile Image Placeholder */}
              <img
                src="/professional-profile-photo-of-a-man-in-business-at.jpg"
                alt="Bryan Napoles - Technical Virtual Assistant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
