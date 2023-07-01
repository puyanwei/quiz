"use client"

import { useState } from "react"
import initialData from "../../../public/questions.json"
import { isEmptyObject } from "@/shared/helpers"

export default function Quiz() {
  const [data, setData] = useState(initialData)
  if (isEmptyObject(data)) throw new Error("Data object is empty")
  return <div>Quiz Page</div>
}
