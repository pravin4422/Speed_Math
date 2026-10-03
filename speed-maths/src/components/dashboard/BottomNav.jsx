import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Trophy, 
  MoreHorizontal
} from "lucide-react";
import "./BottomNav.css";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/practice", label: "Practice", icon: BookOpen },
  { to: "/dashboard/mocks", label: "Mock tests", icon: FileText },
  { to: "/dashboard/ranking", label: "Ranking", icon: Trophy }
];

export default function BottomNav({ moreSheetOpen, setMoreSheetOpen }) {
  return (
    <nav className="bottom-nav">
      {navItems.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => 
              `bottom-nav-item ${isActive ? "bottom-nav-item-active" : ""}`
            }
          >
            <Icon size={24} />
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        );
      })}
      
      <button
        className={`bottom-nav-item ${moreSheetOpen ? "bottom-nav-item-active" : ""}`}
        onClick={() => setMoreSheetOpen(!moreSheetOpen)}
        aria-label="More"
      >
        <MoreHorizontal size={24} />
        <span className="bottom-nav-label">More</span>
      </button>
    </nav>
  );
}
