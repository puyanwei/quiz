"use client"

import { useState } from "react"
import { Component, UserAnswers } from "@/shared/types"
import { isEmptyObject } from "@/shared/helpers"
import { data } from "@/data/hard-questions"
import { CountdownTimer } from "@/components/atoms/CountdownTimer"
import { EndGameCard } from "@/components/molecules/EndGameCard"
import { QuestionCard } from "@/components/molecules/QuestionCard"
import { ResultsCard } from "@/components/molecules/ResultsCard"

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

  console.log({ answers })
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
        <div className="flex gap-4">
          <EndGameCard score={score} totalQuestions={data.length} isTimeUp={isTimeUp} />
          <ResultsCard data={data} answers={answers} />
        </div>
      )}
    </main>
  )
}
