// noinspection JSUnusedGlobalSymbols

import { type MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "Libor Gabrhel | Front-End Developer & Beekeeper" },
    {
      name: "description",
      content:
        "The official website of Libor Gabrhel. As a passionate front-end developer and dedicated beekeeper, I blend technology and nature in unique ways. Explore my professional projects, discover my beekeeping adventures, and connect with me for collaborations and insights. Join me on a journey where coding meets the natural world.",
    },
  ]
}

export default function Index() {
  return (
    <main>
      <h1>Libor Gabrhel</h1>
      <p>Front-End Developer & Beekeeper</p>
      <Link to={"/front-end-developer"}>Front-End Developer</Link>
      <br />
      <Link to={"/beekeeper"}>Beekeeper</Link>
    </main>
  )
}
