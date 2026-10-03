import { useExam } from '../../context/ExamContext';
import { mockStats } from '../../data/mockStats';
import StatCard from '../../components/dashboard/StatCard';
import DailyChallengeCard from '../../components/dashboard/DailyChallengeCard';
import ContinueCard from '../../components/dashboard/ContinueCard';
import WeeklyActivity from '../../components/dashboard/WeeklyActivity';
import AccuracyByGroup from '../../components/dashboard/AccuracyByGroup';
import WeakTopics from '../../components/dashboard/WeakTopics';
import RecentActivity from '../../components/dashboard/RecentActivity';
import './Overview.css';

export default function Overview() {
  const { selectedExam } = useExam();

  return (
    <div className="overview">
      <div className="overview__greeting">
        <h1 className="overview__greeting-text">Welcome back</h1>
        <span className="overview__exam-chip">{selectedExam.name}</span>
      </div>

      <div className="overview__stats">
        <StatCard 
          label="Total Score" 
          value={mockStats.totalScore.value} 
          change={mockStats.totalScore.weeklyChange} 
        />
        <StatCard 
          label="Accuracy" 
          value={mockStats.accuracy.value} 
          unit="%" 
          change={mockStats.accuracy.weeklyChange} 
        />
        <StatCard 
          label="Avg Time / Question" 
          value={mockStats.avgTimeSec.value} 
          unit="s" 
          change={mockStats.avgTimeSec.weeklyChange} 
        />
        <StatCard 
          label="Day Streak" 
          value={mockStats.streakDays.value} 
          change={mockStats.streakDays.weeklyChange} 
        />
      </div>

      <div className="overview__cards-row">
        <DailyChallengeCard 
          questions={mockStats.dailyChallenge.questions}
          minutes={mockStats.dailyChallenge.minutes}
          completed={mockStats.dailyChallenge.completed}
        />
        <ContinueCard 
          topic={mockStats.lastPractice.topic}
          difficulty={mockStats.lastPractice.difficulty}
          progressPct={mockStats.lastPractice.progressPct}
        />
      </div>

      <div className="overview__cards-row">
        <WeeklyActivity weeklyData={mockStats.weeklyActivity} />
        <AccuracyByGroup groups={mockStats.accuracyByGroup} />
      </div>

      <div className="overview__cards-row">
        <WeakTopics topics={mockStats.weakTopics} />
        <RecentActivity attempts={mockStats.recentAttempts} />
      </div>
    </div>
  );
}
