import RulesTab from "./RulesTab"
import DiscordInvite from "./DiscordInvite"
import ServerCards from "./ServerCards"

const switchOnTab = (selectedTab) => {
  switch (selectedTab) {
    case "RULES":
      return <RulesTab />
    case "SHOP":
      return
    case "SERVERS":
      return <ServerCards />
    case "DISCORD":
      return <DiscordInvite />
    default:
      return <div id="Rules">404: Page Not Found</div>
  }
}

export default function RenderCurrentTab({ currentTab }) {
  return switchOnTab(currentTab)
}
