import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function NavBar() {
  const [showMobile, setShowMobile] = useState(false);

  const handleClick = () => {
    setShowMobile(!showMobile);
  }

  return (
    <div className="nav-bar">
      <div className='nav-bar__mobile'>
        <MenuIcon onClick={handleClick} />
      </div>
      <div className={showMobile ? 'nav-bar__menu' : 'nav-bar__menu hidden-mobile'}>
        <a href='/'><span className='nav-bar__name'>John Turner</span></a>
        <a href='/work-history'><span className="nav-bar__button">Work History</span></a>
        <a href='/education'><span className="nav-bar__button">Education</span></a>
        <a href='/sample'><span className="nav-bar__button">Samples</span></a>
        <a href='/about'><span className="nav-bar__button">About</span></a>
      </div>
    </div>
  )
}