import Name from "../components/Name"
import NameCard from "../components/NameCard"
import NavBar from "../components/NavBar"
import Skill from "../components/Skill"

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <div classname='home__column'>
        <Name />
        <NameCard />
      </div>
      <Skill />
    </div>
  )
}