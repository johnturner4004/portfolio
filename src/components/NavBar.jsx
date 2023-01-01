export default function NavBar() {

  const goTo = (path) => {
    window.location.href = path
  }

  return (
    <div className="nav-bar">
      <button className='nav-bar__name' onClick={() => goTo('/')}><h1>John Turner</h1></button>
      <button className="nav-bar__button" onClick={() => goTo('/work-history')}>Work History</button>
    </div>
  )
}