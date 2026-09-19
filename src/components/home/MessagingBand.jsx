import Reveal from '../ui/Reveal.jsx'
import IconTile from '../shared/IconTile.jsx'

const pillars = [
  {
    icon: 'ClipboardCheck',
    accent: 'blue',
    title: 'Manager accountability, built in',
    body: 'Growth stops being HR’s problem alone. Structured manager reviews make every leader an active, accountable owner of their team’s development.',
  },
  {
    icon: 'Wrench',
    accent: 'green',
    title: 'Workplace application that sticks',
    body: 'Learning only counts when it changes behaviour. We drive structured on-the-job application so capability shows up where the work happens.',
  },
  {
    icon: 'LineChart',
    accent: 'blue',
    title: 'Measurable outcomes, not activity',
    body: 'Completion rates don’t move a business. We connect development to performance, productivity and ROI leadership can actually see.',
  },
]

export default function MessagingBand() {
  return (
    <section className="relative bg-mist py-24">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
              Why it works
            </span>
            <h2 className="text-display-md font-bold text-heading">
              Intelligence is nothing without{' '}
              <span className="text-prestige-blue">accountability and application</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
              Most platforms stop at content. Prestige Growth Pathways is engineered around the
              three things that actually move performance.
            </p>
          </Reveal>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card flex gap-5 p-5 transition-colors hover:border-prestige-blue/30">
                  <IconTile name={p.icon} accent={p.accent} size="lg" />
                  <div>
                    <h3 className="text-lg font-semibold text-heading">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
