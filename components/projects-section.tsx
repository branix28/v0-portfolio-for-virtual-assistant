import { ArrowRight, Zap } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Lead Generation Pipeline',
      description: 'Automated lead capture from multiple sources (forms, emails, LinkedIn) with intelligent qualification and CRM integration.',
      platform: 'Zapier',
      impact: 'Reduced manual data entry by 95%',
      tools: ['Google Forms', 'Zapier', 'HubSpot', 'Email']
    },
    {
      title: 'Invoice & Payment Automation',
      description: 'Automated invoice generation, payment reminders, and reconciliation across multiple clients and payment gateways.',
      platform: 'Make',
      impact: '90+ invoices processed monthly automatically',
      tools: ['Make', 'Stripe', 'Gmail', 'Google Sheets']
    },
    {
      title: 'Content Publishing Workflow',
      description: 'Multi-platform content distribution with AI-powered content adaptation and scheduling across social media channels.',
      platform: 'Make + Zapier',
      impact: 'Saved 20+ hours per month',
      tools: ['Make', 'Zapier', 'OpenAI', 'Buffer', 'Slack']
    },
    {
      title: 'Customer Support Ticketing',
      description: 'Intelligent ticket routing system that categorizes support requests and assigns them based on priority and expertise.',
      platform: 'Zapier',
      impact: 'Average response time: 15 mins',
      tools: ['Zapier', 'Email', 'Slack', 'Google Sheets']
    },
    {
      title: 'E-commerce Order Processing',
      description: 'End-to-end automation from order placement to fulfillment, including inventory updates and customer notifications.',
      platform: 'Make',
      impact: '100% order accuracy improved',
      tools: ['Make', 'Shopify', 'Stripe', 'Slack', 'Inventory API']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time data aggregation from multiple sources with automated reporting and stakeholder notifications.',
      platform: 'Zapier + Make',
      impact: 'Real-time insights 24/7',
      tools: ['Zapier', 'Make', 'Google Sheets', 'Data Studio', 'Gmail']
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
        <p className="text-slate-700 dark:text-slate-400 mb-12 text-lg">
          Real-world automation solutions I&apos;ve built for startups and agencies
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-400 dark:hover:border-blue-400/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-500/20 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {project.platform}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-400 mb-4">
                {project.description}
              </p>

              <div className="mb-4 p-3 rounded bg-blue-100 dark:bg-blue-400/10 border-2 border-blue-300 dark:border-blue-400/20">
                <p className="text-sm text-blue-700 dark:text-blue-300 font-semibold">
                  💡 {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-300 dark:hover:bg-blue-500/30 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
