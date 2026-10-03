import './DifficultyChips.css';

export default function DifficultyChips({ difficulty, onDifficultyChange }) {
  const difficulties = [
    { id: 'easy', label: 'Easy', weight: 'x1' },
    { id: 'medium', label: 'Medium', weight: 'x1.5' },
    { id: 'hard', label: 'Hard', weight: 'x2' }
  ];

  return (
    <div className="difficulty-chips">
      {difficulties.map((d) => (
        <button
          key={d.id}
          className={`difficulty-chip ${difficulty === d.id ? 'active' : ''}`}
          onClick={() => onDifficultyChange(d.id)}
        >
          <span className="difficulty-label">{d.label}</span>
          <span className="difficulty-weight">{d.weight}</span>
        </button>
      ))}
    </div>
  );
}
