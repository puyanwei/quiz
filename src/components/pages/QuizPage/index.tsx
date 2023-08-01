"use client"

import { useState } from "react"
import { Component } from "../../../shared/types"
import { isEmptyObject } from "../../../shared/helpers"
import { data } from "../../../data/hard-questions"
import { CountdownTimer } from "../../atoms/CountdownTimer"
import { EndGameCard } from "../../molecules/EndGameCard"
import { QuestionCard } from "../../molecules/QuestionCard"

type UserAnswers = string[] | []
interface QuizPageProps extends Component {}

export function QuizPage({ className = "", testId = "quiz-page" }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0)
  const [isTimeUp, setIsTimeUp] = useState(false)
  const [answers, setAnswers] = useState<UserAnswers>([])

  if (isEmptyObject(data)) throw new Error("Data object is empty")

  function handleClick(isCorrect: boolean, answer: string) {
    setAnswers([...answers, answer])
    if (isCorrect) setScore(score + 1)
    setCurrentQuestion(currentQuestion + 1)
  }

  function handleTimerEnd() {
    setCurrentQuestion(data.length + 1)
    setIsTimeUp(true)
  }
  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      {currentQuestion < data.length + 1 ? (
        <QuestionCard
          data={data[currentQuestion - 1]}
          currentQuestion={currentQuestion}
          handleClick={handleClick}
        >
          <CountdownTimer duration={60} onTimerEnd={() => handleTimerEnd()} />
        </QuestionCard>
      ) : (
        <EndGameCard score={score} totalQuestions={data.length} isTimeUp={isTimeUp} />
      )}
    </main>
  )
}
