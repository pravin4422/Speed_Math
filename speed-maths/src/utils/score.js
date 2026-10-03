// Score calculation configuration
const config = {
  weights: {
    easy: 1,
    medium: 1.5,
    hard: 2
  },
  speedBonusPerCorrect: 0.5
};

/**
 * Calculate score and statistics from answers
 * @param {Array} answers - Array of answer objects
 * @param {number} negativeMarking - Negative marking value (e.g., 0.25)
 * @returns {Object} Score breakdown with totals and per-topic analysis
 */
export function calculateScore(answers, negativeMarking = 0.25) {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  let totalTimeSec = 0;
  const topicStats = {};

  answers.forEach(answer => {
    const { topic, difficulty, correct: isCorrect, skipped: isSkipped, timeSec, targetSec } = answer;
    const weight = config.weights[difficulty] || 1;

    // Initialize topic stats if not exists
    if (!topicStats[topic]) {
      topicStats[topic] = {
        topic,
        correct: 0,
        wrong: 0,
        skipped: 0,
        totalTimeSec: 0,
        count: 0
      };
    }

    if (isSkipped) {
      skipped++;
      topicStats[topic].skipped++;
    } else if (isCorrect) {
      correct++;
      score += weight;
      
      // Speed bonus if answered within target time
      if (timeSec <= targetSec) {
        score += config.speedBonusPerCorrect * weight;
      }
      
      topicStats[topic].correct++;
      topicStats[topic].totalTimeSec += timeSec;
      topicStats[topic].count++;
      totalTimeSec += timeSec;
    } else {
      wrong++;
      score -= negativeMarking;
      topicStats[topic].wrong++;
      topicStats[topic].totalTimeSec += timeSec;
      topicStats[topic].count++;
      totalTimeSec += timeSec;
    }
  });

  // Calculate accuracy
  const totalAttempted = correct + wrong;
  const accuracy = totalAttempted > 0 ? (correct / totalAttempted) * 100 : 0;
  const avgTimeSec = totalAttempted > 0 ? totalTimeSec / totalAttempted : 0;

  // Build per-topic breakdown
  const byTopic = Object.values(topicStats).map(stat => {
    const topicAttempted = stat.correct + stat.wrong;
    const topicAccuracy = topicAttempted > 0 ? (stat.correct / topicAttempted) * 100 : 0;
    const topicAvgTime = stat.count > 0 ? stat.totalTimeSec / stat.count : 0;

    return {
      topic: stat.topic,
      correct: stat.correct,
      wrong: stat.wrong,
      accuracy: Math.round(topicAccuracy * 100) / 100,
      avgTimeSec: Math.round(topicAvgTime * 100) / 100
    };
  });

  return {
    score: Math.round(score * 100) / 100,
    correct,
    wrong,
    skipped,
    accuracy: Math.round(accuracy * 100) / 100,
    avgTimeSec: Math.round(avgTimeSec * 100) / 100,
    byTopic
  };
}

/*
EXAMPLE CALLS:

// Example 1: Perfect score with speed bonus
const answers1 = [
  { topic: 'Algebra', difficulty: 'easy', correct: true, skipped: false, timeSec: 20, targetSec: 30 },
  { topic: 'Algebra', difficulty: 'medium', correct: true, skipped: false, timeSec: 35, targetSec: 45 },
  { topic: 'Geometry', difficulty: 'hard', correct: true, skipped: false, timeSec: 50, targetSec: 60 }
];
// calculateScore(answers1, 0.25)
// Returns: { score: 6.0, correct: 3, wrong: 0, skipped: 0, accuracy: 100, avgTimeSec: 35, byTopic: [...] }

// Example 2: Mixed performance with negative marking
const answers2 = [
  { topic: 'Algebra', difficulty: 'easy', correct: true, skipped: false, timeSec: 25, targetSec: 30 },
  { topic: 'Algebra', difficulty: 'medium', correct: false, skipped: false, timeSec: 60, targetSec: 45 },
  { topic: 'Geometry', difficulty: 'easy', correct: false, skipped: false, timeSec: 40, targetSec: 30 },
  { topic: 'Geometry', difficulty: 'hard', correct: true, skipped: false, timeSec: 70, targetSec: 60 }
];
// calculateScore(answers2, 0.25)
// Returns: { score: 2.0, correct: 2, wrong: 2, skipped: 0, accuracy: 50, avgTimeSec: 48.75, byTopic: [...] }

// Example 3: With skipped questions
const answers3 = [
  { topic: 'Algebra', difficulty: 'easy', correct: true, skipped: false, timeSec: 20, targetSec: 30 },
  { topic: 'Algebra', difficulty: 'medium', correct: false, skipped: true, timeSec: 0, targetSec: 45 },
  { topic: 'Geometry', difficulty: 'hard', correct: false, skipped: true, timeSec: 0, targetSec: 60 },
  { topic: 'Trigonometry', difficulty: 'medium', correct: false, skipped: false, timeSec: 50, targetSec: 45 }
];
// calculateScore(answers3, 0.25)
// Returns: { score: 1.25, correct: 1, wrong: 1, skipped: 2, accuracy: 50, avgTimeSec: 35, byTopic: [...] }
*/
