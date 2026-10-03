// Speed Maths Topics organized by groups
// auto = true for topics that support auto-generation
// exams = array of exam IDs where this topic is relevant (empty array means all exams)

export const topics = [
  // Core Calculation Skills
  {
    id: 'tables',
    name: 'Multiplication Tables',
    group: 'Core Calculation Skills',
    auto: true,
    exams: []
  },
  {
    id: 'squares',
    name: 'Squares (1-30)',
    group: 'Core Calculation Skills',
    auto: true,
    exams: []
  },
  {
    id: 'cubes',
    name: 'Cubes (1-20)',
    group: 'Core Calculation Skills',
    auto: true,
    exams: []
  },
  {
    id: 'square-roots',
    name: 'Square Roots',
    group: 'Core Calculation Skills',
    auto: false,
    exams: []
  },
  {
    id: 'cube-roots',
    name: 'Cube Roots',
    group: 'Core Calculation Skills',
    auto: false,
    exams: []
  },
  {
    id: 'multiplication-shortcuts',
    name: 'Multiplication Shortcuts',
    group: 'Core Calculation Skills',
    auto: true,
    exams: []
  },
  {
    id: 'division-shortcuts',
    name: 'Division Shortcuts',
    group: 'Core Calculation Skills',
    auto: false,
    exams: []
  },
  {
    id: 'fraction-decimal-percentage',
    name: 'Fraction/Decimal/Percentage Equivalents',
    group: 'Core Calculation Skills',
    auto: true,
    exams: []
  },

  // Arithmetic
  {
    id: 'simplification',
    name: 'Simplification (BODMAS)',
    group: 'Arithmetic',
    auto: true,
    exams: []
  },
  {
    id: 'approximation',
    name: 'Approximation',
    group: 'Arithmetic',
    auto: true,
    exams: []
  },
  {
    id: 'percentage',
    name: 'Percentage',
    group: 'Arithmetic',
    auto: true,
    exams: []
  },
  {
    id: 'profit-loss',
    name: 'Profit & Loss',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'ssc', 'rrb']
  },
  {
    id: 'simple-interest',
    name: 'Simple Interest',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'ssc', 'rrb']
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'ssc', 'cat']
  },
  {
    id: 'ratio-proportion',
    name: 'Ratio & Proportion',
    group: 'Arithmetic',
    auto: false,
    exams: []
  },
  {
    id: 'average',
    name: 'Average',
    group: 'Arithmetic',
    auto: false,
    exams: []
  },
  {
    id: 'time-work',
    name: 'Time & Work',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'ssc', 'cat']
  },
  {
    id: 'time-distance',
    name: 'Time, Speed & Distance',
    group: 'Arithmetic',
    auto: false,
    exams: []
  },
  {
    id: 'mixture-alligation',
    name: 'Mixture & Alligation',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'cat']
  },
  {
    id: 'partnership',
    name: 'Partnership',
    group: 'Arithmetic',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi']
  },

  // Algebra and Series
  {
    id: 'number-series',
    name: 'Number Series',
    group: 'Algebra and Series',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'ssc', 'rrb']
  },
  {
    id: 'missing-number',
    name: 'Missing Number',
    group: 'Algebra and Series',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi']
  },
  {
    id: 'linear-equations',
    name: 'Linear Equations',
    group: 'Algebra and Series',
    auto: false,
    exams: ['ssc', 'cat']
  },
  {
    id: 'quadratic-equations',
    name: 'Quadratic Equations',
    group: 'Algebra and Series',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'cat']
  },
  {
    id: 'surds-indices',
    name: 'Surds & Indices',
    group: 'Algebra and Series',
    auto: false,
    exams: ['ssc', 'cat']
  },

  // Data and Quick Comparison
  {
    id: 'data-interpretation',
    name: 'Data Interpretation',
    group: 'Data and Quick Comparison',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'cat']
  },
  {
    id: 'data-sufficiency',
    name: 'Data Sufficiency',
    group: 'Data and Quick Comparison',
    auto: false,
    exams: ['ibps', 'sbi', 'rbi', 'cat']
  },
  {
    id: 'comparison',
    name: 'Quick Comparison',
    group: 'Data and Quick Comparison',
    auto: false,
    exams: []
  },
  {
    id: 'estimation',
    name: 'Quick Estimation',
    group: 'Data and Quick Comparison',
    auto: false,
    exams: []
  }
];

export const topicGroups = [
  'Core Calculation Skills',
  'Arithmetic',
  'Algebra and Series',
  'Data and Quick Comparison'
];

// Get topics filtered by exam
export function getTopicsByExam(examId) {
  return topics.filter(topic => 
    topic.exams.length === 0 || topic.exams.includes(examId)
  );
}

// Get topics by group
export function getTopicsByGroup(group) {
  return topics.filter(topic => topic.group === group);
}

// Get topic by ID
export function getTopicById(id) {
  return topics.find(topic => topic.id === id);
}
