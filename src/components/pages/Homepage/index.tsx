import { Card } from "../../atoms/Card"
import { Heading } from "../../atoms/typography/Heading"
import { Text } from "../../atoms/typography/Text"
import { Component } from "../../../shared/types"
import Link from "next/link"

interface HomepageProps extends Component {}

export function Homepage({ className = "", testId = "homepage" }: HomepageProps) {
  return (
    <main className={`grid place-items-center h-screen ${className}`} data-testid={testId}>
      <Card className="flex flex-col space-y-4">
        <Heading>Quiz</Heading>
        <Text className="text-3xl">
          You will have 1 minute to complete the quiz on Captial Cities. It is very difficult, good
          luck!
        </Text>
        <div className="flex flex-grow" />
        <Text className="pb-8 text-xl">Press start to begin.</Text>
        <div className="pb-8">
          <Link
            className="w-40 px-6 py-4 text-xl font-medium text-white rounded-lg cursor-pointer bg-zinc-900 hover:bg-indigo-500 hover:text-white focus:ring-4"
            href="/quiz"
            data-testid="start-quiz"
          >
            Start
          </Link>
        </div>
      </Card>
    </main>
  )
}
