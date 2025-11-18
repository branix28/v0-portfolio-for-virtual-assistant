'use client'

import { useState, useEffect } from 'react'
import { Star, Send } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  message: string
  rating: number
  createdAt: string
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    message: '',
    rating: 5,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('testimonials')
    if (saved) {
      setTestimonials(JSON.parse(saved))
    } else {
      // Initialize with 5 realistic default testimonials
      const defaultTestimonials: Testimonial[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          title: 'Marketing Director',
          company: 'Tech Innovations Inc',
          message: 'Bryan completely transformed our email marketing workflows using Zapier. What used to take our team 10 hours per week is now fully automated. His expertise in Make.com also helped us create a seamless integration between our CRM and email platform. Highly recommend!',
          rating: 5,
          createdAt: '2024-10-15',
        },
        {
          id: '2',
          name: 'Michael Chen',
          title: 'Operations Manager',
          company: 'E-Commerce Solutions',
          message: 'Working with Bryan was a game-changer for our operations. He built complex Zapier automations that connected our inventory system, Shopify store, and accounting software. The automation has reduced manual data entry by 95% and eliminated countless errors. Very professional and communicative throughout the project.',
          rating: 5,
          createdAt: '2024-10-10',
        },
        {
          id: '3',
          name: 'Emily Rodriguez',
          title: 'Founder',
          company: 'Creative Agency Plus',
          message: 'Bryan helped us set up Make.com workflows for our project management system. He understood our needs perfectly and created custom automations that saved us significant time and money. His follow-up support was excellent. I would definitely work with him again.',
          rating: 5,
          createdAt: '2024-09-28',
        },
        {
          id: '4',
          name: 'David Thompson',
          title: 'HR Manager',
          company: 'Global Recruitment Co',
          message: 'We needed help automating our HR processes and Bryan delivered beyond expectations. He created a comprehensive Zapier solution that handles candidate notifications, interview scheduling, and onboarding workflows. The time we saved has been incredible.',
          rating: 4,
          createdAt: '2024-09-20',
        },
        {
          id: '5',
          name: 'Jessica Lee',
          title: 'E-Learning Coordinator',
          company: 'Digital Education Platform',
          message: 'Bryan set up an amazing Make.com automation for our student management system. Student enrollments, email notifications, and certificate generation are now completely automated. His technical knowledge and problem-solving skills are outstanding. Worth every penny!',
          rating: 5,
          createdAt: '2024-09-12',
        },
      ]
      setTestimonials(defaultTestimonials)
      localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toLocaleDateString(),
    }

    const updated = [newTestimonial, ...testimonials]
    setTestimonials(updated)
    localStorage.setItem('testimonials', JSON.stringify(updated))

    setFormData({
      name: '',
      title: '',
      company: '',
      message: '',
      rating: 5,
    })
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-foreground">Client Testimonials</h2>
        <p className="text-muted-foreground mb-12 text-lg">What my clients are saying about working with me</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Testimonial Form */}
          <div className="bg-card border border-border rounded-2xl p-8 h-fit sticky top-32">
            <h3 className="text-2xl font-bold text-foreground mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Your job title"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Rating *</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="5">⭐ 5 Stars - Excellent</option>
                  <option value="4">⭐ 4 Stars - Very Good</option>
                  <option value="3">⭐ 3 Stars - Good</option>
                  <option value="2">⭐ 2 Stars - Fair</option>
                  <option value="1">⭐ 1 Star - Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Testimonial *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your experience working with me..."
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>
              {submitted && (
                <p className="text-green-500 text-center text-sm font-medium">Thank you! Your testimonial has been added.</p>
              )}
            </form>
          </div>

          {/* Testimonials Display */}
          <div className="space-y-6">
            {testimonials.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <p className="text-muted-foreground">No testimonials yet. Be the first to share your experience!</p>
              </div>
            ) : (
              testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title} at {testimonial.company}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed mb-3">{testimonial.message}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.createdAt}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
