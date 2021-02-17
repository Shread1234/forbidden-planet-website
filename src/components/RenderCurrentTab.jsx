import RulesTab from "./RulesTab"
import DiscordInvite from "./DiscordInvite"
import ServerCards from "./ServerCards"

const switchOnTab = (selectedTab) => {
  switch (selectedTab) {
    case "RULES":
      return <RulesTab />
    case "SHOP":
      return <div id="Rules">This is a shop</div>
    case "SERVERS":
      return (
        <div id="Rules">
          <ServerCards />
        </div>
      )
    case "DISCORD":
      return <DiscordInvite />
    default:
      return <div id="Rules">This is a 404</div>
  }
}

export default function RenderCurrentTab({ currentTab }) {
  return switchOnTab(currentTab)
}
