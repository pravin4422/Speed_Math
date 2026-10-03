import { Link } from 'react-router-dom';
import './MockCard.css';

export default function MockCard({ mock, examId }) {
  const totalQuestions = mock.sections.reduce((sum, s) => sum + s.questions, 0);
  const totalMarks = mock.sections.reduce((sum, s) => sum + s.marks, 0);
  const totalMinutes = mock.sections.reduce((sum, s) => sum + s.minutes, 0);
  const negativeMarking = mock.negativeMarking || 0.25;

  return (
    <div className="mock-card">
      <div className="mock-card-header">
        <h3>{mock.name}</h3>
        <span className="mock-stage-chip">{mock.stage}</span>
      </div>

      <div className="mock-sections-table">
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>Questions</th>
              <th>Marks</th>
              <th>Minutes</th>
            </tr>
          </thead>
          <tbody>
            {mock.sections.map((section, idx) => (
              <tr key={idx}>
                <td>{section.name}</td>
                <td>{section.questions}</td>
                <td>{section.marks}</td>
                <td>{section.minutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mock-card-footer">
        <div className="mock-meta">
          <span className="mock-negative-chip">
            Negative: -{negativeMarking}
          </span>
          <span className="mock-total">
            Total: {totalQuestions} questions, {totalMarks} marks, {totalMinutes} min
          </span>
        </div>
        <Link
          to={`/dashboard/mocks/${mock.id}/session`}
          className="mock-start-btn"
        >
          Start mock
        </Link>
      </div>
    </div>
  );
}
