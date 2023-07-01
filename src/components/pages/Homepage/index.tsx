import { Card } from "../../atoms/Card"
import { Heading } from "../../atoms/typography/Heading"
import { Text } from "../../atoms/typography/Text"
import { Component } from "../../../shared/types"
import Link from "next/link"

interface HomepageProps extends Component {}

export function Homepage({ className, testId = "homepage" }: HomepageProps) {
  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      <Card className="flex flex-col space-y-4">
        <Heading>Quiz</Heading>
        <Text>You will have 1 minute to complete the quiz.</Text>
        <Text>Press start to begin.</Text>
        <div className="flex flex-grow" />
        <div className="pb-8">
          <Link
            className="px-4 py-2 text-xs font-medium text-white rounded-lg cursor-pointer bg-zinc-900 hover:bg-indigo-500 hover:text-white focus:ring-4"
            href="/quiz"
          >
            Start
          </Link>
        </div>
      </Card>
    </main>
  )
}
