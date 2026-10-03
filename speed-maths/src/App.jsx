import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExamProvider } from './context/ExamContext';
import Home from './pages/Home';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import ExamDetails from './pages/dashboard/ExamDetails';
import Practice from './pages/dashboard/Practice';
import Mocks from './pages/dashboard/Mocks';
import Ranking from './pages/dashboard/Ranking';
import Progress from './pages/dashboard/Progress';
import Planner from './pages/dashboard/Planner';
import Reports from './pages/dashboard/Reports';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <ExamProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="exam-details" element={<ExamDetails />} />
            <Route path="practice" element={<Practice />} />
            <Route path="practice/session" element={<Placeholder name="Practice Session" />} />
            <Route path="mocks" element={<Mocks />} />
            <Route path="mocks/:id/session" element={<Placeholder name="Mock Session" />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="progress" element={<Progress />} />
            <Route path="planner" element={<Planner />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="/exams" element={<Placeholder name="Exams" />} />
          <Route path="/leaderboard" element={<Placeholder name="Leaderboard" />} />
        </Routes>
      </BrowserRouter>
    </ExamProvider>
  );
}

export default App;
