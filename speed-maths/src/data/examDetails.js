// Dynamic exam details database
// Each exam can have different fields - the UI will adapt automatically

export const examDetails = {
  ibps: {
    examName: "IBPS (Institute of Banking Personnel Selection)",
    examShortName: "IBPS",
    
    basicInformation: {
      conductingOrganization: "Institute of Banking Personnel Selection",
      officialWebsite: "https://www.ibps.in",
      description: "IBPS conducts online examinations for recruitment of officers and clerical staff in Public Sector Banks across India.",
      purpose: "Recruitment for various posts in PSU Banks including PO, Clerk, SO, and RRB positions",
      level: "National Level"
    },

    importantDates: {
      applicationStartDate: "August 2024",
      applicationLastDate: "September 2024",
      admitCardDate: "October 2024",
      prelimsExamDate: "October-November 2024",
      mainsExamDate: "November-December 2024",
      resultDate: "January 2025"
    },

    eligibility: {
      educationalQualification: "Bachelor's degree in any discipline from a recognized university",
      ageLimit: {
        minimum: 20,
        maximum: 30,
        ageRelaxation: {
          "SC/ST": "5 years",
          "OBC": "3 years",
          "PWD": "10 years"
        }
      },
      nationality: "Indian Citizen / Subject of Nepal / Subject of Bhutan"
    },

    applicationDetails: {
      applicationMode: "Online",
      applicationFee: {
        "General/OBC/EWS": "₹850",
        "SC/ST/PWD": "₹175"
      },
      paymentMode: "Debit Card/Credit Card/Net Banking"
    },

    statistics: {
      candidatesRegistered: "4,50,000+",
      candidatesAppeared: "3,80,000+",
      candidatesQualified: "15,000+",
      competitionLevel: "High"
    },

    examPattern: {
      mode: "Online (Computer Based Test)",
      stages: ["Preliminary Exam", "Main Exam", "Interview"],
      preliminary: {
        sections: [
          { name: "English Language", questions: 30, marks: 30, duration: "20 min" },
          { name: "Numerical Ability", questions: 35, marks: 35, duration: "20 min" },
          { name: "Reasoning Ability", questions: 35, marks: 35, duration: "20 min" }
        ],
        totalQuestions: 100,
        totalMarks: 100,
        totalDuration: "60 minutes",
        negativeMarking: "0.25 marks per wrong answer"
      },
      mains: {
        sections: [
          { name: "Reasoning & Computer Aptitude", questions: 45, marks: 60, duration: "60 min" },
          { name: "English Language", questions: 35, marks: 40, duration: "40 min" },
          { name: "Data Analysis & Interpretation", questions: 35, marks: 60, duration: "45 min" },
          { name: "General/Economy/Banking Awareness", questions: 40, marks: 40, duration: "35 min" }
        ],
        totalQuestions: 155,
        totalMarks: 200,
        totalDuration: "180 minutes",
        negativeMarking: "0.25 marks per wrong answer"
      }
    },

    cutoff: {
      previousYearCutoff: {
        general: 82.5,
        obc: 79.25,
        sc: 71.0,
        st: 68.5,
        ews: 80.0
      },
      lastFiveYears: [
        { year: "2023", general: 82.5, obc: 79.25, sc: 71.0, st: 68.5 },
        { year: "2022", general: 81.0, obc: 78.5, sc: 70.25, st: 67.75 },
        { year: "2021", general: 79.75, obc: 77.0, sc: 69.5, st: 66.25 },
        { year: "2020", general: 78.5, obc: 75.75, sc: 68.0, st: 65.5 },
        { year: "2019", general: 77.25, obc: 74.5, sc: 67.25, st: 64.75 }
      ],
      trend: "Increasing",
      expectedCutoff2024: {
        general: "83-85",
        obc: "80-82",
        sc: "72-74",
        st: "69-71"
      }
    },

    syllabus: {
      "Quantitative Aptitude": {
        topics: [
          "Number System",
          "Simplification",
          "Average",
          "Percentage",
          "Ratio & Proportion",
          "Profit & Loss",
          "Simple & Compound Interest",
          "Time & Work",
          "Time, Speed & Distance",
          "Data Interpretation",
          "Mensuration",
          "Algebra",
          "Probability"
        ]
      },
      "Reasoning Ability": {
        topics: [
          "Syllogism",
          "Coding-Decoding",
          "Blood Relations",
          "Seating Arrangement",
          "Puzzles",
          "Inequalities",
          "Direction Sense",
          "Order & Ranking",
          "Input-Output",
          "Data Sufficiency"
        ]
      },
      "English Language": {
        topics: [
          "Reading Comprehension",
          "Cloze Test",
          "Para Jumbles",
          "Sentence Correction",
          "Spotting Errors",
          "Fill in the Blanks",
          "Vocabulary",
          "Idioms & Phrases"
        ]
      },
      "General Awareness": {
        topics: [
          "Current Affairs (Last 6 months)",
          "Banking Awareness",
          "Economic Affairs",
          "Government Schemes",
          "Awards & Honors",
          "Books & Authors",
          "Sports",
          "Important Days"
        ]
      }
    },

    weightage: {
      subjectWise: [
        { subject: "Quantitative Aptitude", weightage: 35, difficulty: "High" },
        { subject: "Reasoning Ability", weightage: 35, difficulty: "Medium-High" },
        { subject: "English Language", weightage: 30, difficulty: "Medium" },
        { subject: "General Awareness", weightage: 40, difficulty: "Easy-Medium" }
      ],
      highWeightageTopics: [
        { topic: "Data Interpretation", subject: "Quant", expectedQuestions: "10-15", importance: "Very High" },
        { topic: "Seating Arrangement & Puzzles", subject: "Reasoning", expectedQuestions: "15-20", importance: "Very High" },
        { topic: "Reading Comprehension", subject: "English", expectedQuestions: "7-10", importance: "High" },
        { topic: "Banking Awareness", subject: "GA", expectedQuestions: "15-20", importance: "High" },
        { topic: "Number Series", subject: "Quant", expectedQuestions: "5", importance: "High" },
        { topic: "Syllogism", subject: "Reasoning", expectedQuestions: "5", importance: "Medium" }
      ]
    },

    difficulty: {
      overallDifficulty: "Medium to High",
      sectionWiseDifficulty: {
        "Quantitative Aptitude": "High",
        "Reasoning Ability": "Medium-High",
        "English Language": "Medium",
        "General Awareness": "Easy-Medium"
      },
      timeManagement: "Critical - Very important to manage time efficiently",
      accuracyRequirement: "High - Minimum 75-80% accuracy needed"
    },

    preparation: {
      recommendedStudyDuration: "6-8 months for beginners, 3-4 months for experienced",
      dailyStudyHours: "4-6 hours",
      importantBooks: [
        { subject: "Quantitative Aptitude", book: "Quantitative Aptitude by R.S. Aggarwal" },
        { subject: "Reasoning", book: "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal" },
        { subject: "English", book: "Word Power Made Easy by Norman Lewis" },
        { subject: "Banking Awareness", book: "Banking Awareness by Arihant Publications" }
      ],
      preparationStrategy: [
        "Start with understanding the exam pattern and syllabus thoroughly",
        "Focus on building strong basics in Quantitative Aptitude",
        "Practice daily for Reasoning - especially puzzles and seating arrangements",
        "Read newspapers daily for General Awareness and Current Affairs",
        "Take regular mock tests to improve speed and accuracy",
        "Analyze your mistakes and work on weak areas",
        "Time management is crucial - practice with timer",
        "Revise regularly, especially important formulas and shortcuts"
      ],
      mockTestsRecommended: "Minimum 50-60 full-length mocks before the exam",
      previousYearPapers: "Solve last 5 years papers multiple times"
    },

    participatingBanks: [
      "State Bank of India (SBI)",
      "Punjab National Bank (PNB)",
      "Bank of Baroda (BoB)",
      "Canara Bank",
      "Union Bank of India",
      "Bank of India",
      "Indian Bank",
      "Central Bank of India",
      "Indian Overseas Bank",
      "UCO Bank",
      "Bank of Maharashtra",
      "Punjab & Sind Bank"
    ],

    documentsRequired: [
      "Valid Photo Identity Proof (Aadhaar/PAN/Passport/Driving License/Voter ID)",
      "Recent passport size photographs",
      "Signature on white paper with black ink",
      "Educational qualification certificates",
      "Caste certificate (if applicable)",
      "PWD certificate (if applicable)",
      "Domicile certificate (if required)",
      "Admit card (must carry to exam center)"
    ],

    importantInstructions: [
      "Candidates must report 30 minutes before the exam time",
      "Mobile phones and electronic devices are strictly prohibited",
      "Rough sheets will be provided at the exam center",
      "Calculator is not allowed in the examination hall",
      "Biometric verification is mandatory",
      "Follow COVID-19 safety guidelines at exam center",
      "Candidates should bring admit card and valid ID proof",
      "Use only black/blue ballpoint pen for signature verification"
    ],

    faq: [
      {
        question: "Is there negative marking in IBPS PO exam?",
        answer: "Yes, there is negative marking of 0.25 marks for each wrong answer in both Prelims and Mains."
      },
      {
        question: "Can I use calculator in IBPS exam?",
        answer: "No, calculators are not allowed. You need to do all calculations mentally or on rough sheets provided."
      },
      {
        question: "How many times can I appear for IBPS PO?",
        answer: "There is no restriction on the number of attempts. You can appear as many times as you meet the eligibility criteria."
      },
      {
        question: "Is interview marks considered in final merit?",
        answer: "Yes, final selection is based on performance in Mains exam (80%) and Interview (20%)."
      },
      {
        question: "What is the selection ratio for IBPS PO?",
        answer: "The selection ratio is approximately 1:3 to 1:5 depending on the bank and vacancy."
      }
    ],

    additionalDetails: {
      postPreference: "Candidates can choose up to 9 bank preferences during online application",
      medicalStandards: "Selected candidates must meet medical fitness standards as per bank requirements",
      training: "Successful candidates undergo training period of approximately 2 years",
      careerGrowth: "Excellent career growth opportunities with promotions to Scale II, III, IV, and V",
      salary: "Starting salary approximately ₹40,000-50,000 per month (including allowances)"
    }
  },

  cat: {
    examName: "CAT (Common Admission Test)",
    examShortName: "CAT",
    
    basicInformation: {
      conductingOrganization: "Indian Institutes of Management (IIMs)",
      conductingAuthority: "Rotates among IIMs annually",
      officialWebsite: "https://iimcat.ac.in",
      description: "CAT is a national-level management entrance exam conducted by IIMs for admission to MBA/PGDM programs.",
      purpose: "Gateway to top B-schools in India including all IIMs, FMS, MDI, SPJIMR, etc.",
      level: "National Level",
      frequency: "Once a year"
    },

    importantDates: {
      registrationStartDate: "August 2024",
      registrationLastDate: "September 2024",
      admitCardAvailable: "Late October 2024",
      examDate: "Last Sunday of November 2024",
      answerKeyRelease: "Early December 2024",
      resultDate: "Second week of January 2025",
      slot1: "8:30 AM - 10:30 AM",
      slot2: "12:30 PM - 2:30 PM",
      slot3: "4:30 PM - 6:30 PM"
    },

    eligibility: {
      educationalQualification: "Bachelor's degree with minimum 50% marks (45% for SC/ST/PWD)",
      ageLimit: {
        minimum: "No minimum age limit",
        maximum: "No maximum age limit"
      },
      nationality: "Indian and Foreign nationals can apply",
      finalYearStudents: "Yes, appearing candidates can also apply"
    },

    applicationDetails: {
      applicationMode: "Online only",
      applicationFee: {
        "General/OBC": "₹2,300",
        "SC/ST/PWD": "₹1,150"
      },
      paymentMode: "Net Banking/Credit Card/Debit Card/UPI"
    },

    statistics: {
      candidatesRegistered: "3,00,000+",
      candidatesAppeared: "2,50,000+",
      candidatesScored99Percentile: "~2,500",
      candidatesScored90Percentile: "~25,000",
      competitionLevel: "Very High"
    },

    examPattern: {
      mode: "Computer Based Test (CBT)",
      totalSections: 3,
      sections: [
        {
          name: "Verbal Ability and Reading Comprehension (VARC)",
          questions: 24,
          duration: "40 minutes",
          mcqs: 16,
          tita: 8
        },
        {
          name: "Data Interpretation and Logical Reasoning (DILR)",
          questions: 20,
          duration: "40 minutes",
          mcqs: 16,
          tita: 4,
          sets: "5 sets of 4 questions each"
        },
        {
          name: "Quantitative Ability (QA)",
          questions: 22,
          duration: "40 minutes",
          mcqs: 16,
          tita: 6
        }
      ],
      totalQuestions: 66,
      totalDuration: "120 minutes (40 min per section)",
      totalMarks: 198,
      marksPerQuestion: "+3 for correct answer",
      negativeMarking: "-1 for wrong MCQ answer (No negative for TITA)",
      sectionalTimeLimit: "Yes - cannot switch between sections"
    },

    cutoff: {
      lastFiveYears: [
        {
          year: "2023",
          overall: 74.0,
          varc: 65.0,
          dilr: 68.0,
          qa: 70.0,
          top99Percentile: 155
        },
        {
          year: "2022",
          overall: 82.0,
          varc: 72.0,
          dilr: 75.0,
          qa: 76.0,
          top99Percentile: 163
        },
        {
          year: "2021",
          overall: 72.0,
          varc: 63.0,
          dilr: 66.0,
          qa: 68.0,
          top99Percentile: 152
        },
        {
          year: "2020",
          overall: 90.0,
          varc: 80.0,
          dilr: 85.0,
          qa: 82.0,
          top99Percentile: 178
        },
        {
          year: "2019",
          overall: 95.0,
          varc: 85.0,
          dilr: 88.0,
          qa: 87.0,
          top99Percentile: 185
        }
      ],
      iimCallRequirement: {
        "IIM A/B/C": "98-99.5+ percentile",
        "New IIMs": "90-95+ percentile",
        "Other top B-schools": "85-95+ percentile"
      },
      sectionalCutoffs: "Candidates must meet both overall and sectional cutoffs",
      trend: "Varies significantly based on difficulty level each year"
    },

    syllabus: {
      "VARC (Verbal Ability & Reading Comprehension)": {
        topics: [
          "Reading Comprehension (RC) Passages",
          "Para Jumbles",
          "Para Summary",
          "Odd One Out",
          "Sentence Correction",
          "Fill in the Blanks",
          "Para Completion",
          "Analogies",
          "Critical Reasoning"
        ],
        focusArea: "RC dominates with 70-75% weightage"
      },
      "DILR (Data Interpretation & Logical Reasoning)": {
        topics: [
          "Tables & Charts",
          "Caselets",
          "Bar Graphs",
          "Line Graphs",
          "Pie Charts",
          "Venn Diagrams",
          "Seating Arrangement",
          "Puzzles",
          "Games & Tournaments",
          "Networks",
          "Blood Relations",
          "Clocks & Calendars"
        ],
        focusArea: "Set-based questions, solve 3-4 sets accurately"
      },
      "QA (Quantitative Ability)": {
        topics: [
          "Number System",
          "Arithmetic (Time & Work, Percentages, Ratio, etc.)",
          "Algebra (Equations, Inequalities, Functions)",
          "Geometry (Triangles, Circles, Polygons)",
          "Modern Math (P&C, Probability)",
          "Mensuration",
          "Logarithms",
          "Surds & Indices",
          "Trigonometry"
        ],
        focusArea: "Arithmetic and Geometry have high weightage"
      }
    },

    weightage: {
      sectionWise: [
        { section: "VARC", weightage: 33.33, difficulty: "Medium-High" },
        { section: "DILR", weightage: 33.33, difficulty: "High" },
        { section: "QA", weightage: 33.33, difficulty: "Medium-High" }
      ],
      highWeightageTopics: [
        {
          topic: "Reading Comprehension",
          section: "VARC",
          expectedQuestions: "18-20",
          importance: "Very High",
          tip: "Practice diverse passages daily"
        },
        {
          topic: "Logical Reasoning Sets",
          section: "DILR",
          expectedQuestions: "10-12",
          importance: "Very High",
          tip: "Focus on selection strategy, solve doable sets first"
        },
        {
          topic: "Arithmetic",
          section: "QA",
          expectedQuestions: "8-10",
          importance: "Very High",
          tip: "Master fundamentals and speed calculation"
        },
        {
          topic: "Geometry",
          section: "QA",
          expectedQuestions: "6-8",
          importance: "High",
          tip: "Learn properties and theorems"
        },
        {
          topic: "Data Interpretation",
          section: "DILR",
          expectedQuestions: "8-10",
          importance: "High",
          tip: "Practice calculation speed"
        }
      ]
    },

    difficulty: {
      overallDifficulty: "High to Very High",
      sectionWiseDifficulty: {
        VARC: "Medium-High (RC passages are lengthy and tricky)",
        DILR: "Very High (Most unpredictable section)",
        QA: "Medium-High (Requires conceptual clarity)"
      },
      difficultyTrend: "Fluctuates significantly year to year",
      strategicApproach: "Attempt selection is more important than solving all questions",
      accuracyRequirement: "Very High - Quality over quantity"
    },

    preparation: {
      recommendedStudyDuration: "12-18 months for thorough preparation, 6-9 months intensive",
      dailyStudyHours: "5-7 hours",
      importantBooks: [
        { section: "VARC", book: "How to Prepare for Verbal Ability and Reading Comprehension for CAT by Arun Sharma" },
        { section: "VARC", book: "Word Power Made Easy by Norman Lewis" },
        { section: "DILR", book: "Logical Reasoning and Data Interpretation for CAT by Nishit Sinha" },
        { section: "QA", book: "Quantitative Aptitude by Arun Sharma" },
        { section: "QA", book: "How to Prepare for Quantitative Aptitude for CAT by Arun Sharma" }
      ],
      onlinePlatforms: [
        "IMS Learning Resources",
        "TIME4Education",
        "Career Launcher",
        "Unacademy",
        "Byju's CAT Preparation"
      ],
      preparationStrategy: [
        "Start with basics and build strong fundamentals in all three sections",
        "Read extensively for VARC - newspapers, novels, editorials",
        "Practice DILR sets daily - learn to identify solvable vs unsolvable sets",
        "Master Arithmetic and Geometry for QA",
        "Develop a selection strategy - don't attempt all questions",
        "Focus on accuracy over attempts",
        "Take sectional tests first, then full-length mocks",
        "Analyze every mock test thoroughly",
        "Work on time management and mental stamina",
        "Revise formulas and shortcuts regularly",
        "Solve previous year papers multiple times",
        "Stay updated with current affairs for GD-PI rounds"
      ],
      mockTestsRecommended: "50-60 full-length mocks (especially from IMS, TIME, CL)",
      sectionalTestsRecommended: "100+ sectional tests",
      previousYearPapers: "Mandatory - Solve last 10 years papers multiple times",
      mentalPreparation: "Very important - manage exam day stress and anxiety"
    },

    participatingInstitutes: [
      "All 20 IIMs (Ahmedabad, Bangalore, Calcutta, Lucknow, Indore, Kozhikode, etc.)",
      "FMS Delhi",
      "MDI Gurgaon",
      "SPJIMR Mumbai",
      "IIFT Delhi",
      "IMT Ghaziabad",
      "NITIE Mumbai",
      "IMI New Delhi",
      "XIMB Bhubaneswar",
      "TAPMI Manipal",
      "100+ other top B-schools accept CAT scores"
    ],

    documentsRequired: [
      "Valid Photo ID proof (Aadhaar/PAN/Passport/Driving License/Voter ID)",
      "CAT Admit Card (mandatory)",
      "Recent passport size photographs",
      "10th and 12th mark sheets",
      "Graduation degree/provisional certificate",
      "Caste certificate (if applicable)",
      "PWD certificate (if applicable)",
      "Work experience certificates (for calls and interviews)"
    ],

    importantInstructions: [
      "Report to test center 60 minutes before exam time",
      "Carry admit card and valid original photo ID proof",
      "Mobile phones, calculators, watches, and electronic devices are prohibited",
      "Rough sheets will be provided at the exam center",
      "Biometric authentication is mandatory",
      "Sectional time limits are strictly enforced - cannot switch sections",
      "Read instructions carefully on computer screen",
      "Use on-screen calculator for calculations (provided)",
      "No breaks between sections",
      "Question paper and responses will be available post-exam for viewing"
    ],

    faq: [
      {
        question: "Can I switch between sections during CAT exam?",
        answer: "No, CAT has sectional time limits. You get 40 minutes per section and cannot switch between sections."
      },
      {
        question: "Is there negative marking in CAT?",
        answer: "Yes, there is -1 negative marking for wrong MCQ answers. However, TITA (Type in the Answer) questions have no negative marking."
      },
      {
        question: "How many times can I attempt CAT?",
        answer: "There is no limit on number of attempts. You can appear for CAT as many times as you want."
      },
      {
        question: "Do I need to clear sectional cutoffs along with overall cutoff?",
        answer: "Yes, you must meet both overall percentile and sectional percentile cutoffs to get calls from IIMs."
      },
      {
        question: "Which slot should I choose for CAT exam?",
        answer: "All slots are of similar difficulty. Choose based on your peak performance time. Most prefer morning slot for fresh mind."
      },
      {
        question: "Can I use calculator in CAT exam?",
        answer: "No physical calculator is allowed, but an on-screen calculator is provided during the exam."
      },
      {
        question: "What is a good score in CAT?",
        answer: "95+ percentile is considered good, 98+ for old IIMs, 99+ for top programs at IIM A/B/C."
      }
    ],

    additionalDetails: {
      examSlots: "Exam is conducted in 3 slots on the same day",
      normalization: "Scores are normalized across different slots to ensure fairness",
      scorecardValidity: "CAT score is valid for 1 year only",
      postExamProcess: "Scorecard → Shortlisting by B-schools → WAT/GD/PI → Final Selection",
      shortlistingCriteria: "Based on CAT percentile, academics, work experience, diversity",
      finalSelection: "Combination of CAT score (varies 25-50%), academics, WAT/GD/PI performance",
      retakePolicy: "You can retake CAT every year to improve your score"
    }
  }
};
