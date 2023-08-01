import { Card } from "@/components/atoms/Card"
import { Text } from "@/components/atoms/typography/Text"
import { Component, UserAnswers } from "@/shared/types"

interface ResultsCardProps extends Component {
  answers: UserAnswers
}

export function ResultsCard({ className, testId, answers }: ResultsCardProps) {
  if (!Array.isArray(answers)) throw Error("Answer array is an invalid type")
  return (
    <Card className={className} testId={testId}>
      <Text className="text-4xl pb-4">Your Results</Text>

      <div className="flex flex-col gap-2 text-left p-8">
        {answers.length ? (
          answers.map((answer, index) => (
            <div key={`${index} - ${answer}}`}>{`Question ${index + 1} - ${answer}`}</div>
          ))
        ) : (
          <div>No results available as you did not answer any questions</div>
        )}
      </div>
    </Card>
  )
}
