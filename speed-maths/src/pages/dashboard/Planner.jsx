import { useState, useEffect } from 'react';
import PlannerSetup from '../../components/dashboard/PlannerSetup';
import PlanDay from '../../components/dashboard/PlanDay';
import { exams } from '../../config/exams';
import { generatePlan, groupByWeek, calculateProgress } from '../../utils/planner';
import './Planner.css';

const STORAGE_KEY = 'plannerState';

function Planner() {
  const [plan, setPlan] = useState(null);
  const [examId, setExamId] = useState('');
  const [examDate, setExamDate] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.examId && state.examDate && state.plan) {
          setExamId(state.examId);
          setExamDate(new Date(state.examDate));
          setCompletedTasks(state.completedTasks || []);
          
          const restoredPlan = state.plan.map(day => ({
            ...day,
            date: new Date(day.date)
          }));
          setPlan(restoredPlan);
        }
      } catch (err) {
        console.error('Failed to restore plan:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (plan && examId && examDate) {
      const state = {
        examId,
        examDate: examDate.toISOString(),
        completedTasks,
        plan: plan.map(day => ({
          ...day,
          date: day.date.toISOString()
        }))
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [plan, examId, examDate, completedTasks]);

  const handleGenerate = (selectedExamId, selectedDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const newPlan = generatePlan(selectedExamId, selectedDate, today);
    
    if (newPlan) {
      setPlan(newPlan);
      setExamId(selectedExamId);
      setExamDate(selectedDate);
      setCompletedTasks([]);
    }
  };

  const handleTaskToggle = (taskId) => {
    setCompletedTasks(prev => {
      if (prev.includes(taskId)) {
        return prev.filter(id => id !== taskId);
      } else {
        return [...prev, taskId];
      }
    });
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset your study plan? This will clear all progress.')) {
      setPlan(null);
      setExamId('');
      setExamDate(null);
      setCompletedTasks([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const getExamName = () => {
    const exam = exams.find(e => e.id === examId);
    return exam ? exam.name : '';
  };

  if (!plan) {
    return (
      <div className="planner-page">
        <div className="page-header">
          <h1>Study Planner</h1>
          <p>Create a personalized study plan for your exam preparation</p>
        </div>
        <PlannerSetup exams={exams} onGenerate={handleGenerate} />
      </div>
    );
  }

  const weeks = groupByWeek(plan);
  const progress = calculateProgress(plan, completedTasks);

  return (
    <div className="planner-page">
      <div className="page-header">
        <div className="header-content">
          <div>
            <h1>Study Plan</h1>
            <p className="exam-info">
              {getExamName()} - {examDate.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
          </div>
          <button onClick={handleReset} className="reset-btn">
            Reset Plan
          </button>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-label">Overall Progress</span>
          <span className="progress-stats">
            {progress.completed} / {progress.total} tasks
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <span className="progress-percentage">{progress.percentage}% Complete</span>
      </div>

      <div className="plan-content">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="plan-week">
            <h2 className="week-title">Week {weekIndex + 1}</h2>
            <div className="week-days">
              {week.map((day, dayIndex) => (
                <PlanDay
                  key={dayIndex}
                  day={day}
                  completedTasks={completedTasks}
                  onTaskToggle={handleTaskToggle}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planner;
