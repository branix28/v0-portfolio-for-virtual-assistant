export default function ExperienceSection() {
  const experience = [
    {
      period: '2020 - Present',
      title: 'Technical Virtual Assistant',
      company: 'Freelance / Agency Partner',
      description: 'Designed and implemented 50+ automation workflows for startups and agencies, helping them scale operations without additional headcount.',
      highlights: [
        'Reduced client manual work by 90%+ across various industries',
        'Integrated 7,000+ app connections through Zapier and Make',
        'Implemented AI-powered workflows using OpenAI, Claude, and Gemini',
        'Trained clients on automation best practices and maintenance'
      ]
    },
    {
      period: '2017',
      title: 'Web Developer',
      company: 'GoAbroad Philippines Inc.',
      description: 'Developed web applications and gained experience in full-stack development during on-the-job training.',
      highlights: [
        'Worked with C# and JavaScript',
        'Collaborated on multiple web development projects',
        'Learned professional development practices'
      ]
    },
    {
      period: '2012',
      title: 'Technical Support',
      company: 'Cebu City Hall',
      description: 'Provided technical support and troubleshooting for city government systems.',
      highlights: [
        'Computer and network troubleshooting',
        'Technical problem resolution',
        'System support and maintenance'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
        <p className="text-slate-700 dark:text-slate-400 mb-12 text-lg">
          10+ years of technical expertise spanning web development, automation, and IT support
        </p>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={index}
              className="pb-8 border-b-2 border-slate-300 dark:border-slate-700 last:border-b-0 p-6 rounded-lg hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10 hover:scale-105 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-400 whitespace-nowrap md:text-right">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
