import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface ButtonProps extends Component {
  children: ReactNode
}

export function Button({ className, children, testId = "button" }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-xs font-medium text-white rounded-lg cursor-pointer bg-zinc-900 hover:bg-indigo-500 hover:text-white focus:ring-4 ${className}`}
      data-testid={testId}
    >
      {children}
    </button>
  )
}
