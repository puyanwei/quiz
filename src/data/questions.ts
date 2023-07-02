import { Quiz } from "@/shared/types"

export const data = [
  {
    question: "What is the capital of UK",
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
    question: "What is the capital of France",
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
    question: "What is the capital of Spain",
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
    question: "What is the capital of Germany",
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
    question: "What is the capital of Japan",
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
    question: "What is the capital of USA",
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
