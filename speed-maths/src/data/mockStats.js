export const mockStats = {
  totalScore: {
    value: 1247,
    weeklyChange: 12.5
  },
  accuracy: {
    value: 87.3,
    weeklyChange: 3.2
  },
  avgTimeSec: {
    value: 18.4,
    weeklyChange: -2.1
  },
  streakDays: {
    value: 7,
    weeklyChange: 2
  },
  lastPractice: {
    topic: 'Percentage Calculations',
    difficulty: 'medium',
    progressPct: 65
  },
  weakTopics: [
    { name: 'Square Roots', accuracy: 62.5 },
    { name: 'Fractions', accuracy: 68.3 },
    { name: 'Time & Distance', accuracy: 71.2 }
  ],
  recentAttempts: [
    {
      topic: 'Percentage Calculations',
      score: 85,
      accuracy: 85,
      timeSec: 342,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      topic: 'Ratio & Proportion',
      score: 92,
      accuracy: 92,
      timeSec: 298,
      date: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      topic: 'Simple Interest',
      score: 78,
      accuracy: 78,
      timeSec: 412,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    {
      topic: 'Speed Math Basics',
      score: 88,
      accuracy: 88,
      timeSec: 325,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    },
    {
      topic: 'Profit & Loss',
      score: 95,
      accuracy: 95,
      timeSec: 267,
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
    }
  ],
  dailyChallenge: {
    questions: 10,
    minutes: 5,
    completed: false
  },
  weeklyActivity: [
    { day: 'Mon', questions: 45, date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
    { day: 'Tue', questions: 62, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
    { day: 'Wed', questions: 38, date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) },
    { day: 'Thu', questions: 71, date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
    { day: 'Fri', questions: 54, date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
    { day: 'Sat', questions: 88, date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
    { day: 'Sun', questions: 76, date: new Date() }
  ],
  accuracyByGroup: [
    { group: 'Core Calculation', accuracy: 92.5 },
    { group: 'Arithmetic', accuracy: 85.8 },
    { group: 'Algebra', accuracy: 78.3 },
    { group: 'Data Interpretation', accuracy: 81.6 }
  ],
  topicAccuracy: {
    'tables': 95.2,
    'squares': 93.8,
    'cubes': 91.5,
    'square-roots': 62.5,
    'cube-roots': 71.2,
    'multiplication-shortcuts': 88.4,
    'division-shortcuts': 82.1,
    'fraction-decimal-percentage': 89.7,
    'simplification': 87.3,
    'approximation': 84.9,
    'percentage': 85.6,
    'profit-loss': 79.8,
    'simple-interest': 81.2,
    'compound-interest': 76.4,
    'ratio-proportion': 83.5,
    'average': 86.7,
    'time-work': 74.3,
    'time-distance': 71.2,
    'mixture-alligation': 68.9,
    'partnership': 72.6,
    'number-series': 80.4,
    'missing-number': 78.9,
    'linear-equations': 82.3,
    'quadratic-equations': 75.1,
    'surds-indices': 69.7,
    'data-interpretation': 81.6,
    'data-sufficiency': 77.8,
    'comparison': 88.2,
    'estimation': 85.4
  }
};
