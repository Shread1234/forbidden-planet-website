import { Box } from "@material-ui/core"
import RulesTab from "./RulesTab"
import DiscordInvite from "./DiscordInvite"
import ServerCards from "./ServerCards"

const switchOnTab = (selectedTab) => {
  switch (selectedTab) {
    case "RULES":
      return <RulesTab />
    case "SHOP":
      return <div>This is a shop</div>
    case "SERVERS":
      return <ServerCards />
    default:
      return <div>This is a 404</div>
  }
}

export default function RenderCurrentTab({ currentTab }) {
  return currentTab === "DISCORD" ? (
    <DiscordInvite />
  ) : (
    <Box id="RenderCurrentTab">{switchOnTab(currentTab)}</Box>
  )
}
