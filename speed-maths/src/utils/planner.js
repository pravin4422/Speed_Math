import { topics } from '../data/topics';

/**
 * Generate a study plan based on exam date and exam topics
 */
export function generatePlan(examId, examDate, today) {
  const daysUntilExam = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));
  
  if (daysUntilExam < 7) {
    return null;
  }

  const examTopics = topics.filter(t => t.exam === examId);
  
  if (examTopics.length === 0) {
    return null;
  }

  const plan = [];
  let taskIdCounter = 1;

  const learnDays = Math.floor(daysUntilExam * 0.5);
  const practiceDays = Math.floor(daysUntilExam * 0.3);
  const revisionDays = daysUntilExam - learnDays - practiceDays;

  let currentDate = new Date(today);
  let topicIndex = 0;

  // Phase 1: Learn + Practice (50%)
  for (let i = 0; i < learnDays; i++) {
    const dayTasks = [];
    const topicsPerDay = i % 3 === 0 ? 1 : 2;

    for (let j = 0; j < topicsPerDay && topicIndex < examTopics.length; j++) {
      const topic = examTopics[topicIndex];
      
      dayTasks.push({
        id: `task-${taskIdCounter++}`,
        type: 'Learn',
        topicId: topic.id,
        label: `Learn: ${topic.name}`
      });

      dayTasks.push({
        id: `task-${taskIdCounter++}`,
        type: 'Practice',
        topicId: topic.id,
        label: `Practice: ${topic.name}`
      });

      topicIndex++;
    }

    plan.push({
      date: new Date(currentDate),
      tasks: dayTasks
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Phase 2: Mixed Practice & Sectional Tests (30%)
  for (let i = 0; i < practiceDays; i++) {
    const dayTasks = [];
    
    if (i % 2 === 0) {
      const randomTopics = getRandomTopics(examTopics, 3);
      randomTopics.forEach(topic => {
        dayTasks.push({
          id: `task-${taskIdCounter++}`,
          type: 'Practice',
          topicId: topic.id,
          label: `Practice: ${topic.name}`
        });
      });
    } else {
      dayTasks.push({
        id: `task-${taskIdCounter++}`,
        type: 'Mock',
        topicId: null,
        label: 'Sectional Test'
      });
    }

    plan.push({
      date: new Date(currentDate),
      tasks: dayTasks
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Phase 3: Mocks & Revision (20%, last 7+ days)
  for (let i = 0; i < revisionDays; i++) {
    const dayTasks = [];
    const daysRemaining = revisionDays - i;

    if (daysRemaining === 1) {
      dayTasks.push({
        id: `task-${taskIdCounter++}`,
        type: 'Revision',
        topicId: null,
        label: 'Light Revision - All Topics'
      });
    } else if (i % 2 === 0) {
      dayTasks.push({
        id: `task-${taskIdCounter++}`,
        type: 'Mock',
        topicId: null,
        label: 'Full Mock Test'
      });
    } else {
      const randomTopics = getRandomTopics(examTopics, 4);
      randomTopics.forEach(topic => {
        dayTasks.push({
          id: `task-${taskIdCounter++}`,
          type: 'Revision',
          topicId: topic.id,
          label: `Revise: ${topic.name}`
        });
      });
    }

    plan.push({
      date: new Date(currentDate),
      tasks: dayTasks
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return plan;
}

function getRandomTopics(topics, count) {
  const shuffled = [...topics].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, topics.length));
}

export function formatPlanDate(date) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}

export function groupByWeek(plan) {
  const weeks = [];
  let currentWeek = [];

  plan.forEach((day, index) => {
    currentWeek.push(day);

    if (day.date.getDay() === 0 || currentWeek.length === 7 || index === plan.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}

export function calculateProgress(plan, completedTasks) {
  const totalTasks = plan.reduce((sum, day) => sum + day.tasks.length, 0);
  const completed = completedTasks.length;
  
  return {
    total: totalTasks,
    completed,
    percentage: totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0
  };
}
