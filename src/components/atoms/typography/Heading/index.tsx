import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface HeadingProps extends Component {
  children: ReactNode
}

export function Heading({ className, children, testId = "heading" }: HeadingProps) {
  return (
    <h1 className={`text-7xl ${className}`} data-testid={testId}>
      {children}
    </h1>
  )
}
