import { AppBar, Tabs, Tab } from "@material-ui/core"

export default function NavBar() {
  return (
    <AppBar position="static" id="NavBar">
      <Tabs variant="fullWidth">
        <Tab label="Shop" />
        <Tab label="Server Details" />
        <Tab label="Cluster Rules" />
        <Tab label="Discord Link" />
      </Tabs>
    </AppBar>
  )
}
