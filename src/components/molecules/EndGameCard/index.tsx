import { Card } from "../../atoms/Card"
import { Heading } from "../../atoms/typography/Heading"
import { Text } from "../../atoms/typography/Text"
import { Component } from "../../../shared/types"

interface EndGameCardProps extends Component {
  score: number
  totalQuestions: number
}

export function EndGameCard({
  score,
  totalQuestions,
  className = "",
  testId = "end-game-card",
}: EndGameCardProps) {
  function playerEvaluation(score: number): string {
    if (score === 0) return "Oh dear... there are no words"
    if (score < 3) return "You did not pay attention in geography class!"
    if (score < 5) return "Pretty average"
    return "Geography God!"
  }

  return (
    <Card className={`flex flex-col space-y-4 ${className}`} testId={testId}>
      <Heading>Quiz Completed</Heading>
      <div className="flex flex-grow" />
      <Text className="pb-4 text-3xl">{`Your final score is ${score}/${totalQuestions}`}</Text>
      <Text className="pb-4 text-xl">{playerEvaluation(score)}</Text>
    </Card>
  )
}
