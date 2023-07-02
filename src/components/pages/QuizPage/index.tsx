"use client"

import { useState } from "react"
import { Component } from "../../../shared/types"
import { isEmptyObject } from "../../../shared/helpers"
import { data } from "../../../data/questions"
import { CountdownTimer } from "../../atoms/CountdownTimer"
import { EndGameCard } from "../../molecules/EndGameCard"
import { QuestionCard } from "../../molecules/QuestionCard"

interface QuizPageProps extends Component {}

export function QuizPage({ className = "", testId = "quiz-page" }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0)

  if (isEmptyObject(data)) throw new Error("Data object is empty")

  function handleClick(isCorrect: boolean) {
    if (isCorrect) setScore(score + 1)
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      {currentQuestion < data.length + 1 ? (
        <QuestionCard
          data={data[currentQuestion - 1]}
          currentQuestion={currentQuestion}
          handleClick={handleClick}
        >
          <CountdownTimer duration={60} onTimerEnd={() => setCurrentQuestion(data.length + 1)} />
        </QuestionCard>
      ) : (
        <EndGameCard score={score} totalQuestions={data.length} />
      )}
    </main>
  )
}
