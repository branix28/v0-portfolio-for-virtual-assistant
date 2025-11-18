import { Zap, Workflow, Brain, Code2 } from 'lucide-react'

export default function SkillsSection() {
  const skills = [
    {
      icon: Zap,
      name: 'Zapier Automation',
      description: 'Multi-step workflows, API integrations, and trigger-based automations connecting 6,000+ apps'
    },
    {
      icon: Workflow,
      name: 'Make.com (Integromat)',
      description: 'Complex workflow design, webhooks, data transformation, and advanced scenario building'
    },
    {
      icon: Brain,
      name: 'AI Integration',
      description: 'OpenAI, Claude, Gemini integration for intelligent automation and content generation'
    },
    {
      icon: Code2,
      name: 'Technical Skills',
      description: 'JavaScript, C#, project management, and network troubleshooting'
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Core Expertise</h2>
        <p className="text-slate-700 dark:text-slate-400 mb-12 text-lg">
          Specialized in no-code automation platforms and AI integration
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div 
                key={index}
                className="p-8 rounded-lg border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-500/20 hover:scale-105 transform hover:-translate-y-2 cursor-pointer"
              >
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-slate-700 dark:text-slate-400">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
