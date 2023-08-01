import { Card } from "../../atoms/Card"
import { Heading } from "../../atoms/typography/Heading"
import { Text } from "../../atoms/typography/Text"
import { Component } from "../../../shared/types"

interface EndGameCardProps extends Component {
  score: number
  totalQuestions: number
  isTimeUp: boolean
}

export function EndGameCard({
  score,
  totalQuestions,
  isTimeUp,
  className = "",
  testId = "end-game-card",
}: EndGameCardProps) {
  function playerEvaluation(score: number): string {
    if (score === 0) return "Oh dear... there are no words"
    if (score < 4) return "You did not pay attention in geography class!"
    if (score < 7) return "Pretty average"
    if (score < 9) return "Impressive knowledge!"
    return "Geography God!"
  }

  return (
    <Card className={`flex flex-col space-y-4 ${className}`} testId={testId}>
      <Heading>Quiz Completed</Heading>
      {isTimeUp && <Text className="text-xl">You have run out of time!</Text>}
      <Text className="pb-4 text-3xl">{`Your final score is ${score}/${totalQuestions}`}</Text>
      <Text className="pb-4 text-xl">{playerEvaluation(score)}</Text>
    </Card>
  )
}
