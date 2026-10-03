import { useState, useEffect, useRef } from 'react';
import { generateQuestion } from '../utils/quickQuestion';
import './QuickQuestion.css';

function QuickQuestion() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    const newQuestion = generateQuestion();
    setQuestion(newQuestion);
    setUserAnswer('');
    setResult(null);
    setTimeTaken(null);
    setStartTime(Date.now());
    
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleCheck = () => {
    if (!userAnswer.trim() || result !== null) return;

    const endTime = Date.now();
    const timeInSeconds = ((endTime - startTime) / 1000).toFixed(1);
    setTimeTaken(timeInSeconds);

    const userNum = parseInt(userAnswer, 10);
    const isCorrect = userNum === question.answer;

    setResult({
      correct: isCorrect,
      correctAnswer: question.answer
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (result === null) {
        handleCheck();
      } else {
        loadNewQuestion();
      }
    }
  };

  if (!question) return null;

  return (
    <div className="quick-question card">
      <h3 className="quick-question-title">Try one now</h3>
      
      <div className="question-text">{question.text}</div>

      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        className="question-input"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={result !== null}
        placeholder="Your answer"
      />

      {result === null ? (
        <button 
          className="check-btn" 
          onClick={handleCheck}
          disabled={!userAnswer.trim()}
        >
          Check
        </button>
      ) : (
        <>
          <div className={`result-message ${result.correct ? 'correct' : 'wrong'}`}>
            {result.correct ? (
              <>
                Correct
                <span className="result-time">Time: {timeTaken}s</span>
              </>
            ) : (
              <>
                Wrong, answer is {result.correctAnswer}
                <span className="result-time">Time: {timeTaken}s</span>
              </>
            )}
          </div>
          
          <button className="next-btn" onClick={loadNewQuestion}>
            Next question
          </button>
        </>
      )}
    </div>
  );
}

export default QuickQuestion;
