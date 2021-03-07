import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
  },
  active: {
    fontWeight: "bold",
    color: "#ff0000",
  },
})

const SetStyle = (currentTab, selectedTab) => {
  const classes = useStyles()
  return currentTab === selectedTab ? classes.active : classes.root
}

export default function NavBar({ handleTabChange, currentTab }) {
  return (
    <AppBar id="NavBar" position="static">
      <Tabs variant="fullWidth" onClick={handleTabChange}>
        <Tab
          label="Shop"
          className={SetStyle(currentTab, "SHOP")}
          href="https://forbidden-planet-pvp-cluster.tebex.io/category/points-per-hour-increase"
        />
        <Tab label="Servers" className={SetStyle(currentTab, "SERVERS")} />
        <Tab label="Rules" className={SetStyle(currentTab, "RULES")} />
        <Tab label="Discord" className={SetStyle(currentTab, "DISCORD")} />
      </Tabs>
    </AppBar>
  )
}
