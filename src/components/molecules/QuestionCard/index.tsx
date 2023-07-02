import { ReactNode } from "react"
import { Button } from "../../atoms/Button"
import { Card } from "../../atoms/Card"
import { Heading } from "../../atoms/typography/Heading"
import { Text } from "../../atoms/typography/Text"
import { Component, Quiz } from "../../../shared/types"

interface QuestionCardProps extends Component {
  data: Quiz
  currentQuestion: number
  handleClick: (isCorrect: boolean) => void
  children?: ReactNode
}

export function QuestionCard({
  className,
  testId = "question-card",
  data,
  currentQuestion,
  handleClick,
  children,
}: QuestionCardProps) {
  const { question, answers } = data

  return (
    <>
      <Card
        className={`flex flex-col space-y-4 ${className}`}
        testId={`${testId}-${currentQuestion}`}
      >
        <Heading>Question {currentQuestion}</Heading>
        <Text>{question}</Text>
        <div className="flex flex-grow" />
        {answers.map(({ phrasing, isCorrect }) => (
          <Button onClick={() => handleClick(isCorrect)}>{phrasing}</Button>
        ))}
        <div className="pb-8"></div>
      </Card>
      {children}
    </>
  )
}
