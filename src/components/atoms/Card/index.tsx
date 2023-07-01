import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface CardProps extends Component {
  children: ReactNode
}

export function Card({ className, children, testId = "card" }: CardProps) {
  return (
    <div
      className={`rounded-lg py-8 px-6 bg-blue-400 text-white  ${className}`}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
