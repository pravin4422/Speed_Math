import { Link } from 'react-router-dom';
import { formatPlanDate, isToday } from '../../utils/planner';
import './PlanDay.css';

function PlanDay({ day, completedTasks, onTaskToggle }) {
  const dayClass = isToday(day.date) ? 'plan-day today' : 'plan-day';

  const getTaskLink = (task) => {
    if (task.type === 'Practice') {
      return '/practice';
    } else if (task.type === 'Mock') {
      return '/mocks';
    }
    return null;
  };

  return (
    <div className={dayClass}>
      <div className="day-header">
        <span className="day-date">{formatPlanDate(day.date)}</span>
        {isToday(day.date) && <span className="today-badge">Today</span>}
      </div>

      <div className="day-tasks">
        {day.tasks.map(task => {
          const isCompleted = completedTasks.includes(task.id);
          const taskLink = getTaskLink(task);

          return (
            <div key={task.id} className={`task-item ${isCompleted ? 'completed' : ''}`}>
              <label className="task-checkbox">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => onTaskToggle(task.id)}
                />
                <span className="checkmark"></span>
              </label>

              <div className="task-content">
                <span className={`task-type ${task.type.toLowerCase()}`}>
                  {task.type}
                </span>
                {taskLink ? (
                  <Link to={taskLink} className="task-label">
                    {task.label}
                  </Link>
                ) : (
                  <span className="task-label">{task.label}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlanDay;
