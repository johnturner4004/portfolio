import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import moment from "moment/moment";
import NavBar from "../components/NavBar";

export default function Education() {
  const dispatch = useDispatch();
  const education = useSelector(store => store.education);

  useEffect(() => {
    dispatch({ type: 'GET_EDUCATION' })
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className='education'>
        <h1 className='education__title'>Education</h1>
        <ul className='education__list'>
          {education.data ? education.data.map(entry => {
            return (
              <li className='education__list-entry' key={entry._id.toString()}>
                <h2 className='education__list-company'>{entry.school}</h2>
                <p className="education__list-date">{moment(entry.start_date).format('MMM YYYY')} - {moment(entry.end_date).format('MMM YYYY')}</p>
                <p className="education__list-title">{entry.major}</p>
                <ul>
                  {entry.education_description ? entry.education_description.map(item => {
                    return (
                      <li className="education__list-description">{item}</li>
                    )
                  }) : ''}
                </ul>
              </li>
            )
          }) : ''}
        </ul>
      </div>
    </div>
  )
}