import { lazy, Suspense, useState } from "react"
import "./App.css"
import LoadingLogo from "./components/LoadingLogo"
import NavBar from "./components/NavBar"
import RenderCurrentTab from "./components/RenderCurrentTab"

const BackgroundVideo = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./components/BackgroundVideo"),
  )
})

export default function App() {
  const [currentTab, setCurrentTab] = useState("SERVERS")

  const handleTabChange = (e) => {
    setCurrentTab(e.target.innerText)
  }
  return (
    <>
      <Suspense fallback={<LoadingLogo />}>
        <BackgroundVideo />
        <NavBar handleTabChange={handleTabChange} currentTab={currentTab} />
        <RenderCurrentTab id="currentTab" currentTab={currentTab} />
      </Suspense>
    </>
  )
}
