import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz",
  description: "A quiz to test your knowledge",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-screen bg-black">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
