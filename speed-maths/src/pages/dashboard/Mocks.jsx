import { useExam } from '../../context/ExamContext';
import { examPatterns } from '../../data/examPatterns';
import { calculateScore } from '../../utils/score';
import { exams } from '../../config/exams';
import MockCard from '../../components/dashboard/MockCard';
import ScoreRules from '../../components/dashboard/ScoreRules';
import ResultSummary from '../../components/dashboard/ResultSummary';
import './Mocks.css';

export default function Mocks() {
  const { selectedExam } = useExam();
  const examData = examPatterns[selectedExam];
  const examName = exams.find(e => e.id === selectedExam)?.name || 'Mock Tests';

  if (!examData) {
    return (
      <div className="mocks-page">
        <div className="mocks-header">
          <h1>{examName}</h1>
        </div>
        <div className="mocks-empty">
          <p>Mock tests are not yet available for this exam.</p>
        </div>
      </div>
    );
  }

  // Mock data for last attempt
  const mockAnswers = [
    { topic: 'Algebra', difficulty: 'easy', correct: true, skipped: false, timeSec: 25, targetSec: 30 },
    { topic: 'Algebra', difficulty: 'medium', correct: true, skipped: false, timeSec: 40, targetSec: 45 },
    { topic: 'Algebra', difficulty: 'hard', correct: false, skipped: false, timeSec: 70, targetSec: 60 },
    { topic: 'Geometry', difficulty: 'easy', correct: true, skipped: false, timeSec: 20, targetSec: 30 },
    { topic: 'Geometry', difficulty: 'medium', correct: false, skipped: false, timeSec: 50, targetSec: 45 },
    { topic: 'Geometry', difficulty: 'easy', correct: false, skipped: true, timeSec: 0, targetSec: 30 },
    { topic: 'Trigonometry', difficulty: 'medium', correct: true, skipped: false, timeSec: 38, targetSec: 45 },
    { topic: 'Trigonometry', difficulty: 'hard', correct: true, skipped: false, timeSec: 55, targetSec: 60 },
    { topic: 'Number System', difficulty: 'easy', correct: true, skipped: false, timeSec: 22, targetSec: 30 },
    { topic: 'Number System', difficulty: 'medium', correct: true, skipped: false, timeSec: 42, targetSec: 45 }
  ];

  const lastResult = calculateScore(mockAnswers, examData.negativeMarking);

  // Mock data for previous attempt (for comparison)
  const previousResult = {
    score: 7.25,
    accuracy: 65.5,
    avgTimeSec: 42.8
  };

  return (
    <div className="mocks-page">
      <div className="mocks-header">
        <h1>{examName}</h1>
      </div>

      <div className="mocks-content">
        <div className="mocks-section">
          <h2>Available mocks</h2>
          <div className="mocks-grid">
            {examData.mocks.map(mock => (
              <MockCard
                key={mock.id}
                mock={{ ...mock, negativeMarking: examData.negativeMarking }}
                examId={selectedExam}
              />
            ))}
          </div>
        </div>

        <div className="mocks-section">
          <ScoreRules />
        </div>

        <div className="mocks-section">
          <ResultSummary result={lastResult} previousResult={previousResult} />
        </div>
      </div>
    </div>
  );
}
