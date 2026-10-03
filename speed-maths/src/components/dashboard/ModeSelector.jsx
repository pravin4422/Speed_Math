import './ModeSelector.css';

export default function ModeSelector({ mode, onModeChange, duration, onDurationChange }) {
  const modes = [
    { id: 'topic', label: 'Topic-wise' },
    { id: 'mixed', label: 'Mixed' },
    { id: 'timed', label: 'Timed test' }
  ];

  const durations = [
    { value: 30, label: '30 s' },
    { value: 60, label: '1 min' },
    { value: 300, label: '5 min' }
  ];

  return (
    <div className="mode-selector-wrapper">
      <div className="mode-selector">
        {modes.map((m) => (
          <button
            key={m.id}
            className={`mode-option ${mode === m.id ? 'active' : ''}`}
            onClick={() => onModeChange(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mode-info">
        {mode === 'timed' ? (
          <div className="timed-options">
            <div className="duration-chips">
              {durations.map((d) => (
                <button
                  key={d.value}
                  className={`duration-chip ${duration === d.value ? 'active' : ''}`}
                  onClick={() => onDurationChange(d.value)}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <span className="ranked-label">Ranked</span>
          </div>
        ) : (
          <span className="not-ranked">Not ranked</span>
        )}
      </div>
    </div>
  );
}
