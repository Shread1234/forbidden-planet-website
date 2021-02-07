import { lazy, Suspense } from "react"
import "./App.css"
import LoadingLogo from "./components/LoadingLogo"
import NavBar from "./components/NavBar"

const BackgroundVideo = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./components/BackgroundVideo"),
  )
})

export default function App() {
  return (
    <>
      <Suspense fallback={<LoadingLogo />}>
        <BackgroundVideo />
        <NavBar />
      </Suspense>
    </>
  )
}
