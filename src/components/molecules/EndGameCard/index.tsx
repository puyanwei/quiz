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
  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      <Card className="flex flex-col space-y-4">
        <Heading>Quiz Completed</Heading>
        <Text>{`Your final score is ${score}/${totalQuestions}`}</Text>
      </Card>
    </main>
  )
}
