import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import moment from "moment/moment";
import NavBar from "../components/NavBar";

export default function WorkHistory() {
  const dispatch = useDispatch();
  const workHistory = useSelector(store => store.workHistory);

  useEffect(() => {
    dispatch({ type: 'GET_WORK_HISTORY' })
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className='work-history'>
        <div className='work-history__monitor'>
          <div className='work-history__monitor-screen'>
            <h1 className='work-history__company'>Work History<span className='work-history__cursor'>|</span></h1>
            <ul className='work-history__list'>
              {workHistory.data ? workHistory.data.map(entry => {
                return (
                  <li className='work-history__list-entry' key={entry._id.toString()}>
                    <h2 className='work-history__list-company'>{entry.company}</h2>
                    <p className="work-history__list-date">{moment(entry.start_date).format('MMM YYYY')} - {moment(entry.end_date).format('MMM YYYY')}</p>
                    <p className="work-history__list-title">{entry.job_title}</p>
                    <ul>
                      {entry.job_description ? entry.job_description.map(item => {
                        return (
                          <li className="work-history__list-description">{item}</li>
                        )
                      }) : ''}
                    </ul>
                  </li>
                )
              }) : ''}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}