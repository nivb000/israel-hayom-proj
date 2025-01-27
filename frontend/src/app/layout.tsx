import type { Metadata } from "next"
import "../assets/styles/main.scss"


export const metadata: Metadata = {
  title: "Israel Hayom",
  description: "Israel hayom coding task show writers",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return <html lang="en">
    <body>
      <main className="main-layout">
        {children}
      </main>
    </body>
  </html>
}
