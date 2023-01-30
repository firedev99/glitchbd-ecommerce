import MainLayout from "@/components/layouts/MainLayout"
import Seo from "@/components/seo"
import { Wrapper } from "@/styles/UsableStyle"

HomePage.Layout = MainLayout

export default function HomePage() {
  return (
    <>
      <Seo title="Home" />
      <Wrapper>
        <h1>@firedev99 - Home</h1>
      </Wrapper>
    </>
  )
}
