"use client"

import { useState } from "react"
import { Card } from "../../atoms/Card"
import { Heading } from "../..//atoms/typography/Heading"
import { Text } from "../..//atoms/typography/Text"
import { Component } from "../../../shared/types"
import { isEmptyObject } from "../../../shared/helpers"
import { Button } from "../../atoms/Button"
import { data } from "../../../data/questions"
import { CountdownTimer } from "../../atoms/CountdownTimer"
import { EndGameCard } from "../../molecules/EndGameCard"

interface QuizPageProps extends Component {}

export function QuizPage({ className, testId = "quiz-page" }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [score, setScore] = useState(0)

  if (isEmptyObject(data)) throw new Error("Data object is empty")

  function handleClick(isCorrect: boolean) {
    if (isCorrect) setScore(score + 1)
    setCurrentQuestion(currentQuestion + 1)
  }

  if (currentQuestion > data.length)
    return <EndGameCard score={score} totalQuestions={data.length} />

  const { question, answers } = data[currentQuestion - 1]

  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      <Card className="flex flex-col space-y-4">
        <Heading>Question {currentQuestion}</Heading>
        <Text>{question}</Text>
        <div className="flex flex-grow" />
        {answers.map(({ phrasing, isCorrect }) => (
          <Button onClick={() => handleClick(isCorrect)}>{phrasing}</Button>
        ))}
        <div className="pb-8"></div>
      </Card>
      <CountdownTimer duration={60} onTimerEnd={() => setCurrentQuestion(data.length + 1)} />
    </main>
  )
}
