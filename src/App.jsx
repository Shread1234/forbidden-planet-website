import { lazy, Suspense } from "react"
import "./App.css"
import LoadingLogo from "./components/LoadingLogo"
const HomePage = lazy(() => import("./components/HomePage"))

export default function App() {
  return (
    <>
      <Suspense fallback={LoadingLogo}>
        <HomePage />
      </Suspense>
    </>
  )
}
