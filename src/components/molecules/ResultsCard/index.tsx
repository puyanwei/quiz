import { Card } from "@/components/atoms/Card"
import { Text } from "@/components/atoms/typography/Text"
import { Answer, Component, Quiz, UserAnswers } from "@/shared/types"

interface ResultsCardProps extends Component {
  answers: UserAnswers
  data: Quiz[]
}

export function ResultsCard({ className, testId, answers, data }: ResultsCardProps) {
  if (!Array.isArray(answers)) throw Error("Answer array is an invalid type")

  function checkAnswer(answers: readonly Answer[], userAnswer: string): ["✔️" | "❌", string] {
    const correctAnswer = answers.find((city) => city.isCorrect)?.phrasing || ""
    return [userAnswer === correctAnswer ? "✔️" : "❌", correctAnswer]
  }

  return (
    <Card className={className} testId={testId}>
      <Text className="text-4xl">Your Results</Text>

      <div className="flex flex-col gap-2 text-left p-8">
        {answers.length ? (
          answers.map((answer, index) => {
            const [result, correctAnswer] = checkAnswer(data[index].answers, answer)
            const resolvedResult = result === "❌" ? `❌ (${correctAnswer})` : "✔️"
            return (
              <div key={`${index} - ${answer}`}>
                <div className="font-bold">{`${index + 1}. ${data[index].question}`}</div>
                <div className="pb-2"> {`${answer} ${resolvedResult} `}</div>
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
