import './LeaderboardTable.css';

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function LeaderboardTable({ users, currentUserRank }) {
  const top10 = users.slice(0, 10);
  const currentUser = users.find(u => u.isCurrentUser);
  const showCurrentUserAtBottom = currentUser && currentUserRank > 10;

  return (
    <div className="leaderboard-table-container">
      <table className="leaderboard-table desktop-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Accuracy</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((user) => (
            <tr 
              key={user.id} 
              className={`
                ${user.rank <= 3 ? 'top-three' : ''} 
                ${user.isCurrentUser ? 'current-user' : ''}
              `}
            >
              <td className="rank-cell">
                {user.rank <= 3 && <span className="rank-badge">{user.rank}</span>}
                {user.rank > 3 && user.rank}
              </td>
              <td className="name-cell">{user.name}</td>
              <td className="score-cell">{user.score.toLocaleString()}</td>
              <td className="accuracy-cell">{user.accuracy}%</td>
              <td className="time-cell">{formatTime(user.totalTimeSec)}</td>
            </tr>
          ))}
          
          {showCurrentUserAtBottom && (
            <>
              <tr className="separator-row">
                <td colSpan="5"><div className="separator-dots">···</div></td>
              </tr>
              <tr className="current-user pinned-user">
                <td className="rank-cell">{currentUser.rank}</td>
                <td className="name-cell">{currentUser.name}</td>
                <td className="score-cell">{currentUser.score.toLocaleString()}</td>
                <td className="accuracy-cell">{currentUser.accuracy}%</td>
                <td className="time-cell">{formatTime(currentUser.totalTimeSec)}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      {/* Mobile view - stacked cards */}
      <div className="leaderboard-mobile">
        {top10.map((user) => (
          <div 
            key={user.id} 
            className={`
              leaderboard-mobile-item 
              ${user.rank <= 3 ? 'top-three' : ''} 
              ${user.isCurrentUser ? 'current-user' : ''}
            `}
          >
            <div className="mobile-rank">
              {user.rank <= 3 && <span className="rank-badge">{user.rank}</span>}
              {user.rank > 3 && <span className="rank-number">#{user.rank}</span>}
            </div>
            <div className="mobile-details">
              <div className="mobile-name">{user.name}</div>
              <div className="mobile-stats">
                <span className="mobile-stat">
                  <span className="mobile-stat-label">Score:</span> {user.score.toLocaleString()}
                </span>
                <span className="mobile-stat">
                  <span className="mobile-stat-label">Accuracy:</span> {user.accuracy}%
                </span>
                <span className="mobile-stat">
                  <span className="mobile-stat-label">Time:</span> {formatTime(user.totalTimeSec)}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        {showCurrentUserAtBottom && (
          <>
            <div className="mobile-separator">···</div>
            <div className="leaderboard-mobile-item current-user pinned-user">
              <div className="mobile-rank">
                <span className="rank-number">#{currentUser.rank}</span>
              </div>
              <div className="mobile-details">
                <div className="mobile-name">{currentUser.name}</div>
                <div className="mobile-stats">
                  <span className="mobile-stat">
                    <span className="mobile-stat-label">Score:</span> {currentUser.score.toLocaleString()}
                  </span>
                  <span className="mobile-stat">
                    <span className="mobile-stat-label">Accuracy:</span> {currentUser.accuracy}%
                  </span>
                  <span className="mobile-stat">
                    <span className="mobile-stat-label">Time:</span> {formatTime(currentUser.totalTimeSec)}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
