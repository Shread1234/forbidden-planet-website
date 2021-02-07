import pvpVideo from "../assets/videos/pvpBackground.mp4"

export default function backgroundVideo() {
  return (
    <video autoPlay muted loop id="pvpVideo">
      <source src={pvpVideo} type="video/mp4" />
      Sorry, your browser does not support HTML5 video.
    </video>
  )
}
