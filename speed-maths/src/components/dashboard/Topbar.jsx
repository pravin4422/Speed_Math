import { useLocation } from "react-router-dom";
import { useExam } from "../../context/ExamContext";
import { exams } from "../../config/exams";
import "./Topbar.css";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/practice": "Practice",
  "/dashboard/mocks": "Mock Tests",
  "/dashboard/ranking": "Ranking",
  "/dashboard/progress": "Progress",
  "/dashboard/planner": "Study Planner",
  "/dashboard/reports": "Reports"
};

export default function Topbar() {
  const location = useLocation();
  const { selectedExam, setSelectedExam } = useExam();
  
  const pageTitle = pageTitles[location.pathname] || "Dashboard";
  const currentExam = exams.find(e => e.id === selectedExam);

  return (
    <header className="topbar">
      <h1 className="topbar-title">{pageTitle}</h1>
      
      <div className="topbar-right">
        <select 
          className="topbar-exam-select"
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
        >
          {exams.map(exam => (
            <option key={exam.id} value={exam.id}>
              {exam.name}
            </option>
          ))}
        </select>
        
        <div className="topbar-avatar">U</div>
      </div>
    </header>
  );
}
