import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import BottomNav from "../../components/dashboard/BottomNav";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const [moreSheetOpen, setMoreSheetOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar 
        moreSheetOpen={moreSheetOpen}
        setMoreSheetOpen={setMoreSheetOpen}
      />
      <div className="dashboard-main">
        <Topbar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
      <BottomNav 
        moreSheetOpen={moreSheetOpen}
        setMoreSheetOpen={setMoreSheetOpen}
      />
    </div>
  );
}
