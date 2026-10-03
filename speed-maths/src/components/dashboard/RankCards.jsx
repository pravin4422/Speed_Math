import './RankCards.css';

export default function RankCards({ rank, percentile, personalBest }) {
  return (
    <div className="rank-cards">
      <div className="rank-card">
        <div className="rank-card-label">Your Rank</div>
        <div className="rank-card-value">#{rank}</div>
      </div>
      
      <div className="rank-card">
        <div className="rank-card-label">Percentile</div>
        <div className="rank-card-value">{percentile}%</div>
        <div className="rank-card-subtitle">Faster than {percentile}% of users</div>
      </div>
      
      <div className="rank-card">
        <div className="rank-card-label">Personal Best</div>
        <div className="rank-card-value">{personalBest.score}</div>
        <div className="rank-card-subtitle">{personalBest.accuracy}% accuracy</div>
      </div>
    </div>
  );
}
