import { Link } from 'react-router-dom';
import QuickQuestion from './QuickQuestion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-label">
            For bank, SSC, railway, TNPSC and CAT exams
          </span>
          
          <h1 className="hero-headline">
            Calculate faster. Score higher.
          </h1>
          
          <p className="hero-subtext">
            Timed practice, exam-wise mocks and shortcut tricks to build calculation speed for competitive exams.
          </p>
          
          <div className="hero-buttons">
            <Link to="/practice" className="hero-btn-primary">
              Start practice
            </Link>
            <Link to="/exams" className="hero-btn-outline">
              Choose your exam
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-label">30+ topics</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-label">Exam-wise mocks</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-label">Daily challenge</span>
            </div>
          </div>
        </div>
        
        <div className="hero-card-wrapper">
          <div className="hero-card">
            <QuickQuestion />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
