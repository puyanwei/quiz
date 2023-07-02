"use client"

import { useState } from "react"
import { Card } from "../../atoms/Card"
import { Heading } from "../..//atoms/typography/Heading"
import { Text } from "../..//atoms/typography/Text"
import { Component } from "../../../shared/types"
import { isEmptyObject } from "../../../shared/helpers"
import { Button } from "../../atoms/Button"
import { data } from "../../../data/questions"

interface QuizPageProps extends Component {}

export function QuizPage({ className, testId = "quiz-page" }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1)

  if (isEmptyObject(data)) throw new Error("Data object is empty")

  function handleOnClick() {
    setCurrentQuestion(currentQuestion + 1)
  }

  const { question, answers } = data[currentQuestion - 1]

  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      <Card className="flex flex-col space-y-4">
        <Heading>Question {currentQuestion}</Heading>
        <Text>{question}</Text>
        <div className="flex flex-grow" />
        {answers.map(({ phrasing }) => (
          <Text>{phrasing}</Text>
        ))}
        <Button onClick={handleOnClick}>Submit</Button>
        <div className="pb-8"></div>
      </Card>
    </main>
  )
}
