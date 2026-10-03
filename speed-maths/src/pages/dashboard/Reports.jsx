import { useState } from 'react';
import ReportCard from '../../components/dashboard/ReportCard';
import { exams } from '../../config/exams';
import { topics } from '../../data/topics';
import { exportTestResults, exportProgressReport, exportExamAnalysis } from '../../utils/exportExcel';
import { exportTestResultsPdf, exportProgressReportPdf, exportExamAnalysisPdf } from '../../utils/exportPdf';
import './Reports.css';

function Reports() {
  const [selectedExam, setSelectedExam] = useState(exams[0]?.id || '');

  const getExamName = () => {
    const exam = exams.find(e => e.id === selectedExam);
    return exam ? exam.name : '';
  };

  // Mock test result data
  const getTestResultData = () => {
    return {
      score: 85,
      accuracy: 85,
      timeTaken: '45:30',
      totalQuestions: 50,
      correct: 42,
      wrong: 5,
      skipped: 3,
      questions: Array.from({ length: 50 }, (_, i) => ({
        question: `15 × ${12 + i}`,
        userAnswer: i < 42 ? (15 * (12 + i)) : (i < 47 ? (15 * (12 + i) + 10) : undefined),
        correctAnswer: 15 * (12 + i),
        isCorrect: i < 42,
        timeTaken: Math.floor(Math.random() * 40) + 20
      }))
    };
  };

  // Mock progress data
  const getProgressData = () => {
    return {
      averageAccuracy: 78,
      averageSpeed: 35,
      testsCompleted: 12,
      practiceSessions: 45,
      trends: [
        { date: '2024-01-01', accuracy: 65, speed: 45 },
        { date: '2024-01-08', accuracy: 70, speed: 42 },
        { date: '2024-01-15', accuracy: 73, speed: 38 },
        { date: '2024-01-22', accuracy: 76, speed: 36 },
        { date: '2024-01-29', accuracy: 78, speed: 35 }
      ],
      weakTopics: topics
        .filter(t => t.exam === selectedExam)
        .slice(0, 5)
        .map(topic => ({
          name: topic.name,
          accuracy: Math.floor(Math.random() * 30) + 50,
          attempts: Math.floor(Math.random() * 20) + 5,
          status: 'Needs Practice'
        }))
    };
  };

  // Mock exam analysis data
  const getExamAnalysisData = () => {
    return {
      patterns: [
        { type: 'Single Digit Multiplication', frequency: 'High', difficulty: 'Easy', avgTime: 15 },
        { type: 'Two Digit Multiplication', frequency: 'High', difficulty: 'Medium', avgTime: 30 },
        { type: 'Three Digit Multiplication', frequency: 'Medium', difficulty: 'Hard', avgTime: 45 },
        { type: 'Division Problems', frequency: 'Medium', difficulty: 'Medium', avgTime: 35 },
        { type: 'Square Roots', frequency: 'Low', difficulty: 'Hard', avgTime: 50 },
        { type: 'Percentage Calculations', frequency: 'Medium', difficulty: 'Medium', avgTime: 25 }
      ],
      topicWeightage: topics
        .filter(t => t.exam === selectedExam)
        .map(topic => ({
          name: topic.name,
          weightage: Math.floor(Math.random() * 20) + 10,
          expectedQuestions: Math.floor(Math.random() * 10) + 5,
          importance: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]
        }))
        .sort((a, b) => b.weightage - a.weightage)
    };
  };

  const handleTestResultExcel = async () => {
    const data = getTestResultData();
    return exportTestResults(data, getExamName());
  };

  const handleTestResultPdf = async () => {
    const data = getTestResultData();
    return exportTestResultsPdf(data, getExamName());
  };

  const handleProgressExcel = async () => {
    const data = getProgressData();
    return exportProgressReport(data, getExamName());
  };

  const handleProgressPdf = async () => {
    const data = getProgressData();
    return exportProgressReportPdf(data, getExamName());
  };

  const handleAnalysisExcel = async () => {
    const data = getExamAnalysisData();
    return exportExamAnalysis(data, getExamName());
  };

  const handleAnalysisPdf = async () => {
    const data = getExamAnalysisData();
    return exportExamAnalysisPdf(data, getExamName());
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1>Reports & Analytics</h1>
        <p>Download comprehensive reports of your performance</p>
      </div>

      <div className="exam-selector">
        <label htmlFor="exam-select">Select Exam</label>
        <select
          id="exam-select"
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="exam-select"
        >
          {exams.map(exam => (
            <option key={exam.id} value={exam.id}>
              {exam.name}
            </option>
          ))}
        </select>
      </div>

      <div className="reports-grid">
        <ReportCard
          title="Test Result Report"
          description="Detailed breakdown of your latest test with question-by-question analysis"
          onDownloadExcel={handleTestResultExcel}
          onDownloadPdf={handleTestResultPdf}
        />

        <ReportCard
          title="Progress Report"
          description="Track your accuracy and speed trends over time, identify weak topics"
          onDownloadExcel={handleProgressExcel}
          onDownloadPdf={handleProgressPdf}
        />

        <ReportCard
          title="Exam Analysis"
          description="Sample data - Question patterns and topic weightage for your exam"
          onDownloadExcel={handleAnalysisExcel}
          onDownloadPdf={handleAnalysisPdf}
        />
      </div>
    </div>
  );
}

export default Reports;
