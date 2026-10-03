// SAMPLE DATA - replace with verified values from the official notification

export const examPatterns = {
  'ibps': {
    negativeMarking: 0.25,
    mocks: [
      {
        id: 'ibps-po-mock-1',
        name: 'IBPS PO Prelims Mock 1',
        stage: 'Prelims',
        sections: [
          { name: 'English Language', questions: 30, marks: 30, minutes: 20 },
          { name: 'Quantitative Aptitude', questions: 35, marks: 35, minutes: 20 },
          { name: 'Reasoning Ability', questions: 35, marks: 35, minutes: 20 }
        ]
      }
    ]
  },
  'sbi': {
    negativeMarking: 0.25,
    mocks: [
      {
        id: 'sbi-po-mock-1',
        name: 'SBI PO Prelims Mock 1',
        stage: 'Prelims',
        sections: [
          { name: 'English Language', questions: 30, marks: 30, minutes: 20 },
          { name: 'Quantitative Aptitude', questions: 35, marks: 35, minutes: 20 },
          { name: 'Reasoning Ability', questions: 35, marks: 35, minutes: 20 }
        ]
      }
    ]
  },
  'ssc': {
    negativeMarking: 0.25,
    mocks: [
      {
        id: 'ssc-cgl-mock-1',
        name: 'SSC CGL Full Mock Test 1',
        stage: 'Tier 1',
        sections: [
          { name: 'General Intelligence', questions: 25, marks: 50, minutes: 15 },
          { name: 'General Awareness', questions: 25, marks: 50, minutes: 15 },
          { name: 'Quantitative Aptitude', questions: 25, marks: 50, minutes: 15 },
          { name: 'English Comprehension', questions: 25, marks: 50, minutes: 15 }
        ]
      }
    ]
  },
  'cat': {
    negativeMarking: 0.33, // TODO verify
    mocks: [
      {
        id: 'cat-mock-1',
        name: 'CAT Full Mock Test 1',
        stage: 'Full Test',
        sections: [
          { name: 'Verbal Ability & Reading Comprehension', questions: 24, marks: 72, minutes: 40 },
          { name: 'Data Interpretation & Logical Reasoning', questions: 20, marks: 60, minutes: 40 },
          { name: 'Quantitative Ability', questions: 22, marks: 66, minutes: 40 }
        ]
      }
    ]
  }
};
