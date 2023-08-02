import { Card } from "@/components/atoms/Card"
import { Text } from "@/components/atoms/typography/Text"
import { Answer, Component, Quiz, UserAnswers } from "@/shared/types"

interface ResultsCardProps extends Component {
  userAnswers: UserAnswers
  data: Quiz[]
}

export function ResultsCard({ className, testId, userAnswers, data }: ResultsCardProps) {
  if (!Array.isArray(userAnswers)) throw Error("Answer array is an invalid type")

  function checkAnswer(dataAnswers: readonly Answer[], userAnswer: string): ["✔️" | "❌", string] {
    const correctAnswer = dataAnswers.find((answer) => answer.isCorrect)?.phrasing || ""
    return [userAnswer === correctAnswer ? "✔️" : "❌", correctAnswer]
  }

  return (
    <Card className={className} testId={testId}>
      <Text className="text-4xl">Your Results</Text>

      <div className="flex flex-col gap-2 text-left p-8">
        {userAnswers.length ? (
          userAnswers.map((userAnswer, index) => {
            const { answers, question } = data[index]
            const [result, correctAnswer] = checkAnswer(answers, userAnswer)
            const resolvedResult = result === "❌" ? `❌ (${correctAnswer})` : "✔️"
            return (
              <div key={`${index} - ${userAnswer}`}>
                <div className="font-bold">{`${index + 1}. ${question}`}</div>
                <div className="pb-2"> {`${userAnswer} ${resolvedResult} `}</div>
              </div>
            )
          })
        ) : (
          <div>No results available as you did not answer any questions</div>
        )}
      </div>
    </Card>
  )
}
