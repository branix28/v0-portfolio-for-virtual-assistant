'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      html.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }

  const toggleTheme = () => {
    const newDarkState = !isDark
    setIsDark(newDarkState)
    localStorage.setItem('theme', newDarkState ? 'dark' : 'light')
    applyTheme(newDarkState)
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skillsa', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          <span className="animated-logo">Bryan Napoles</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium scroll-smooth"
            >
              {item.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-muted-foreground" />
              ) : (
                <Moon size={20} className="text-muted-foreground" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="text-muted-foreground" />
              ) : (
                <Moon size={20} className="text-muted-foreground" />
              )}
            </button>
          )}
          <button
            className="text-muted-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium scroll-smooth"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
