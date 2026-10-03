import * as XLSX from 'xlsx';

export function exportTestResults(testData, examName) {
  try {
    const workbook = XLSX.utils.book_new();

    const summaryData = [
      ['Test Result Report'],
      [''],
      ['Exam', examName],
      ['Date', new Date().toLocaleDateString()],
      ['Score', testData.score || 'N/A'],
      ['Accuracy', `${testData.accuracy || 0}%`],
      ['Time Taken', testData.timeTaken || 'N/A'],
      [''],
      ['Summary'],
      ['Total Questions', testData.totalQuestions || 0],
      ['Correct', testData.correct || 0],
      ['Wrong', testData.wrong || 0],
      ['Skipped', testData.skipped || 0]
    ];

    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

    const questionsData = [
      ['Q.No', 'Question', 'Your Answer', 'Correct Answer', 'Result', 'Time (sec)']
    ];

    if (testData.questions && testData.questions.length > 0) {
      testData.questions.forEach((q, index) => {
        questionsData.push([
          index + 1,
          q.question || `Question ${index + 1}`,
          q.userAnswer !== undefined ? q.userAnswer : 'Skipped',
          q.correctAnswer,
          q.isCorrect ? 'Correct' : (q.userAnswer !== undefined ? 'Wrong' : 'Skipped'),
          q.timeTaken || 0
        ]);
      });
    }

    const questionsSheet = XLSX.utils.aoa_to_sheet(questionsData);
    XLSX.utils.book_append_sheet(workbook, questionsSheet, 'Questions');

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-test-result-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.xlsx`;

    XLSX.writeFile(workbook, filename);
    return { success: true };
  } catch (error) {
    console.error('Excel export error:', error);
    return { success: false, error: error.message };
  }
}

export function exportProgressReport(progressData, examName) {
  try {
    const workbook = XLSX.utils.book_new();

    const summaryData = [
      ['Progress Report'],
      [''],
      ['Exam', examName],
      ['Generated', new Date().toLocaleDateString()],
      [''],
      ['Overall Statistics'],
      ['Average Accuracy', `${progressData.averageAccuracy || 0}%`],
      ['Average Speed', `${progressData.averageSpeed || 0} sec/question`],
      ['Tests Completed', progressData.testsCompleted || 0],
      ['Practice Sessions', progressData.practiceSessions || 0]
    ];

    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

    const trendsData = [
      ['Date', 'Accuracy (%)', 'Speed (sec)']
    ];

    if (progressData.trends && progressData.trends.length > 0) {
      progressData.trends.forEach(trend => {
        trendsData.push([
          trend.date,
          trend.accuracy,
          trend.speed
        ]);
      });
    }

    const trendsSheet = XLSX.utils.aoa_to_sheet(trendsData);
    XLSX.utils.book_append_sheet(workbook, trendsSheet, 'Trends');

    const weakTopicsData = [
      ['Topic', 'Accuracy (%)', 'Attempts', 'Status']
    ];

    if (progressData.weakTopics && progressData.weakTopics.length > 0) {
      progressData.weakTopics.forEach(topic => {
        weakTopicsData.push([
          topic.name,
          topic.accuracy,
          topic.attempts,
          topic.status || 'Needs Practice'
        ]);
      });
    }

    const weakTopicsSheet = XLSX.utils.aoa_to_sheet(weakTopicsData);
    XLSX.utils.book_append_sheet(workbook, weakTopicsSheet, 'Weak Topics');

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-progress-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.xlsx`;

    XLSX.writeFile(workbook, filename);
    return { success: true };
  } catch (error) {
    console.error('Excel export error:', error);
    return { success: false, error: error.message };
  }
}

export function exportExamAnalysis(analysisData, examName) {
  try {
    const workbook = XLSX.utils.book_new();

    const headerData = [
      ['Exam Analysis Report'],
      [''],
      ['Exam', examName],
      ['Generated', new Date().toLocaleDateString()],
      [''],
      ['Note: This is sample data based on typical exam patterns']
    ];

    const headerSheet = XLSX.utils.aoa_to_sheet(headerData);
    XLSX.utils.book_append_sheet(workbook, headerSheet, 'Overview');

    const patternData = [
      ['Question Type', 'Frequency', 'Difficulty', 'Avg Time (sec)']
    ];

    if (analysisData.patterns && analysisData.patterns.length > 0) {
      analysisData.patterns.forEach(pattern => {
        patternData.push([
          pattern.type,
          pattern.frequency,
          pattern.difficulty,
          pattern.avgTime
        ]);
      });
    }

    const patternSheet = XLSX.utils.aoa_to_sheet(patternData);
    XLSX.utils.book_append_sheet(workbook, patternSheet, 'Question Patterns');

    const weightageData = [
      ['Topic', 'Weightage (%)', 'Expected Questions', 'Importance']
    ];

    if (analysisData.topicWeightage && analysisData.topicWeightage.length > 0) {
      analysisData.topicWeightage.forEach(topic => {
        weightageData.push([
          topic.name,
          topic.weightage,
          topic.expectedQuestions,
          topic.importance
        ]);
      });
    }

    const weightageSheet = XLSX.utils.aoa_to_sheet(weightageData);
    XLSX.utils.book_append_sheet(workbook, weightageSheet, 'Topic Weightage');

    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-exam-analysis-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.xlsx`;

    XLSX.writeFile(workbook, filename);
    return { success: true };
  } catch (error) {
    console.error('Excel export error:', error);
    return { success: false, error: error.message };
  }
}
