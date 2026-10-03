import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useExam } from '../context/ExamContext';
import { exams } from '../config/exams';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedExam, setSelectedExam } = useExam();

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          SpeedMaths
        </Link>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/exams">Exams</NavLink>
          </li>
          <li>
            <NavLink to="/practice">Practice</NavLink>
          </li>
          <li>
            <NavLink to="/planner">Study Planner</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <select 
            className="exam-selector"
            value={selectedExam}
            onChange={handleExamChange}
          >
            {exams.map(exam => (
              <option key={exam.id} value={exam.id}>{exam.name}</option>
            ))}
          </select>

          <Link to="/dashboard" className="dashboard-btn">
            Dashboard
          </Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/exams" onClick={closeMenu}>Exams</NavLink>
          <NavLink to="/practice" onClick={closeMenu}>Practice</NavLink>
          <NavLink to="/planner" onClick={closeMenu}>Study Planner</NavLink>
          <NavLink to="/leaderboard" onClick={closeMenu}>Leaderboard</NavLink>
          
          <div className="mobile-menu-divider"></div>
          
          <select 
            className="mobile-exam-selector"
            value={selectedExam}
            onChange={handleExamChange}
          >
            {exams.map(exam => (
              <option key={exam.id} value={exam.id}>{exam.name}</option>
            ))}
          </select>

          <Link to="/dashboard" className="mobile-dashboard-btn" onClick={closeMenu}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
