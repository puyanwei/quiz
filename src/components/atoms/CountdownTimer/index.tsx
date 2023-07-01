import { Component } from "@/shared/types"
import { useState, useEffect } from "react"

interface CountdownTimerProps extends Component {
  duration: number
  onTimerEnd: () => void
}

export function CountdownTimer({ className, testId, duration, onTimerEnd }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 1) return prevTime - 1
        clearInterval(interval)
        onTimerEnd()
        return 0
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [duration, onTimerEnd])

  function formatTime(time: number): string {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const formattedMinutes = String(minutes).padStart(2, "0")
    const formattedSeconds = String(seconds).padStart(2, "0")
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className={`text-5xl ${className}`} data-testid={testId}>
      {formatTime(timeRemaining)}
    </div>
  )
}
