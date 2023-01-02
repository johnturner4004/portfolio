import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function NavBar() {
  const [showMobile, setShowMobile] = useState(false);

  const goTo = (path) => {
    window.location.href = path
  }

  const handleClick = () => {
    setShowMobile(!showMobile);
  }

  return (
    <div className="nav-bar">
      <div className='nav-bar__mobile'>
        <MenuIcon onClick={handleClick} />
      </div>
      <div className={showMobile ? 'nav-bar__menu' : 'nav-bar__menu hidden-mobile'}>
        <button className='nav-bar__name' onClick={() => goTo('/')}><h1>John Turner</h1></button>
        <button className="nav-bar__button" onClick={() => goTo('/work-history')}>Work History</button>
        <button className="nav-bar__button" onClick={() => goTo('/education')}>Education</button>
      </div>
    </div>
  )
}