import { lazy, Suspense, useState, useEffect } from "react"
import "./App.css"
import LoadingLogo from "./components/LoadingLogo"
import NavBar from "./components/NavBar"
import axios from "axios"

const BackgroundVideo = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("./components/BackgroundVideo"),
  )
})

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(getPlayers())
  }, [])

  const getPlayers = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.battlemetrics.com/servers/ark/9717595",
    )
    console.log(data)
    return data
  }

  return (
    <>
      <Suspense fallback={<LoadingLogo />}>
        <BackgroundVideo />
        <NavBar />
        {data && <div>hi</div>}
      </Suspense>
    </>
  )
}
