export const mockProgressData = {
  accuracyTrend: [
    { date: '2026-09-25', accuracy: 78 },
    { date: '2026-09-26', accuracy: 82 },
    { date: '2026-09-27', accuracy: 85 },
    { date: '2026-09-28', accuracy: 83 },
    { date: '2026-09-29', accuracy: 87 },
    { date: '2026-09-30', accuracy: 89 },
    { date: '2026-10-01', accuracy: 91 },
    { date: '2026-10-02', accuracy: 90 },
  ],
  timeTrend: [
    { date: '2026-09-25', avgTime: 42 },
    { date: '2026-09-26', avgTime: 38 },
    { date: '2026-09-27', avgTime: 35 },
    { date: '2026-09-28', avgTime: 36 },
    { date: '2026-09-29', avgTime: 33 },
    { date: '2026-09-30', avgTime: 31 },
    { date: '2026-10-01', avgTime: 29 },
    { date: '2026-10-02', avgTime: 28 },
  ],
  topicProgress: [
    { 
      topic: 'Percentages', 
      attempts: 45, 
      accuracy: 92, 
      avgTime: 28, 
      targetTime: 30,
      status: 'On target'
    },
    { 
      topic: 'Profit & Loss', 
      attempts: 38, 
      accuracy: 88, 
      avgTime: 32, 
      targetTime: 30,
      status: 'Slow'
    },
    { 
      topic: 'Time & Work', 
      attempts: 42, 
      accuracy: 85, 
      avgTime: 29, 
      targetTime: 30,
      status: 'On target'
    },
    { 
      topic: 'Simple Interest', 
      attempts: 35, 
      accuracy: 90, 
      avgTime: 27, 
      targetTime: 30,
      status: 'On target'
    },
    { 
      topic: 'Compound Interest', 
      attempts: 28, 
      accuracy: 82, 
      avgTime: 35, 
      targetTime: 30,
      status: 'Slow'
    },
    { 
      topic: 'Ratio & Proportion', 
      attempts: 50, 
      accuracy: 94, 
      avgTime: 26, 
      targetTime: 30,
      status: 'On target'
    },
    { 
      topic: 'Mixtures', 
      attempts: 22, 
      accuracy: 58, 
      avgTime: 38, 
      targetTime: 30,
      status: 'Weak'
    },
    { 
      topic: 'Averages', 
      attempts: 40, 
      accuracy: 87, 
      avgTime: 30, 
      targetTime: 30,
      status: 'On target'
    },
    { 
      topic: 'Speed & Distance', 
      attempts: 33, 
      accuracy: 79, 
      avgTime: 34, 
      targetTime: 30,
      status: 'Slow'
    },
    { 
      topic: 'Trains', 
      attempts: 18, 
      accuracy: 55, 
      avgTime: 42, 
      targetTime: 30,
      status: 'Weak'
    },
    { 
      topic: 'Boats & Streams', 
      attempts: 25, 
      accuracy: 72, 
      avgTime: 36, 
      targetTime: 30,
      status: 'Slow'
    },
    { 
      topic: 'Pipes & Cisterns', 
      attempts: 20, 
      accuracy: 68, 
      avgTime: 39, 
      targetTime: 30,
      status: 'Slow'
    },
  ]
};

export const mockWeakTopics = mockProgressData.topicProgress
  .filter(t => t.accuracy < 60)
  .sort((a, b) => a.accuracy - b.accuracy);
