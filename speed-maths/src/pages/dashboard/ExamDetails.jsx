import { useExam } from "../../context/ExamContext";
import { examDetails } from "../../data/examDetails";
import { exams } from "../../config/exams";
import {
  Calendar,
  GraduationCap,
  FileText,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  Users,
  Building2,
  FileCheck,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Clock,
  DollarSign,
  BarChart3,
  CheckCircle2,
  Info
} from "lucide-react";
import "./ExamDetails.css";

export default function ExamDetails() {
  const { selectedExam } = useExam();
  const details = examDetails[selectedExam];
  const examConfig = exams.find(e => e.id === selectedExam);

  if (!details) {
    return (
      <div className="exam-details-container">
        <div className="exam-details-not-found">
          <AlertCircle size={48} />
          <h2>Exam Details Not Available</h2>
          <p>Details for {examConfig?.name || selectedExam} are coming soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-details-container">
      {/* Header */}
      <div className="exam-details-header">
        <div className="exam-details-title-section">
          <h1>{details.examName}</h1>
          {details.examShortName && (
            <span className="exam-short-name">{details.examShortName}</span>
          )}
        </div>
        {details.basicInformation?.officialWebsite && (
          <a
            href={details.basicInformation.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="official-website-btn"
          >
            <ExternalLink size={18} />
            Official Website
          </a>
        )}
      </div>

      {/* Basic Information */}
      {details.basicInformation && (
        <section className="exam-details-section">
          <div className="section-header">
            <Info size={24} />
            <h2>Overview</h2>
          </div>
          <div className="info-grid">
            {details.basicInformation.conductingOrganization && (
              <div className="info-card">
                <Building2 size={20} className="info-icon" />
                <div>
                  <div className="info-label">Conducting Organization</div>
                  <div className="info-value">{details.basicInformation.conductingOrganization}</div>
                </div>
              </div>
            )}
            {details.basicInformation.conductingAuthority && (
              <div className="info-card">
                <Building2 size={20} className="info-icon" />
                <div>
                  <div className="info-label">Conducting Authority</div>
                  <div className="info-value">{details.basicInformation.conductingAuthority}</div>
                </div>
              </div>
            )}
            {details.basicInformation.level && (
              <div className="info-card">
                <Award size={20} className="info-icon" />
                <div>
                  <div className="info-label">Level</div>
                  <div className="info-value">{details.basicInformation.level}</div>
                </div>
              </div>
            )}
            {details.basicInformation.frequency && (
              <div className="info-card">
                <Clock size={20} className="info-icon" />
                <div>
                  <div className="info-label">Frequency</div>
                  <div className="info-value">{details.basicInformation.frequency}</div>
                </div>
              </div>
            )}
          </div>
          {details.basicInformation.description && (
            <div className="description-box">
              <p>{details.basicInformation.description}</p>
            </div>
          )}
          {details.basicInformation.purpose && (
            <div className="purpose-box">
              <strong>Purpose:</strong> {details.basicInformation.purpose}
            </div>
          )}
        </section>
      )}

      {/* Important Dates */}
      {details.importantDates && (
        <section className="exam-details-section">
          <div className="section-header">
            <Calendar size={24} />
            <h2>Important Dates</h2>
          </div>
          <div className="dates-grid">
            {Object.entries(details.importantDates).map(([key, value]) => (
              <div key={key} className="date-card">
                <div className="date-label">
                  {formatLabel(key)}
                </div>
                <div className="date-value">{value}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Eligibility Criteria */}
      {details.eligibility && (
        <section className="exam-details-section">
          <div className="section-header">
            <GraduationCap size={24} />
            <h2>Eligibility Criteria</h2>
          </div>
          <div className="eligibility-content">
            {details.eligibility.educationalQualification && (
              <div className="eligibility-item">
                <CheckCircle2 size={18} className="check-icon" />
                <div>
                  <strong>Educational Qualification:</strong>
                  <p>{details.eligibility.educationalQualification}</p>
                </div>
              </div>
            )}
            {details.eligibility.ageLimit && (
              <div className="eligibility-item">
                <CheckCircle2 size={18} className="check-icon" />
                <div>
                  <strong>Age Limit:</strong>
                  {details.eligibility.ageLimit.minimum && details.eligibility.ageLimit.maximum ? (
                    <p>{details.eligibility.ageLimit.minimum} - {details.eligibility.ageLimit.maximum} years</p>
                  ) : details.eligibility.ageLimit.minimum === "No minimum age limit" ? (
                    <p>No minimum age limit</p>
                  ) : details.eligibility.ageLimit.maximum === "No maximum age limit" ? (
                    <p>No maximum age limit</p>
                  ) : null}
                  {details.eligibility.ageLimit.ageRelaxation && (
                    <div className="age-relaxation">
                      <strong>Age Relaxation:</strong>
                      <ul>
                        {Object.entries(details.eligibility.ageLimit.ageRelaxation).map(([category, relaxation]) => (
                          <li key={category}>{category}: {relaxation}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
            {details.eligibility.nationality && (
              <div className="eligibility-item">
                <CheckCircle2 size={18} className="check-icon" />
                <div>
                  <strong>Nationality:</strong>
                  <p>{details.eligibility.nationality}</p>
                </div>
              </div>
            )}
            {details.eligibility.finalYearStudents && (
              <div className="eligibility-item">
                <CheckCircle2 size={18} className="check-icon" />
                <div>
                  <strong>Final Year Students:</strong>
                  <p>{details.eligibility.finalYearStudents}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Application Details */}
      {details.applicationDetails && (
        <section className="exam-details-section">
          <div className="section-header">
            <FileText size={24} />
            <h2>Application Details</h2>
          </div>
          <div className="application-content">
            {details.applicationDetails.applicationMode && (
              <div className="app-detail-item">
                <strong>Application Mode:</strong>
                <span className="badge badge-primary">{details.applicationDetails.applicationMode}</span>
              </div>
            )}
            {details.applicationDetails.applicationFee && (
              <div className="fee-section">
                <strong><DollarSign size={18} /> Application Fee:</strong>
                <div className="fee-grid">
                  {Object.entries(details.applicationDetails.applicationFee).map(([category, fee]) => (
                    <div key={category} className="fee-item">
                      <span className="fee-category">{category}</span>
                      <span className="fee-amount">{fee}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {details.applicationDetails.paymentMode && (
              <div className="app-detail-item">
                <strong>Payment Mode:</strong>
                <p>{details.applicationDetails.paymentMode}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Statistics */}
      {details.statistics && (
        <section className="exam-details-section">
          <div className="section-header">
            <BarChart3 size={24} />
            <h2>Exam Statistics</h2>
          </div>
          <div className="stats-grid">
            {Object.entries(details.statistics).map(([key, value]) => (
              <div key={key} className="stat-card">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{formatLabel(key)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Exam Pattern */}
      {details.examPattern && (
        <section className="exam-details-section">
          <div className="section-header">
            <FileCheck size={24} />
            <h2>Exam Pattern</h2>
          </div>
          <div className="exam-pattern-content">
            {details.examPattern.mode && (
              <div className="pattern-item">
                <strong>Mode:</strong>
                <span className="badge badge-success">{details.examPattern.mode}</span>
              </div>
            )}
            {details.examPattern.stages && (
              <div className="pattern-item">
                <strong>Stages:</strong>
                <div className="stages-list">
                  {details.examPattern.stages.map((stage, idx) => (
                    <span key={idx} className="stage-badge">{stage}</span>
                  ))}
                </div>
              </div>
            )}
            {details.examPattern.totalSections && (
              <div className="pattern-item">
                <strong>Total Sections:</strong> {details.examPattern.totalSections}
              </div>
            )}
            {details.examPattern.sectionalTimeLimit && (
              <div className="pattern-item">
                <strong>Sectional Time Limit:</strong>
                <span className="badge badge-warning">Yes - Cannot switch between sections</span>
              </div>
            )}

            {/* Preliminary Exam Pattern */}
            {details.examPattern.preliminary && (
              <div className="stage-pattern">
                <h3>Preliminary Exam</h3>
                <div className="pattern-table-container">
                  <table className="pattern-table">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Questions</th>
                        <th>Marks</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.examPattern.preliminary.sections.map((section, idx) => (
                        <tr key={idx}>
                          <td>{section.name}</td>
                          <td>{section.questions}</td>
                          <td>{section.marks}</td>
                          <td>{section.duration}</td>
                        </tr>
                      ))}
                      <tr className="total-row">
                        <td><strong>Total</strong></td>
                        <td><strong>{details.examPattern.preliminary.totalQuestions}</strong></td>
                        <td><strong>{details.examPattern.preliminary.totalMarks}</strong></td>
                        <td><strong>{details.examPattern.preliminary.totalDuration}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {details.examPattern.preliminary.negativeMarking && (
                  <div className="negative-marking">
                    <AlertCircle size={16} />
                    <strong>Negative Marking:</strong> {details.examPattern.preliminary.negativeMarking}
                  </div>
                )}
              </div>
            )}

            {/* Mains Exam Pattern */}
            {details.examPattern.mains && (
              <div className="stage-pattern">
                <h3>Mains Exam</h3>
                <div className="pattern-table-container">
                  <table className="pattern-table">
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Questions</th>
                        <th>Marks</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.examPattern.mains.sections.map((section, idx) => (
                        <tr key={idx}>
                          <td>{section.name}</td>
                          <td>{section.questions}</td>
                          <td>{section.marks}</td>
                          <td>{section.duration}</td>
                        </tr>
                      ))}
                      <tr className="total-row">
                        <td><strong>Total</strong></td>
                        <td><strong>{details.examPattern.mains.totalQuestions}</strong></td>
                        <td><strong>{details.examPattern.mains.totalMarks}</strong></td>
                        <td><strong>{details.examPattern.mains.totalDuration}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {details.examPattern.mains.negativeMarking && (
                  <div className="negative-marking">
                    <AlertCircle size={16} />
                    <strong>Negative Marking:</strong> {details.examPattern.mains.negativeMarking}
                  </div>
                )}
              </div>
            )}

            {/* Single stage exam (like CAT) */}
            {details.examPattern.sections && !details.examPattern.preliminary && !details.examPattern.mains && (
              <div className="pattern-table-container">
                <table className="pattern-table">
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Questions</th>
                      {details.examPattern.sections[0].marks !== undefined && <th>Marks</th>}
                      <th>Duration</th>
                      {details.examPattern.sections[0].mcqs !== undefined && <th>MCQs</th>}
                      {details.examPattern.sections[0].tita !== undefined && <th>TITA</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {details.examPattern.sections.map((section, idx) => (
                      <tr key={idx}>
                        <td>{section.name}</td>
                        <td>{section.questions}</td>
                        {section.marks !== undefined && <td>{section.marks}</td>}
                        <td>{section.duration}</td>
                        {section.mcqs !== undefined && <td>{section.mcqs}</td>}
                        {section.tita !== undefined && <td>{section.tita}</td>}
                      </tr>
                    ))}
                    {details.examPattern.totalQuestions && (
                      <tr className="total-row">
                        <td><strong>Total</strong></td>
                        <td><strong>{details.examPattern.totalQuestions}</strong></td>
                        {details.examPattern.totalMarks && <td><strong>{details.examPattern.totalMarks}</strong></td>}
                        <td><strong>{details.examPattern.totalDuration}</strong></td>
                        {details.examPattern.sections[0].mcqs !== undefined && <td>-</td>}
                        {details.examPattern.sections[0].tita !== undefined && <td>-</td>}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {details.examPattern.marksPerQuestion && (
              <div className="pattern-item">
                <strong>Marks per Question:</strong> {details.examPattern.marksPerQuestion}
              </div>
            )}
            {details.examPattern.negativeMarking && !details.examPattern.preliminary && !details.examPattern.mains && (
              <div className="negative-marking">
                <AlertCircle size={16} />
                <strong>Negative Marking:</strong> {details.examPattern.negativeMarking}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Cutoff */}
      {details.cutoff && (
        <section className="exam-details-section">
          <div className="section-header">
            <Target size={24} />
            <h2>Cutoff & Trends</h2>
          </div>
          <div className="cutoff-content">
            {details.cutoff.previousYearCutoff && (
              <div className="cutoff-category">
                <h3>Previous Year Cutoff</h3>
                <div className="cutoff-grid">
                  {Object.entries(details.cutoff.previousYearCutoff).map(([category, marks]) => (
                    <div key={category} className="cutoff-item">
                      <span className="cutoff-category-name">{category.toUpperCase()}</span>
                      <span className="cutoff-marks">{marks}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.cutoff.lastFiveYears && (
              <div className="cutoff-category">
                <h3>Last 5 Years Cutoff Trends</h3>
                <div className="cutoff-table-container">
                  <table className="cutoff-table">
                    <thead>
                      <tr>
                        <th>Year</th>
                        {Object.keys(details.cutoff.lastFiveYears[0])
                          .filter(key => key !== 'year')
                          .map(key => (
                            <th key={key}>{key.toUpperCase()}</th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {details.cutoff.lastFiveYears.map((yearData, idx) => (
                        <tr key={idx}>
                          <td><strong>{yearData.year}</strong></td>
                          {Object.entries(yearData)
                            .filter(([key]) => key !== 'year')
                            .map(([key, value]) => (
                              <td key={key}>{value}</td>
                            ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {details.cutoff.trend && (
              <div className="cutoff-info">
                <strong>Trend:</strong>
                <span className={`trend-badge trend-${details.cutoff.trend.toLowerCase()}`}>
                  {details.cutoff.trend}
                </span>
              </div>
            )}

            {details.cutoff.expectedCutoff2024 && (
              <div className="cutoff-category">
                <h3>Expected Cutoff 2024</h3>
                <div className="cutoff-grid">
                  {Object.entries(details.cutoff.expectedCutoff2024).map(([category, range]) => (
                    <div key={category} className="cutoff-item expected">
                      <span className="cutoff-category-name">{category.toUpperCase()}</span>
                      <span className="cutoff-marks">{range}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.cutoff.iimCallRequirement && (
              <div className="cutoff-category">
                <h3>IIM Call Requirements</h3>
                <div className="call-requirements">
                  {Object.entries(details.cutoff.iimCallRequirement).map(([iim, percentile]) => (
                    <div key={iim} className="call-item">
                      <span className="iim-name">{iim}</span>
                      <span className="percentile-required">{percentile}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.cutoff.sectionalCutoffs && (
              <div className="cutoff-info">
                <AlertCircle size={16} />
                <strong>Note:</strong> {details.cutoff.sectionalCutoffs}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Syllabus */}
      {details.syllabus && (
        <section className="exam-details-section">
          <div className="section-header">
            <BookOpen size={24} />
            <h2>Syllabus</h2>
          </div>
          <div className="syllabus-content">
            {Object.entries(details.syllabus).map(([subject, data]) => (
              <div key={subject} className="syllabus-subject">
                <h3>{subject}</h3>
                {data.focusArea && (
                  <div className="focus-area">
                    <strong>Focus Area:</strong> {data.focusArea}
                  </div>
                )}
                {data.topics && (
                  <div className="topics-grid">
                    {data.topics.map((topic, idx) => (
                      <div key={idx} className="topic-tag">
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Weightage */}
      {details.weightage && (
        <section className="exam-details-section">
          <div className="section-header">
            <TrendingUp size={24} />
            <h2>Subject & Topic Weightage</h2>
          </div>
          <div className="weightage-content">
            {details.weightage.subjectWise && (
              <div className="weightage-category">
                <h3>Subject-wise Weightage</h3>
                <div className="weightage-bars">
                  {details.weightage.subjectWise.map((item, idx) => (
                    <div key={idx} className="weightage-bar-item">
                      <div className="weightage-bar-header">
                        <span className="weightage-subject">
                          {item.subject || item.section}
                        </span>
                        <span className="weightage-value">{item.weightage}%</span>
                      </div>
                      <div className="weightage-bar-container">
                        <div
                          className={`weightage-bar difficulty-${item.difficulty?.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{ width: `${item.weightage}%` }}
                        />
                      </div>
                      <span className="difficulty-label">{item.difficulty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.weightage.sectionWise && (
              <div className="weightage-category">
                <h3>Section-wise Weightage</h3>
                <div className="weightage-bars">
                  {details.weightage.sectionWise.map((item, idx) => (
                    <div key={idx} className="weightage-bar-item">
                      <div className="weightage-bar-header">
                        <span className="weightage-subject">{item.section}</span>
                        <span className="weightage-value">{item.weightage}%</span>
                      </div>
                      <div className="weightage-bar-container">
                        <div
                          className={`weightage-bar difficulty-${item.difficulty?.toLowerCase().replace(/\s+/g, '-')}`}
                          style={{ width: `${item.weightage}%` }}
                        />
                      </div>
                      <span className="difficulty-label">{item.difficulty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.weightage.highWeightageTopics && (
              <div className="weightage-category">
                <h3>High Weightage Topics</h3>
                <div className="high-weightage-list">
                  {details.weightage.highWeightageTopics.map((topic, idx) => (
                    <div key={idx} className="high-weightage-item">
                      <div className="topic-header">
                        <span className="topic-name">{topic.topic}</span>
                        <span className={`importance-badge importance-${topic.importance?.toLowerCase().replace(/\s+/g, '-')}`}>
                          {topic.importance}
                        </span>
                      </div>
                      <div className="topic-details">
                        <span className="topic-subject">
                          {topic.subject || topic.section}
                        </span>
                        <span className="topic-questions">
                          {topic.expectedQuestions} questions
                        </span>
                      </div>
                      {topic.tip && (
                        <div className="topic-tip">
                          <strong>Tip:</strong> {topic.tip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Difficulty Analysis */}
      {details.difficulty && (
        <section className="exam-details-section">
          <div className="section-header">
            <AlertCircle size={24} />
            <h2>Difficulty Analysis</h2>
          </div>
          <div className="difficulty-content">
            {details.difficulty.overallDifficulty && (
              <div className="difficulty-overall">
                <strong>Overall Difficulty:</strong>
                <span className={`difficulty-badge difficulty-${details.difficulty.overallDifficulty?.toLowerCase().replace(/\s+/g, '-')}`}>
                  {details.difficulty.overallDifficulty}
                </span>
              </div>
            )}
            {details.difficulty.sectionWiseDifficulty && (
              <div className="difficulty-sections">
                <h3>Section-wise Difficulty</h3>
                <div className="difficulty-grid">
                  {Object.entries(details.difficulty.sectionWiseDifficulty).map(([section, level]) => (
                    <div key={section} className="difficulty-item">
                      <span className="difficulty-section">{section}</span>
                      <span className={`difficulty-level difficulty-${level?.toLowerCase().replace(/\s+/g, '-')}`}>
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {details.difficulty.difficultyTrend && (
              <div className="difficulty-info">
                <strong>Trend:</strong> {details.difficulty.difficultyTrend}
              </div>
            )}
            {details.difficulty.timeManagement && (
              <div className="difficulty-info">
                <AlertCircle size={16} />
                <strong>Time Management:</strong> {details.difficulty.timeManagement}
              </div>
            )}
            {details.difficulty.accuracyRequirement && (
              <div className="difficulty-info">
                <Target size={16} />
                <strong>Accuracy Requirement:</strong> {details.difficulty.accuracyRequirement}
              </div>
            )}
            {details.difficulty.strategicApproach && (
              <div className="difficulty-info">
                <strong>Strategic Approach:</strong> {details.difficulty.strategicApproach}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Preparation Strategy */}
      {details.preparation && (
        <section className="exam-details-section">
          <div className="section-header">
            <Target size={24} />
            <h2>Preparation Strategy</h2>
          </div>
          <div className="preparation-content">
            {details.preparation.recommendedStudyDuration && (
              <div className="prep-info">
                <Clock size={18} />
                <strong>Recommended Duration:</strong> {details.preparation.recommendedStudyDuration}
              </div>
            )}
            {details.preparation.dailyStudyHours && (
              <div className="prep-info">
                <Clock size={18} />
                <strong>Daily Study Hours:</strong> {details.preparation.dailyStudyHours}
              </div>
            )}

            {details.preparation.importantBooks && (
              <div className="prep-category">
                <h3>Recommended Books</h3>
                <div className="books-list">
                  {details.preparation.importantBooks.map((book, idx) => (
                    <div key={idx} className="book-item">
                      <BookOpen size={16} />
                      <div>
                        <strong>{book.subject || book.section}:</strong>
                        <span>{book.book}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.preparation.onlinePlatforms && (
              <div className="prep-category">
                <h3>Online Platforms</h3>
                <div className="platforms-grid">
                  {details.preparation.onlinePlatforms.map((platform, idx) => (
                    <div key={idx} className="platform-tag">
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.preparation.preparationStrategy && (
              <div className="prep-category">
                <h3>Preparation Strategy</h3>
                <div className="strategy-list">
                  {details.preparation.preparationStrategy.map((strategy, idx) => (
                    <div key={idx} className="strategy-item">
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.preparation.mockTestsRecommended && (
              <div className="prep-info highlight">
                <Award size={18} />
                <strong>Mock Tests:</strong> {details.preparation.mockTestsRecommended}
              </div>
            )}
            {details.preparation.sectionalTestsRecommended && (
              <div className="prep-info highlight">
                <Award size={18} />
                <strong>Sectional Tests:</strong> {details.preparation.sectionalTestsRecommended}
              </div>
            )}
            {details.preparation.previousYearPapers && (
              <div className="prep-info highlight">
                <FileText size={18} />
                <strong>Previous Year Papers:</strong> {details.preparation.previousYearPapers}
              </div>
            )}
            {details.preparation.mentalPreparation && (
              <div className="prep-info highlight">
                <AlertCircle size={18} />
                <strong>Mental Preparation:</strong> {details.preparation.mentalPreparation}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Participating Banks/Institutes */}
      {(details.participatingBanks || details.participatingInstitutes) && (
        <section className="exam-details-section">
          <div className="section-header">
            <Building2 size={24} />
            <h2>{details.participatingBanks ? 'Participating Banks' : 'Participating Institutes'}</h2>
          </div>
          <div className="participating-list">
            {(details.participatingBanks || details.participatingInstitutes).map((item, idx) => (
              <div key={idx} className="participating-item">
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Documents Required */}
      {details.documentsRequired && (
        <section className="exam-details-section">
          <div className="section-header">
            <FileCheck size={24} />
            <h2>Documents Required</h2>
          </div>
          <div className="documents-list">
            {details.documentsRequired.map((doc, idx) => (
              <div key={idx} className="document-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Important Instructions */}
      {details.importantInstructions && (
        <section className="exam-details-section">
          <div className="section-header">
            <AlertCircle size={24} />
            <h2>Important Instructions</h2>
          </div>
          <div className="instructions-list">
            {details.importantInstructions.map((instruction, idx) => (
              <div key={idx} className="instruction-item">
                <AlertCircle size={16} className="alert-icon" />
                <span>{instruction}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {details.faq && (
        <section className="exam-details-section">
          <div className="section-header">
            <HelpCircle size={24} />
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {details.faq.map((item, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <HelpCircle size={18} />
                  <strong>{item.question}</strong>
                </div>
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional Details */}
      {details.additionalDetails && Object.keys(details.additionalDetails).length > 0 && (
        <section className="exam-details-section">
          <div className="section-header">
            <Info size={24} />
            <h2>Additional Information</h2>
          </div>
          <div className="additional-details">
            {Object.entries(details.additionalDetails).map(([key, value]) => (
              <div key={key} className="additional-item">
                <strong>{formatLabel(key)}:</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Helper function to format camelCase labels
function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}
