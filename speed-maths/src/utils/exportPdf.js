import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function exportTestResultsPdf(testData, examName) {
  try {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Test Result Report', 14, 20);
    
    doc.setFontSize(12);
    doc.text(`Exam: ${examName}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 37);
    doc.text(`Score: ${testData.score || 'N/A'}`, 14, 44);
    doc.text(`Accuracy: ${testData.accuracy || 0}%`, 14, 51);
    doc.text(`Time Taken: ${testData.timeTaken || 'N/A'}`, 14, 58);
    
    doc.setFontSize(14);
    doc.text('Summary', 14, 70);
    
    const summaryData = [
      ['Total Questions', testData.totalQuestions || 0],
      ['Correct', testData.correct || 0],
      ['Wrong', testData.wrong || 0],
      ['Skipped', testData.skipped || 0]
    ];
    
    doc.autoTable({
      startY: 75,
      head: [['Metric', 'Value']],
      body: summaryData,
      theme: 'grid',
      headStyles: { fillColor: [99, 102, 241] }
    });
    
    if (testData.questions && testData.questions.length > 0) {
      doc.addPage();
      doc.setFontSize(14);
      doc.text('Question Details', 14, 20);
      
      const questionData = testData.questions.map((q, index) => [
        index + 1,
        q.question || `Question ${index + 1}`,
        q.userAnswer !== undefined ? q.userAnswer : 'Skipped',
        q.correctAnswer,
        q.isCorrect ? 'Correct' : (q.userAnswer !== undefined ? 'Wrong' : 'Skipped'),
        q.timeTaken || 0
      ]);
      
      doc.autoTable({
        startY: 25,
        head: [['Q.No', 'Question', 'Your Answer', 'Correct', 'Result', 'Time(s)']],
        body: questionData,
        theme: 'grid',
        headStyles: { fillColor: [99, 102, 241] },
        styles: { fontSize: 8 }
      });
    }
    
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-test-result-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.pdf`;
    
    doc.save(filename);
    return { success: true };
  } catch (error) {
    console.error('PDF export error:', error);
    return { success: false, error: error.message };
  }
}

export function exportProgressReportPdf(progressData, examName) {
  try {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Progress Report', 14, 20);
    
    doc.setFontSize(12);
    doc.text(`Exam: ${examName}`, 14, 30);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 37);
    
    doc.setFontSize(14);
    doc.text('Overall Statistics', 14, 50);
    
    const statsData = [
      ['Average Accuracy', `${progressData.averageAccuracy || 0}%`],
      ['Average Speed', `${progressData.averageSpeed || 0} sec/question`],
      ['Tests Completed', progressData.testsCompleted || 0],
      ['Practice Sessions', progressData.practiceSessions || 0]
    ];
    
    doc.autoTable({
      startY: 55,
      head: [['Metric', 'Value']],
      body: statsData,
      theme: 'grid',
      headStyles: { fillColor: [99, 102, 241] }
    });
    
    if (progressData.trends && progressData.trends.length > 0) {
      const finalY = doc.lastAutoTable.finalY || 55;
      doc.setFontSize(14);
      doc.text('Accuracy & Speed Trends', 14, finalY + 15);
      
      const trendsData = progressData.trends.map(trend => [
        trend.date,
        `${trend.accuracy}%`,
        `${trend.speed} sec`
      ]);
      
      doc.autoTable({
        startY: finalY + 20,
        head: [['Date', 'Accuracy', 'Speed']],
        body: trendsData,
        theme: 'grid',
        headStyles: { fillColor: [99, 102, 241] }
      });
    }
    
    if (progressData.weakTopics && progressData.weakTopics.length > 0) {
      const finalY = doc.lastAutoTable.finalY || 100;
      
      if (finalY > 230) {
        doc.addPage();
        doc.setFontSize(14);
        doc.text('Weak Topics', 14, 20);
        
        const weakTopicsData = progressData.weakTopics.map(topic => [
          topic.name,
          `${topic.accuracy}%`,
          topic.attempts,
          topic.status || 'Needs Practice'
        ]);
        
        doc.autoTable({
          startY: 25,
          head: [['Topic', 'Accuracy', 'Attempts', 'Status']],
          body: weakTopicsData,
          theme: 'grid',
          headStyles: { fillColor: [99, 102, 241] }
        });
      } else {
        doc.setFontSize(14);
        doc.text('Weak Topics', 14, finalY + 15);
        
        const weakTopicsData = progressData.weakTopics.map(topic => [
          topic.name,
          `${topic.accuracy}%`,
          topic.attempts,
          topic.status || 'Needs Practice'
        ]);
        
        doc.autoTable({
          startY: finalY + 20,
          head: [['Topic', 'Accuracy', 'Attempts', 'Status']],
          body: weakTopicsData,
          theme: 'grid',
          headStyles: { fillColor: [99, 102, 241] }
        });
      }
    }
    
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-progress-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.pdf`;
    
    doc.save(filename);
    return { success: true };
  } catch (error) {
    console.error('PDF export error:', error);
    return { success: false, error: error.message };
  }
}

export function exportExamAnalysisPdf(analysisData, examName) {
  try {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Exam Analysis Report', 14, 20);
    
    doc.setFontSize(12);
    doc.text(`Exam: ${examName}`, 14, 30);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 37);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Note: This is sample data based on typical exam patterns', 14, 44);
    doc.setTextColor(0);
    
    if (analysisData.patterns && analysisData.patterns.length > 0) {
      doc.setFontSize(14);
      doc.text('Question Patterns', 14, 55);
      
      const patternData = analysisData.patterns.map(pattern => [
        pattern.type,
        pattern.frequency,
        pattern.difficulty,
        pattern.avgTime
      ]);
      
      doc.autoTable({
        startY: 60,
        head: [['Question Type', 'Frequency', 'Difficulty', 'Avg Time (sec)']],
        body: patternData,
        theme: 'grid',
        headStyles: { fillColor: [99, 102, 241] }
      });
    }
    
    if (analysisData.topicWeightage && analysisData.topicWeightage.length > 0) {
      const finalY = doc.lastAutoTable.finalY || 60;
      
      if (finalY > 200) {
        doc.addPage();
        doc.setFontSize(14);
        doc.text('Topic Weightage', 14, 20);
        
        const weightageData = analysisData.topicWeightage.map(topic => [
          topic.name,
          `${topic.weightage}%`,
          topic.expectedQuestions,
          topic.importance
        ]);
        
        doc.autoTable({
          startY: 25,
          head: [['Topic', 'Weightage', 'Expected Qs', 'Importance']],
          body: weightageData,
          theme: 'grid',
          headStyles: { fillColor: [99, 102, 241] }
        });
      } else {
        doc.setFontSize(14);
        doc.text('Topic Weightage', 14, finalY + 15);
        
        const weightageData = analysisData.topicWeightage.map(topic => [
          topic.name,
          `${topic.weightage}%`,
          topic.expectedQuestions,
          topic.importance
        ]);
        
        doc.autoTable({
          startY: finalY + 20,
          head: [['Topic', 'Weightage', 'Expected Qs', 'Importance']],
          body: weightageData,
          theme: 'grid',
          headStyles: { fillColor: [99, 102, 241] }
        });
      }
    }
    
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `speedmaths-exam-analysis-${examName.toLowerCase().replace(/\s+/g, '-')}-${timestamp}.pdf`;
    
    doc.save(filename);
    return { success: true };
  } catch (error) {
    console.error('PDF export error:', error);
    return { success: false, error: error.message };
  }
}
