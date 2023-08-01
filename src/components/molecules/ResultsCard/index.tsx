import { Card } from "@/components/atoms/Card"
import { Component } from "@/shared/types"

interface ResultsCardProps extends Component {}

export function ResultsCard({ className, testId }: ResultsCardProps) {
  return (
    <Card className={className} testId={testId}>
      I am the result
    </Card>
  )
}
