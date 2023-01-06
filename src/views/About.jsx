import NavBar from '../components/NavBar';

export default function About() {
  return (
    <div className='about'>
      <NavBar />
      <h1>About me</h1>
      <p>I have been working on or with computers since I was in middle school when I fixed my first computer to use for my schoolwork. From that time on, computers have been a hobby of mine. In 2020, my daughter was diagnosed with brain cancer. During her treatment, I started learning HTML, CSS, and JavaScript, and once she was diagnosed as in remission, I enrolled in Prime Digital Academy where that knowledge was expanded on to include React, Redux, Express, Node, and Python. The bigger thing they taught me was how to learn a new language. By the end of the course, I was able to start learning a new language at the beginning of a weekend and be writing code in it by the next week.</p><br />
      <p>Since then, I have worked for a year as a full stack engineer for Media Junction where I built web templates for clients to use in HubSpot that were coded in HubL, jQuery, JavaScript, and HTML. I also used Express and Node to integrate various APIs into HubSpot's CMS and CRM.</p><br />
      <h1>About this site</h1>
      <p>This site was created using React, Redux, JavaScript, and HTML for the front end, SCSS, CSS, and JSS for most of the styling with Material-UI on the pages I use to manage the page contents, and Express, Node, Mongoose, and MongoDB for the server-side code. While some of these technologies are not necessary to use together, I wanted to demonstrate that I can be very flexible with what I work with and easily shift from one language/framework to another. All graphics are done using SCSS and CSS only; no images were used.</p>
    </div>
  )
}