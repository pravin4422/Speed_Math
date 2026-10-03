import './StatCard.css';

export default function StatCard({ label, value, unit, change }) {
  const isPositive = change > 0;
  const isNegative = change < 0;
  
  return (
    <div className="stat-card">
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__value">
        {value}
        {unit && <span className="stat-card__unit">{unit}</span>}
      </div>
      {change !== 0 && (
        <div className={`stat-card__change ${isPositive ? 'positive' : ''} ${isNegative ? 'negative' : ''}`}>
          <span className="stat-card__arrow">{isPositive ? '↑' : '↓'}</span>
          {Math.abs(change)}{unit} vs last week
        </div>
      )}
    </div>
  );
}
