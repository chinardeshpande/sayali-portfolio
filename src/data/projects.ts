export interface Project {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  tags: string[];
  cover: string;
  heroImage: string;
  brief: string;
  objective: string;
  problemStatement: string;
  challenge: string;
  intervention: string;
  approach: string[];
  outcome: string[];
  impact: string;
  skills: string[];
  keyMetric?: string;
  metricLabel?: string;
  testimonials?: {
    quote: string;
    author: string;
    role: string;
  }[];
  visualAssets?: {
    src: string;
    caption: string;
    alt: string;
  }[];
  keyLearnings?: string[];
  processImages?: string[];
  researchImages?: string[];
  experiencePillars?: {
    number: string;
    title: string;
    description: string;
  }[];
  solutionMedia?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'nurse-burnout',
    title: 'Reducing Nurse Burnout to Save the NHS £180M Annually',
    subtitle: 'A System to Revitalize Care for Caregivers',
    context: 'NHS × RCA Collaboration',
    tags: ['Healthcare', 'Service Design', 'UX Research'],
    cover: '/images/projects/nurse-burnout-hero.jpg',
    heroImage: '/images/projects/nurse-burnout-hero.jpg',
    brief: 'The underlying cause of the mass exodus of NHS nurses in the UK in 2022 was burnout and poor mental health. The nursing workforce is continually diminishing, disrupting healthcare delivery.',
    objective: 'Design a service that addresses nurse burnout by fostering peer connections within existing healthcare workflows, targeting measurable organizational outcomes.',
    problemStatement: 'NHS nurses are experiencing severe burnout due to systemic underrecognition of their contributions, shift-driven social isolation that prevents meaningful colleague relationships, and a critical disconnect between understanding the importance of wellbeing and having practical capacity to prioritize it. Burnout leads to nurse attrition, which costs the NHS £500M+ annually and reduces quality of patient care.',
    challenge: 'While nurses are inherently motivated to care for colleagues over themselves (78% more than self-care), systemic barriers like cultural diversity gaps, scheduling conflicts, and lack of support frameworks prevent them from translating this motivation into meaningful peer connection.',
    intervention: 'Built Coco, a peer-to-peer buddy matching and recognition service that integrates seamlessly with hospital scheduling systems (e.g., RLDatix Allocate Loop). The solution embeds peer support into naturally occurring workflow touchpoints such as shift check-ins, break scheduling, and handovers, fostering engagement and community through AI-powered break coordination.',
    approach: [
      'Discovery: Conducted comprehensive 12-week research study across 5 NHS trusts combining quantitative analysis of 900+ workers with qualitative insights',
      'Deployed robust research methodology including surveys, HR data analysis, literature reviews on systemic and psychological landscape of burnout, and international healthcare system comparisons',
      'Conducted 25 in-depth nurse interviews, 30 hours of ethnographic shift shadowing, and management focus groups',
      'Theoretical Foundation: Analyzed burnout as a systemic problem beyond individual wellness',
      'Co-Creation: Facilitated workshops across NHS and stakeholder organizations to identify that nurses are motivated to care for peers but lack support frameworks',
      'UX Design: Applied Jakob\'s Law - leveraged existing hospital scheduling systems nurses already use multiple times daily, reducing learning curve to near-zero',
      'Applied BJ Fogg\'s Behavior Model (B=MAT): Designed triggers at optimal moments (shift transitions, breaks) where nurses naturally check schedules 4-7 times per shift',
      'Designed for Discoverability: Included buddy connection opportunities in three key workflow touchpoints using Fitts\'s Law and Kairos Principle',
      'AI-Powered Auto-Scheduling: Reduced break coordination from 8 minutes/5+ messages to 1-tap decision using Recognition Over Recall principle',
      'Experience Pillars: Peer-first approach, seamless integration, and cultural transformation through bottom-up engagement'
    ],
    outcome: [
      'Reduced nurse burnout by 67% in pilot programs',
      'Decreased turnover risk by 24%',
      'Projected £180M in potential annual savings for the NHS',
      'Projected 5% reduction in burnout-related absences (~£25M in annual savings)',
      'Improved satisfaction scores during pilot program',
      'Framework adopted by local clinics post-study',
      'Reduced break coordination from 8 minutes to 1-tap decision',
      'Decreased notification dismissal rate from 67% to near-zero by integrating into existing workflows'
    ],
    impact: 'Coco reduced nurse burnout by 67% and turnover risk by 24%, translating to £180M in potential annual savings for the NHS by making peer support a seamless part of hospital workflows. By fostering peer connections within existing healthcare workflows, we address burnout as a system at the community level while driving measurable organizational outcomes.',
    skills: ['Ethnographic Research', 'Mixed-Methods Research', 'User Journey Mapping', 'Service Blueprinting', 'Co-Creation Workshops', 'Behavioral Psychology (Fogg Model)', 'UX Principles (Jakob\'s Law, Fitts\'s Law)', 'AI-Powered UX', 'Prototyping', 'Usability Testing', 'Stakeholder Engagement', 'Design Systems'],
    keyMetric: '67%',
    metricLabel: 'Reduction in Burnout',
    testimonials: [
      {
        quote: 'The auto-scheduling feature is brilliant. It does the hard work for me!',
        author: 'NHS Nurse',
        role: 'Pilot Program Participant'
      },
      {
        quote: 'Her ability to move from user insights to tangible prototypes is outstanding.',
        author: 'UX Lead',
        role: 'NHS Project'
      }
    ],
    keyLearnings: [
      'Designing for integration, not addition – Healthcare workers don\'t need more tools; they need their existing tools to work for them. The biggest impact came from embedding support in workflows they already trusted, not asking them to adopt something new. Learning: When users say "I don\'t have time," they often mean "this doesn\'t fit my mental model." Integration solves both problems.',
      'The power of removing friction – The automated break coordination feature tested better than any standalone feature. Sometimes the best design isn\'t what you add, it\'s what you automate away. Learning: Every decision, click, or thought required is friction. AI should absorb complexity so users experience simplicity.',
      'Behavioral psychology bridges research and design – Understanding the Fogg Behavior Model transformed vague insights ("nurses want peer support") into actionable design ("trigger at shift transitions, make one-tap easy, leverage peer-care motivation"). Learning: Psychological frameworks aren\'t academic; they\'re practical tools for translating user needs into interface decisions.'
    ],
    processImages: [
      '/images/projects/2GBiYx2ZpmmmhRPxdmLciSVQ0.jpg',
      '/images/projects/fXznJAjgpd2qiwkJ05dZBf9cXoI.jpg',
      '/images/projects/htYHRYsHrSMZWfsXEofLxbJFI.jpg',
      '/images/projects/Mx7ImnAeNAUey8SCtrgi7n1yc.jpg',
      '/images/projects/SHyKFkFpZGUHc7eR0pFPzMy6tc.png',
      '/images/projects/TfjBtqhnA7teB9VNxeNbA7vaOGQ.png'
    ],
    experiencePillars: [
      {
        number: '01',
        title: 'Peer-First Approach',
        description: 'Leverage natural helping behaviors over top-down wellness'
      },
      {
        number: '02',
        title: 'Seamless Integration',
        description: 'Embed within existing hospital systems and workflows'
      },
      {
        number: '03',
        title: 'Cultural Transformation',
        description: 'Create systemic change through bottom-up engagement'
      }
    ],
    solutionMedia: [
      {
        type: 'video',
        src: '/videos/nurse-burnout/gIZ3THuRP4RcoQKkTPs7N01mBZY.mp4',
        alt: 'Nurse burnout solution demonstration'
      },
      {
        type: 'image',
        src: '/images/projects/nwTVwh4hG5XuMvJRUjxNZz8BoU.avif',
        alt: 'Solution design interface 1'
      },
      {
        type: 'image',
        src: '/images/projects/nwTVwh4hG5XuMvJRUjxNZz8BoU (1).avif',
        alt: 'Solution design interface 2'
      },
      {
        type: 'image',
        src: '/images/projects/nwTVwh4hG5XuMvJRUjxNZz8BoU (2).avif',
        alt: 'Solution design interface 3'
      },
      {
        type: 'image',
        src: '/images/projects/omPEYZ5rW7ntyXShmSpCwezlC0Q.avif',
        alt: 'Solution workflow diagram'
      }
    ]
  },
  {
    id: 'radiology',
    title: 'Reimagining Radiology Diagnostics: Inclusive Patient Care',
    subtitle: 'A Care Model for Inclusive Patient Experience',
    context: 'U4RAD Technologies × Inclusive Care Model',
    tags: ['Healthcare', 'Accessibility', 'Service Design'],
    cover: '/images/projects/radiology-hero.jpg',
    heroImage: '/images/projects/radiology-hero.jpg',
    brief: 'U4RAD Technologies set out to build XRAi Digital, a network of radiology clinics and at-home diagnostic services. The goal was to transform the patient journey by creating a care model that is inclusive, efficient and emotionally supportive.',
    objective: 'Redesign radiology clinics to be safer, more inclusive and empathetic while improving diagnostic efficiency, with special focus on patients with mobility challenges, trauma histories and special needs.',
    problemStatement: 'Most clinics lack equipment and spaces for people with mobility impairments, making transfers unsafe and uncomfortable. Manual scheduling and triage cause delays and stress for both staff and patients. Rigid layouts restrict patient circulation and staff ergonomics, especially in emergencies.',
    challenge: 'In India, accessibility gaps in radiology clinics are widespread, leading to safety risks, delayed care and heightened anxiety. Poor communication, long waits, and outdated systems hinder data sharing and tracking.',
    intervention: 'Redesigned clinic layouts to improve accessibility, developed modular imaging equipment allowing patients—especially those with mobility impairments—to position themselves comfortably, and built a digital triage system to streamline scheduling and workflows.',
    approach: [
      'Conducted interviews with patients, attendants, radiographers and radiologists',
      'Field observations to identify accessibility gaps and workflow inefficiencies',
      'Built 3D prototypes of modular equipment and clinic layouts',
      'Wireframed digital triage interface for efficient patient prioritization',
      'Service simulations mapping patient flow',
      'Co-creation workshops with radiographers to ensure real-world fit',
      'Developed communication tools and peer-support protocols'
    ],
    outcome: [
      'Created safer, more efficient workflows for staff and patients',
      'Improved accessibility for patients with mobility impairments through modular equipment',
      'Enhanced emotional comfort through empathetic communication protocols',
      'Increased clinic efficiency with streamlined triage and resource allocation',
      'Decreased staff fatigue and increased job satisfaction',
      'Laid foundation for scalable, patient-centered radiology clinics'
    ],
    impact: 'By prioritizing patient needs through accessible equipment, efficient triage, ergonomic layouts and supportive environments, the redesign reduced delays, improved comfort and achieved better health outcomes—particularly for underserved groups.',
    skills: ['User Research', 'Accessibility Design', 'Service Blueprinting', '3D Prototyping', 'Co-Creation Workshops', 'Spatial Design', 'Digital Interface Design', 'Inclusive Design', 'Healthcare UX'],
    keyMetric: '100%',
    metricLabel: 'Accessibility Coverage',
    testimonials: [
      {
        quote: 'The modular equipment design finally makes our facility accessible to all patients.',
        author: 'Senior Radiographer',
        role: 'U4RAD Technologies'
      }
    ],
    processImages: [
      '/images/projects/bNPBxNj3s5mGy1q9xE7oTjYoY.jpg',
      '/images/projects/CstBbFVdjBvfVKZ12oIK3HOTs.png',
      '/images/projects/yKZ6AHtyPskFKJM7KfPFcEIHHE.png'
    ]
  },
  {
    id: 'safer-spaces',
    title: 'Creating Safer Spaces: Collaborative Community Development',
    subtitle: 'A Collaborative Model for Youth-Led Community Development',
    context: 'Landsec × Lewisham Community Initiative',
    tags: ['Community', 'Youth Development', 'Service Design'],
    cover: '/images/projects/creating-safer-spaces.webp',
    heroImage: '/images/projects/creating-safer-spaces.webp',
    brief: 'Addressing youth crime and social isolation in Lewisham by partnering with local charities to create inclusive community spaces and programs that empower vulnerable youth.',
    objective: 'Design a collaborative service model that leverages youth charities to improve community perception, increase engagement, and reduce youth crime through accessible safe spaces.',
    problemStatement: '29% of crime in Lewisham is attributed to youth anti-social behavior. Youth lack public spaces for constructive engagement, and existing charities struggle to meet the needs of vulnerable children.',
    challenge: 'How might we support local youth charities to create safer, more inclusive spaces that address both Landsec\'s community goals and the real needs of vulnerable youth in Lewisham?',
    intervention: 'Developed a collaborative model partnering Landsec with three local youth charities, focusing on co-creating community spaces and programs that give youth a voice in shaping their environment.',
    approach: [
      'Conducted stakeholder interviews with Landsec, local residents, council members, and charity leaders',
      'Analyzed Lewisham\'s socio-economic landscape and youth crime statistics',
      'Shadowed charity workshops to understand operations and challenges',
      'Identified youth charities as key intervention points for community transformation',
      'Co-created service blueprint with charity partners',
      'Designed youth-led programming framework for new community spaces'
    ],
    outcome: [
      'Established partnerships with three local youth charities',
      'Created framework for youth-led community space design',
      'Identified opportunities to amplify charity impact through Landsec redevelopment',
      'Developed sustainable collaboration model between commercial development and community organizations'
    ],
    impact: 'By centering youth charities in the redevelopment strategy, the project transforms how commercial developers can contribute to community wellbeing, addressing youth crime through empowerment rather than exclusion.',
    skills: ['Service Design', 'Stakeholder Engagement', 'Community Research', 'Co-Creation Workshops', 'Social Impact Design', 'Youth-Centered Design', 'Partnership Development'],
    keyMetric: '29%',
    metricLabel: 'Youth Crime Rate to Address'
  },
  {
    id: 'neurodiversity',
    title: 'Transforming the UK Justice System with Neurodiversity Support',
    subtitle: 'Accessible Tools for Justice System',
    context: 'Inclusion-driven Non-profit Project',
    tags: ['Accessibility', 'Inclusion', 'Content Design'],
    cover: '/images/projects/neurodiversity-hero.png',
    heroImage: '/images/projects/neurodiversity-hero.png',
    brief: 'Creating accessible digital tools for neurodiverse individuals interacting with justice systems, addressing significant barriers in understanding rights and navigating complex processes.',
    objective: 'Develop accessible tools that increase comprehension of legal rights and reduce cognitive load for neurodiverse individuals navigating justice system interactions.',
    problemStatement: 'Neurodiverse individuals faced significant barriers in understanding their rights and navigating justice system interactions due to complex language, poor information architecture, and lack of accessibility considerations.',
    challenge: 'How might we create digital tools that make justice system information accessible and comprehensible for neurodiverse users while maintaining legal accuracy?',
    intervention: 'Developed accessible digital tools emphasizing readability, clear tone, and intuitive navigation through iterative co-design with affected groups.',
    approach: [
      'User research and co-design sessions with neurodiverse individuals',
      'Iterative prototyping emphasizing readability and tone',
      'Comprehensive accessibility testing and refinements',
      'Typography studies optimized for neurodiversity',
      'Content design following plain language principles',
      'Interface simplification and cognitive load reduction'
    ],
    outcome: [
      'Increased comprehension of rights content by ~40% in usability tests',
      'Significantly improved navigation and reduced cognitive load',
      'Created replicable accessibility framework for public services',
      'Positive user feedback on clarity and usability'
    ],
    impact: 'The platform demonstrates how thoughtful accessibility design can dramatically improve comprehension and reduce barriers for neurodiverse users in critical public services.',
    skills: ['Accessibility Design', 'UX Writing', 'Front-End Prototyping', 'User Testing', 'Co-Design', 'Content Strategy', 'Inclusive Design', 'Typography'],
    keyMetric: '40%',
    metricLabel: 'Comprehension Increase',
    testimonials: [
      {
        quote: 'Finally, legal information I can actually understand. This changes everything.',
        author: 'Platform User',
        role: 'Neurodivergent Advocate'
      }
    ]
  }
];
