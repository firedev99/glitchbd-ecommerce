import MainLayout from "@/components/layouts/MainLayout"
import Seo from "@/components/seo"
import { Wrapper } from "@/styles/UsableStyle"
import { useEffect, useState } from "react"

LoginPage.Layout = MainLayout

export default function LoginPage() {
  const [data, setData] = useState<string>("")
  console.log(data)

  useEffect(() => {
    getRes()
  }, [])

  async function getRes() {
    const res = await fetch("/api/test")
    const _data = (await res.json()) as { message: string }
    setData(_data.message)
  }

  return (
    <>
      <Seo title="Login" url="https://glitchbd.com/login" />
      <Wrapper>
        <h1>@firedev99 - Login</h1>
      </Wrapper>
    </>
  )
}
