import { useEffect } from "react";
import { useDispatch } from "react-redux"
// import moment from "moment/moment";
import NavBar from "../components/NavBar";

export default function Education() {
  const dispatch = useDispatch();
  // const education = useSelector(store => store.education);

  useEffect(() => {
    dispatch({ type: 'GET_EDUCATION' })
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className='education'>
        <h1 className='education__title'>Education</h1>
        <ul className="education__list">
          <li className="education__list-entry">
            <h2 className="education__list-company">Prime Digital Academy</h2>
            <p className="education__list-date">Feb 2021 - Jul 2021</p>
            <p className="education__list-title">Full Stack Engineering</p>
            <ul>
              <li className="education__list-description">Developed apps using React, JavaScript, HTML, CSS, Axios, Express, Node, PostgreSQL, and Python</li>
              <li className="education__list-description">Participated in public speaking practice</li>
              <li className="education__list-description">Attended courses on inclusion, diversity, and equality</li>
              <li className="education__list-description">Developed an app for a client</li>
            </ul>
          </li>
          <li className="education__list-entry">
            <h2 className="education__list-company">West Coast Baptist College</h2>
            <p className="education__list-date">Aug 2005 - May 2009</p>
            <p className="education__list-title">Secondary Education Math and Science</p>
            <ul>
              <li className="education__list-description">Earned Bachelor's degree in 2009</li>
            </ul>
          </li>
          <li className="education__list-entry">
            <h2 className="education__list-company">Williamsport Christian School</h2>
            <p className="education__list-date">Aug 1998 - May 2005</p>
            <p className="education__list-title">Diploma</p>
            <ul>
              <li className="education__list-description">Class Valedictorian</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}