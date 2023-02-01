import NavBar from '../components/NavBar';

export default function Sample() {
  return (
    <div className='sample'>
      <NavBar />
      <h1>Sample Projects</h1>
      <div className='sample-page'>
        <a href="/sample/mortgage">
          <h2>Mortgage Calculator</h2>
          <div class="thumbnail-container">
            <div class="thumbnail">
              <iframe src="/sample/mortgage" frameborder="0" title="mortgage calculator thumbnail"></iframe>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}