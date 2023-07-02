import { Quiz } from "@/shared/types"

export const data = [
  {
    question: "What's the capital of the UK",
    answers: [
      {
        phrasing: "London",
        isCorrect: true,
      },
      {
        phrasing: "Paris",
        isCorrect: false,
      },
      {
        phrasing: "Berlin",
        isCorrect: false,
      },
      {
        phrasing: "Madrid",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What's the capital of the France",
    answers: [
      {
        phrasing: "London",
        isCorrect: false,
      },
      {
        phrasing: "Paris",
        isCorrect: true,
      },
      {
        phrasing: "Berlin",
        isCorrect: false,
      },
      {
        phrasing: "Madrid",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What's the capital of the Spain",
    answers: [
      {
        phrasing: "London",
        isCorrect: false,
      },
      {
        phrasing: "Paris",
        isCorrect: false,
      },
      {
        phrasing: "Berlin",
        isCorrect: false,
      },
      {
        phrasing: "Madrid",
        isCorrect: true,
      },
    ],
  },
  {
    question: "What's the capital of Germany",
    answers: [
      {
        phrasing: "London",
        isCorrect: false,
      },
      {
        phrasing: "Paris",
        isCorrect: false,
      },
      {
        phrasing: "Berlin",
        isCorrect: true,
      },
      {
        phrasing: "Madrid",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What's the capital of Japan",
    answers: [
      {
        phrasing: "London",
        isCorrect: false,
      },
      {
        phrasing: "Paris",
        isCorrect: false,
      },
      {
        phrasing: "Tokyo",
        isCorrect: true,
      },
      {
        phrasing: "Madrid",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What's the capital of the USA",
    answers: [
      {
        phrasing: "London",
        isCorrect: false,
      },
      {
        phrasing: "Paris",
        isCorrect: false,
      },
      {
        phrasing: "New york",
        isCorrect: false,
      },
      {
        phrasing: "Washington DC",
        isCorrect: true,
      },
    ],
  },
] as const satisfies readonly Quiz[]
