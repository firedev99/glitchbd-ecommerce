import { Poppins } from "@next/font/google"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const poppins = Poppins({
  weight: ["400", "500", "600", "800", "900"],
  subsets: ["latin"],
})

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <main className={poppins.className}>{children}</main>
    </div>
  )
}
