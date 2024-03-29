import Extinction from "../assets/images/extinction.webp"
import Abberation from "../assets/images/abberation.webp"
import Genesis from "../assets/images/genesis.webp"
import Ragnarok from "../assets/images/ragnarok.webp"
import TheCenter from "../assets/images/the-center.webp"
import TheIsland from "../assets/images/the-island.webp"
import CrystalIsles from "../assets/images/crystal-isles.webp"
import ScorchedEarth from "../assets/images/scorched-earth.webp"

export default function ServerCards() {
  return (
    <div id="ServerCards">
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29500">
          <img className="serverLogo" src={TheCenter} alt="The Center logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/255099/banners/banner-1.png"
            alt="Center Banner"
            border="0"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/255099/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29400">
          <img className="serverLogo" src={Extinction} alt="Extinction logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/249768/banners/banner-2.png"
            alt="Extinction Banner"
            border="0"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/249768/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29700">
          <img className="serverLogo" src={TheIsland} alt="The Island logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/259999/banners/banner-3.png"
            alt="Island Banner"
            border="0"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/259999/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29200">
          <img className="serverLogo" src={Ragnarok} alt="Ragnarok logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/248505/banners/banner-2.png"
            alt="Ragnarok Banner"
            border="0"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/248505/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29100">
          <img className="serverLogo" src={Genesis} alt="Genesis logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/248508/banners/banner-2.png"
            alt="Genesis Banner"
            border="0"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/248508/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29000">
          <img className="serverLogo" src={Abberation} alt="Abberation logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/248506/banners/banner-2.png"
            border="0"
            alt="Abberation Banner"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/248506/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29600">
          <img className="serverLogo" src={CrystalIsles} alt="Crystal Isles logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/254249/banners/banner-2.png"
            border="0"
            alt="Crystal Isles Banner"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/254249/vote/">
          VOTE
        </a>
      </div>
      <div className="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29300">
          <img className="serverLogo" src={ScorchedEarth} alt="Scorched Earth logo" />
          <img
            className="serverBanner"
            src="https://ark-servers.net/server/248507/banners/banner-2.png"
            border="0"
            alt="Scorched Earth Banner"
          />
        </a>
        <a className="serverVote" href="https://ark-servers.net/server/248507/vote/">
          VOTE
        </a>
      </div>
    </div>
  )
}
