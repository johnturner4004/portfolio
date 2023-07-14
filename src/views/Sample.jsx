import NavBar from '../components/NavBar'

export default function Sample() {
  const handleClick = (url) => {
    window.location.href = url
  }

  return (
    <div className="sample">
      <NavBar />
      <h1>Sample Projects</h1>
      <div className="sample-page">
        <div className="sample-container">
          <a href="/sample/mortgage">
            <h2>Mortgage Calculator</h2>
          </a>
          <div
            className="thumbnail"
            role="link"
            tabIndex={0}
            onClick={() => handleClick('/sample/mortgage')}
            onKeyDown={() => handleClick('/sample/mortgage')}
          >
            <iframe src="/sample/mortgage" frameBorder="0" title="mortgage calculator thumbnail" />
          </div>
        </div>
        <div className="sample-container">
          <a href="https://johnturner4004.github.io/readme-generator/">
            <h2>README.md Generator</h2>
          </a>
          <div
            className="thumbnail"
            role="link"
            tabIndex={0}
            onClick={() => handleClick('https://johnturner4004.github.io/readme-generator/')}
            onKeyDown={() => handleClick('https://johnturner4004.github.io/readme-generator/')}
          >
            <iframe src="https://johnturner4004.github.io/readme-generator/" frameBorder="0" title="mortgage calculator thumbnail" />
          </div>
        </div>
      </div>
    </div>
  )
}
