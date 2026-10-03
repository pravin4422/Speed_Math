import { createContext, useContext, useState, useEffect } from "react";

const ExamContext = createContext();

export function ExamProvider({ children }) {
  const [selectedExam, setSelectedExam] = useState(() => {
    const saved = localStorage.getItem("selectedExam");
    return saved || "ibps";
  });

  useEffect(() => {
    localStorage.setItem("selectedExam", selectedExam);
  }, [selectedExam]);

  return (
    <ExamContext.Provider value={{ selectedExam, setSelectedExam }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExam must be used within ExamProvider");
  }
  return context;
}
