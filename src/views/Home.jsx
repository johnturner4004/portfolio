import Name from "../components/Name"
import NavBar from "../components/NavBar"
import Skill from "../components/Skill"

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <Name />
      <Skill />
    </div>
  )
}