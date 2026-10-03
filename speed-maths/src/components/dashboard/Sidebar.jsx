import { NavLink, Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Trophy, 
  TrendingUp, 
  Calendar,
  BarChart3,
  Home,
  Info
} from "lucide-react";
import "./Sidebar.css";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/exam-details", label: "Exam Details", icon: Info },
  { to: "/dashboard/practice", label: "Practice", icon: BookOpen },
  { to: "/dashboard/mocks", label: "Mock tests", icon: FileText },
  { to: "/dashboard/ranking", label: "Ranking", icon: Trophy },
  { to: "/dashboard/progress", label: "Progress", icon: TrendingUp },
  { to: "/dashboard/planner", label: "Study planner", icon: Calendar },
  { to: "/dashboard/reports", label: "Reports", icon: BarChart3 }
];

export default function Sidebar({ moreSheetOpen, setMoreSheetOpen }) {
  const handleOverlayClick = () => setMoreSheetOpen(false);

  return (
    <>
      <aside className="sidebar">
        <Link to="/" className="sidebar-logo">
          <span className="sidebar-logo-text">SpeedMaths</span>
        </Link>
        
        <nav className="sidebar-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => 
                  `sidebar-item ${isActive ? "sidebar-item-active" : ""}`
                }
                title={item.label}
              >
                <Icon className="sidebar-icon" size={20} />
                <span className="sidebar-label">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <Link to="/" className="sidebar-back">
          <Home className="sidebar-icon" size={20} />
          <span className="sidebar-label">Back to home</span>
        </Link>
      </aside>

      {/* Mobile more sheet */}
      {moreSheetOpen && (
        <>
          <div className="more-overlay" onClick={handleOverlayClick} />
          <div className="more-sheet">
            <div className="more-sheet-header">
              <h3>More</h3>
              <button 
                className="more-sheet-close"
                onClick={handleOverlayClick}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <nav className="more-sheet-nav">
              <NavLink
                to="/dashboard/exam-details"
                className="more-sheet-item"
                onClick={handleOverlayClick}
              >
                <Info size={20} />
                <span>Exam Details</span>
              </NavLink>
              <NavLink
                to="/dashboard/progress"
                className="more-sheet-item"
                onClick={handleOverlayClick}
              >
                <TrendingUp size={20} />
                <span>Progress</span>
              </NavLink>
              <NavLink
                to="/dashboard/planner"
                className="more-sheet-item"
                onClick={handleOverlayClick}
              >
                <Calendar size={20} />
                <span>Study planner</span>
              </NavLink>
              <NavLink
                to="/dashboard/reports"
                className="more-sheet-item"
                onClick={handleOverlayClick}
              >
                <BarChart3 size={20} />
                <span>Reports</span>
              </NavLink>
              <Link
                to="/"
                className="more-sheet-item"
                onClick={handleOverlayClick}
              >
                <Home size={20} />
                <span>Back to home</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
