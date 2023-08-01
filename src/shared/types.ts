export type Component = {
  className?: string
  testId?: string
  styles?: string
}

export type Answer = {
  phrasing: string
  isCorrect: boolean
}

export type Quiz = {
  question: string
  answers: readonly Answer[]
}

export type UserAnswers = string[] | []
