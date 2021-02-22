import Extinction from "../assets/images/extinction.webp"
import Abberation from "../assets/images/abberation.webp"
import Genesis from "../assets/images/genesis.webp"
import Ragnarok from "../assets/images/ragnarok.webp"
import TheCenter from "../assets/images/the-center.webp"
import TheIsland from "../assets/images/the-island.webp"
import Valguero from "../assets/images/valguero.webp"

export default function ServerCards() {
  return (
    <div id="ServerCards">
      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29500">
          <img class="serverLogo" src={TheCenter} alt="The Center logo" />
          <img
            src="https://ark-servers.net/server/255099/banners/banner-2.png"
            alt="Center Banner"
            border="0"
          />
        </a>
      </div>
      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29300">
          <img class="serverLogo" src={Valguero} alt="Valguero logo" />
          <img
            src="https://ark-servers.net/server/248507/banners/banner-2.png"
            alt="Valguero Banner"
            border="0"
          />
        </a>
      </div>
      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29400">
          <img class="serverLogo" src={Extinction} alt="Extinction logo" />
          <img
            src="https://ark-servers.net/server/249768/banners/banner-2.png"
            alt="Extinction Banner"
            border="0"
          />
        </a>
      </div>
      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29700">
          <img class="serverLogo" src={TheIsland} alt="The Island logo" />
          <img
            src="https://ark-servers.net/server/259999/banners/banner-3.png"
            alt="Island Banner"
            border="0"
          />
        </a>
      </div>

      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29200">
          <img class="serverLogo" src={Ragnarok} alt="Ragnarok logo" />
          <img
            src="https://ark-servers.net/server/248505/banners/banner-2.png"
            alt="Ragnarok Banner"
            border="0"
          />
        </a>
      </div>
      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29100">
          <img class="serverLogo" src={Genesis} alt="Genesis logo" />
          <img
            src="https://ark-servers.net/server/248508/banners/banner-2.png"
            alt="Genesis Banner"
            border="0"
          />
        </a>
      </div>

      <div class="serverCard">
        <a href="steam://connect/forbiddenplanetpvp.ddns.net:29000">
          <img class="serverLogo" src={Abberation} alt="Abberation logo" />
          <img
            src="https://ark-servers.net/server/248506/banners/banner-2.png"
            border="0"
            alt="Abberation Banner"
          />
        </a>
      </div>
    </div>
  )
}
