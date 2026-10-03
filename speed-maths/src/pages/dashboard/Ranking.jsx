import { useState, useMemo } from 'react';
import Topbar from '../../components/dashboard/Topbar';
import Sidebar from '../../components/dashboard/Sidebar';
import BottomNav from '../../components/dashboard/BottomNav';
import RankCards from '../../components/dashboard/RankCards';
import LeaderboardTable from '../../components/dashboard/LeaderboardTable';
import { mockLeaderboard, mockPersonalBest } from '../../data/mockLeaderboard';
import { rankUsers, getPercentile } from '../../utils/ranking';
import './Ranking.css';

const PERIODS = ['Daily', 'Weekly', 'All-time'];

export default function Ranking() {
  const [period, setPeriod] = useState('Daily');
  const [selectedExam] = useState('SSC CGL');
  const [selectedTopic, setSelectedTopic] = useState('All topics');

  const rankedUsers = useMemo(() => {
    const periodKey = period.toLowerCase().replace('-', '');
    const users = mockLeaderboard[periodKey] || mockLeaderboard.daily;
    return rankUsers(users);
  }, [period]);

  const currentUser = rankedUsers.find(u => u.isCurrentUser);
  const currentUserRank = currentUser?.rank || 0;
  const totalUsers = rankedUsers.length;
  const percentile = getPercentile(currentUserRank, totalUsers);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <div className="ranking-page">
            <div className="page-header">
              <h1 className="page-title">Leaderboard</h1>
            </div>

            {/* Period chips */}
            <div className="period-chips">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  className={`chip ${period === p ? 'active' : ''}`}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="ranking-filters">
              <div className="filter-group">
                <label className="filter-label">Exam</label>
                <select className="filter-select" value={selectedExam} disabled>
                  <option>SSC CGL</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Topic</label>
                <select 
                  className="filter-select" 
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <option>All topics</option>
                  <option>Percentages</option>
                  <option>Profit & Loss</option>
                  <option>Time & Work</option>
                </select>
              </div>
            </div>

            <div className="ranking-note">
              Only timed tests and daily challenges are ranked.
            </div>

            {/* Rank cards */}
            {currentUser && (
              <RankCards 
                rank={currentUserRank}
                percentile={percentile}
                personalBest={mockPersonalBest}
              />
            )}

            {/* Leaderboard table */}
            <div className="section-header">
              <h2 className="section-title">Top Performers</h2>
            </div>
            <LeaderboardTable 
              users={rankedUsers} 
              currentUserRank={currentUserRank}
            />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
