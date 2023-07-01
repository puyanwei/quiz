import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface CardProps extends Component {
  children: ReactNode
}

export function Card({ className, children, testId = "card" }: CardProps) {
  return (
    <div
      className={`rounded-lg p-8 bg-blue-400 text-white text-center min-h-[500px] ${className}`}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
