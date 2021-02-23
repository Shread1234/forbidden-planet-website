import RulesTab from "./RulesTab"
import DiscordInvite from "./DiscordInvite"
import ServerCards from "./ServerCards"
import Shop from "./Shop"

const switchOnTab = (selectedTab) => {
  switch (selectedTab) {
    case "RULES":
      return <RulesTab />
    case "SHOP":
      return <Shop />
    case "SERVERS":
      return <ServerCards />
    case "DISCORD":
      return <DiscordInvite />
    default:
      return <div id="Rules">This is a 404</div>
  }
}

export default function RenderCurrentTab({ currentTab }) {
  return switchOnTab(currentTab)
}
