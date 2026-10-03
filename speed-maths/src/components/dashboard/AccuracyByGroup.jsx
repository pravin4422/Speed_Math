import './AccuracyByGroup.css';

export default function AccuracyByGroup({ groups }) {
  if (!groups || groups.length === 0) {
    return (
      <div className="accuracy-by-group">
        <h3 className="accuracy-by-group__title">Accuracy by Topic Group</h3>
        <div className="accuracy-by-group__empty">
          <p>No data available yet</p>
        </div>
      </div>
    );
  }

  const sortedGroups = [...groups].sort((a, b) => a.accuracy - b.accuracy);
  const weakestGroup = sortedGroups[0];

  return (
    <div className="accuracy-by-group">
      <h3 className="accuracy-by-group__title">Accuracy by Topic Group</h3>
      
      <div className="accuracy-by-group__list">
        {groups.map((group, index) => (
          <div key={index} className="accuracy-by-group__item">
            <div className="accuracy-by-group__item-header">
              <span className="accuracy-by-group__item-name">{group.group}</span>
              <span className="accuracy-by-group__item-percent">{group.accuracy}%</span>
            </div>
            <div className="accuracy-by-group__item-bar">
              <div 
                className="accuracy-by-group__item-fill" 
                style={{ width: `${group.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="accuracy-by-group__weakest">
        Weakest: <strong>{weakestGroup.group}</strong>
      </div>
    </div>
  );
}
