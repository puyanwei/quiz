export type Component = {
  className?: string
  testId?: string
  styles?: string
}

export type Answers = {
  phrasing: string
  isCorrect: boolean
}

export type Quiz = {
  question: string
  answers: readonly Answers[]
}
