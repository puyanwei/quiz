import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface TextProps extends Component {
  children: ReactNode
}

export function Text({ className, children, testId = "text" }: TextProps) {
  return (
    <p className={className} data-testid={testId}>
      {children}
    </p>
  )
}
