import { useState } from 'react';
import './WeeklyActivity.css';

export default function WeeklyActivity({ weeklyData }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  if (!weeklyData || weeklyData.length === 0) {
    return (
      <div className="weekly-activity">
        <h3 className="weekly-activity__title">Weekly Activity</h3>
        <div className="weekly-activity__empty">
          <p>No activity this week yet</p>
        </div>
      </div>
    );
  }

  const maxQuestions = Math.max(...weeklyData.map(d => d.questions), 1);
  const today = new Date().toDateString();

  return (
    <div className="weekly-activity">
      <h3 className="weekly-activity__title">Weekly Activity</h3>
      <div className="weekly-activity__subtitle">Questions solved per day</div>
      
      <div className="weekly-activity__chart">
        <div className="weekly-activity__y-axis">
          <span className="weekly-activity__y-label">{maxQuestions}</span>
          <span className="weekly-activity__y-label">{Math.round(maxQuestions / 2)}</span>
          <span className="weekly-activity__y-label">0</span>
        </div>
        
        <div className="weekly-activity__bars">
          {weeklyData.map((item, index) => {
            const isToday = item.date.toDateString() === today;
            const heightPercent = (item.questions / maxQuestions) * 100;
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index} 
                className="weekly-activity__bar-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
              >
                <div className="weekly-activity__bar-wrapper">
                  {isHovered && (
                    <div className="weekly-activity__tooltip">
                      {item.questions}
                    </div>
                  )}
                  <div 
                    className={`weekly-activity__bar ${isToday ? 'today' : ''}`}
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>
                <span className="weekly-activity__day-label">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
