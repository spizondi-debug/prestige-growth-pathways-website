// ============================================================
// PAGE-SPECIFIC CONTENT — industries, resources, values, etc.
// Placeholder copy — edit freely.
// ============================================================

// ---- Industries ----
export const industries = [
  {
    id: 'financial',
    name: 'Financial Services',
    icon: 'Banknote',
    blurb: 'Build risk-aware, compliant and high-performing teams in a fast-moving regulatory landscape.',
    points: ['Regulatory competence tracking', 'Advisor capability uplift', 'Leadership pipelines'],
  },
  {
    id: 'retail',
    name: 'Retail & Consumer',
    icon: 'ShoppingBag',
    blurb: 'Scale consistent service and store leadership across distributed, high-turnover workforces.',
    points: ['Frontline onboarding', 'Store manager development', 'Seasonal readiness'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    blurb: 'Maintain clinical competence and compliance while growing future healthcare leaders.',
    points: ['Competency assurance', 'Continuing development', 'Compliance evidence'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    icon: 'Factory',
    blurb: 'Upskill operators and supervisors to drive safety, quality and operational excellence.',
    points: ['Safety competence', 'Supervisor capability', 'Skills matrices'],
  },
  {
    id: 'technology',
    name: 'Technology & Telecoms',
    icon: 'Cpu',
    blurb: 'Keep pace with change through continuous, role-aware technical and leadership growth.',
    points: ['Skills currency', 'Engineering pathways', 'Tech leadership'],
  },
  {
    id: 'public',
    name: 'Public Sector & NGO',
    icon: 'Building2',
    blurb: 'Develop accountable, capable teams that deliver measurable outcomes for communities.',
    points: ['Capability frameworks', 'Governance & accountability', 'Impact reporting'],
  },
]

// ---- Resources ----
export const resourceCategories = ['All', 'Guides', 'Reports', 'Webinars', 'Case Studies']

export const resources = [
  {
    id: 'r1',
    category: 'Guides',
    title: 'The Workforce Growth Intelligence Playbook',
    excerpt: 'A practical framework for connecting development activity to measurable business outcomes.',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: 'r2',
    category: 'Reports',
    title: 'State of Manager Accountability 2026',
    excerpt: 'What separates organisations where managers truly own growth from those where they don’t.',
    readTime: 'Report',
  },
  {
    id: 'r3',
    category: 'Webinars',
    title: 'From Training Spend to Proven ROI',
    excerpt: 'How to instrument learning so finance and the board finally see the return.',
    readTime: '45 min',
  },
  {
    id: 'r4',
    category: 'Case Studies',
    title: 'Scaling Capability Across 30 Sites',
    excerpt: 'How a national retailer standardised growth without slowing the frontline.',
    readTime: 'Case study',
  },
  {
    id: 'r5',
    category: 'Guides',
    title: 'Designing Development Plans People Actually Use',
    excerpt: 'Principles for personalised plans that stay alive long after the kickoff conversation.',
    readTime: '9 min read',
  },
  {
    id: 'r6',
    category: 'Reports',
    title: 'The Capability Risk Index',
    excerpt: 'Spotting capability, compliance and flight risk before it reaches the bottom line.',
    readTime: 'Report',
  },
]

// ---- About: values ----
export const values = [
  {
    title: 'Evidence first',
    body: 'We replace assumptions with assessment, behaviour and outcome data at every step.',
    icon: 'Microscope',
  },
  {
    title: 'Growth is a system',
    body: 'Lasting development comes from connected processes, not one-off training events.',
    icon: 'Workflow',
  },
  {
    title: 'Accountable by design',
    body: 'We make managers active owners of growth, not bystanders to it.',
    icon: 'UserCheck',
  },
  {
    title: 'Measurable impact',
    body: 'If it doesn’t change behaviour or performance, it isn’t finished.',
    icon: 'Target',
  },
]

// ---- About: timeline ----
export const timeline = [
  {
    year: '2022',
    title: 'Prestige Tutelage is established',
    paras: [
      'Prestige Tutelage was created with a clear purpose: to make skills development practical, measurable and relevant to the realities of the South African workplace.',
      'We began by building our training capability, industry relationships and understanding of employer skills-development needs.',
    ],
  },
  {
    year: '2023',
    title: 'Our first clients and workplace programmes',
    paras: [
      'Prestige began delivering training programmes to its first clients and working directly with employers and learners.',
      'Through these early partnerships, we gained first-hand insight into workplace challenges including learner progress, attendance, workplace readiness, assessment and the need for stronger links between training and business performance.',
    ],
  },
  {
    year: '2024',
    title: 'Research, skills gaps and workforce needs',
    paras: [
      'As our client base grew, our role expanded beyond simply delivering training.',
      'We began conducting deeper research into organisational skills gaps, workforce capability, employee development needs and the alignment between training programmes and business objectives.',
    ],
    shift: { from: 'Which course can we offer?', to: 'What capability does this organisation actually need?' },
  },
  {
    year: '2025',
    title: 'Accreditation growth and a new need emerges',
    paras: [
      'Prestige continued expanding its accredited training offering across occupational, management, technical and workplace-development programmes.',
      'At the same time, working with employers highlighted a bigger challenge: organisations needed a better way to understand, manage and measure employee development across the entire skills journey.',
      'Training records, assessments, skills gaps, learner progress, workplace evidence and development plans were often sitting in different places. We recognised the need for a more connected system.',
    ],
  },
  {
    year: '2026',
    title: 'Prestige Growth Pathways',
    paras: [
      'That need led to the development of Prestige Growth Pathways, bringing training, skills-gap analysis, assessments, workforce intelligence and employee development into one connected approach.',
      'Prestige is evolving from being only a training provider into a strategic workforce development partner, helping organisations answer three important questions.',
    ],
    questions: [
      'Where are our people now?',
      'Where do they need to grow?',
      'What is the best pathway to get them there?',
    ],
  },
]

// ---- Training Solutions: delivery formats ----
export const deliveryFormats = [
  { title: 'Live Facilitation', body: 'Expert-led virtual and in-person sessions that drive engagement and depth.', icon: 'Presentation' },
  { title: 'Digital & Micro Learning', body: 'On-demand, mobile-first content that fits the flow of work.', icon: 'Smartphone' },
  { title: 'Coaching & Mentoring', body: 'One-to-one and group coaching to embed behaviour change.', icon: 'MessagesSquare' },
  { title: 'Workplace Projects', body: 'Applied assignments that prove competence on the job.', icon: 'Wrench' },
]

// ---- Generic FAQ (used on Contact / Book pages) ----
export const faqs = [
  {
    q: 'How quickly can we get started?',
    a: 'Most organisations move from consultation to a configured pilot within a few weeks, depending on scope and integrations.',
  },
  {
    q: 'Does the platform integrate with our HR systems?',
    a: 'Yes. Prestige Growth Pathways is built to integrate with common HRIS, LMS and identity providers.',
  },
  {
    q: 'Can we start with a single team?',
    a: 'Absolutely. Many partners begin with a focused pilot and scale once outcomes are proven.',
  },
  {
    q: 'How do you measure ROI?',
    a: 'The ROI Engine links development activity to performance and productivity indicators that matter to your business.',
  },
]
