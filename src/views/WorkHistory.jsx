import { useEffect } from "react";
import { useDispatch } from "react-redux"

export default function WorkHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_WORK_HISTORY'})
  })

  return (
    <div className='work-history'>
      <div className='work-history__monitor'>
        <div className='work-history__monitor-screen'>
          <h1>This is a test</h1>
        </div>
      </div>
    </div>
  )
}