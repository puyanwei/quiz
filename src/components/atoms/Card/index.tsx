import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface CardProps extends Component {
  children: ReactNode
}

export function Card({ className, children, testId = "card" }: CardProps) {
  return (
    <div
      className={`rounded-lg p-8 bg-zinc-800 text-white text-center min-h-[500px] max-w-md ${className}`}
      data-testid={testId}
    >
      {children}
    </div>
  )
}
