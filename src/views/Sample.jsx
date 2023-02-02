import NavBar from '../components/NavBar';

export default function Sample() {
  const handleClick = (url) => {
    console.log('click');
    window.location.href = url;
  }

  return (
    <div className='sample'>
      <NavBar />
      <h1>Sample Projects</h1>
      <div className='sample-page'>
        {/* <div class="thumbnail-container"> */}
        <a href="/sample/mortgage">
          <h2>Mortgage Calculator</h2>
        </a>
        <div className="thumbnail" onClick={() => handleClick('/sample/mortgage')}>
          <iframe src="/sample/mortgage" frameBorder="0" title="mortgage calculator thumbnail"></iframe>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}