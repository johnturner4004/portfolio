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
        <a onClick={() => goTo('/')}><span className='nav-bar__name'>John Turner</span></a>
        <a onClick={() => goTo('/work-history')}><span className="nav-bar__button">Work History</span></a>
        <a onClick={() => goTo('/education')}><span className="nav-bar__button">Education</span></a>
        <a onClick={() => goTo('/about')}><span className="nav-bar__button">About</span></a>
      </div>
    </div>
  )
}