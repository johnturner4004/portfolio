import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function WorkHistory() {
  const dispatch = useDispatch();
  const workHistory = useSelector(store => store.workHistory);
  console.log(workHistory);

  useEffect(() => {
    dispatch({ type: 'GET_WORK_HISTORY' })
  }, []);

  return (
    <div className='work-history'>
      <div className='work-history__monitor'>
        <div className='work-history__monitor-screen'>
          <h1 className='work-history__company'>Work History<span className='work-history__cursor'>|</span></h1>
          <ul className='work-history__list'>
            {workHistory.data ? workHistory.data.map(entry => {
              return (
                <li className='work-history__list-entry' key={entry._id.toString()}>
                  <h2>{entry.company}</h2>
                  <p>{entry.start_date} - {entry.end_date}</p>
                  <p>{entry.job_title}</p>
                  <ul>
                    {entry.job_description ? entry.job_description.map(item => {
                      return (
                        <li>{item}</li>
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
  )
}