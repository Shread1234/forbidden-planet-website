import DiscordInviteImage from "../assets/images/join-us-on-discord.png"

export default function DiscordInvite() {
  return (
    <div id="dicordInviteContainer">
      <img src={DiscordInviteImage} alt="Discord invite" id="discordInviteImage" />
      <iframe
        title="Discord Link"
        src="https://discord.com/widget?id=720576899197435954&theme=dark"
        width="550"
        height="700"
        allowtransparency="false"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        id="discordInvite"
      ></iframe>
    </div>
  )
}
