/**
 * Sort users by score (high first), then accuracy (high first), then totalTimeSec (low first)
 * and add rank to each user
 */
export function rankUsers(userList) {
  if (!userList || userList.length === 0) return [];
  
  const sorted = [...userList].sort((a, b) => {
    // Primary: score (high first)
    if (b.score !== a.score) return b.score - a.score;
    
    // Secondary: accuracy (high first)
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    
    // Tertiary: time (low first)
    return a.totalTimeSec - b.totalTimeSec;
  });
  
  return sorted.map((user, index) => ({
    ...user,
    rank: index + 1
  }));
}

/**
 * Calculate percentile - percent of users the person is ahead of
 */
export function getPercentile(rank, total) {
  if (!total || total <= 0) return 0;
  if (!rank || rank <= 0) return 100;
  if (rank > total) return 0;
  
  const percentile = ((total - rank) / total) * 100;
  return Math.round(percentile);
}
