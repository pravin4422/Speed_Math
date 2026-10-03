import { useState } from 'react';
import './PlannerSetup.css';

function PlannerSetup({ exams, onGenerate }) {
  const [selectedExam, setSelectedExam] = useState(exams[0]?.id || '');
  const [examDate, setExamDate] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = () => {
    setError('');
    
    if (!examDate) {
      setError('Please select an exam date');
      return;
    }

    const selected = new Date(examDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selected.setHours(0, 0, 0, 0);

    const daysUntil = Math.ceil((selected - today) / (1000 * 60 * 60 * 24));

    if (selected < today) {
      setError('Exam date cannot be in the past');
      return;
    }

    if (daysUntil < 7) {
      setError('Plan requires at least 7 days. Please select a date further in the future.');
      return;
    }

    onGenerate(selectedExam, selected);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="planner-setup">
      <h2>Study Plan Setup</h2>
      <p className="setup-description">
        Generate a personalized study plan based on your exam date
      </p>

      <div className="setup-form">
        <div className="form-group">
          <label htmlFor="exam-select">Select Exam</label>
          <select
            id="exam-select"
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="exam-select"
          >
            {exams.map(exam => (
              <option key={exam.id} value={exam.id}>
                {exam.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exam-date">Exam Date</label>
          <input
            type="date"
            id="exam-date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            min={getTodayDate()}
            className="date-input"
          />
        </div>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <button 
          onClick={handleGenerate}
          className="generate-btn"
        >
          Generate Plan
        </button>
      </div>
    </div>
  );
}

export default PlannerSetup;
