import { useEffect } from "react";
import { useDispatch } from "react-redux"
// import moment from "moment/moment";
import NavBar from "../components/NavBar";

export default function WorkHistory() {
  const dispatch = useDispatch();
  // const workHistory = useSelector(store => store.workHistory);

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
            <ul className="work-history__list">
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Media Junction</h2>
                <p className="work-history__list-date">Oct 2021 - Dec 2022</p>
                <p className="work-history__list-title">Full Stack Engineer</p>
                <ul>
                  <li className="work-history__list-description">Developed webpage templates in HubSpot for clients using HubL, HTML, SCSS, CSS, JavaScript, and jQuery</li>
                  <li className="work-history__list-description">Integrated data from other APIs into HubSpot</li>
                  <li className="work-history__list-description">Met with clients to discuss their specific needs and what solutions I could develop for them</li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Prime Digital Academy</h2>
                <p className="work-history__list-date">Feb 2021 - Jul 2021</p>
                <p className="work-history__list-title">Full Stack Engineer (student)</p>
                <ul>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Self Employed</h2>
                <p className="work-history__list-date">Apr 2019 - Feb 2021</p>
                <p className="work-history__list-title">Independent Contractor</p>
                <ul>
                  <li className="work-history__list-description">Worked primarily for Uber and Lyft</li>
                  <li className="work-history__list-description">Prioritized passenger satisfaction and maintained an average rating of 4.93 out of five stars</li>
                  <li className="work-history__list-description">Managed business expenses and taxes to ensure profitability</li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Walmart</h2>
                <p className="work-history__list-date">Jun 2018 - Apr 2019</p>
                <p className="work-history__list-title">Ecommerce Department Manager</p>
                <ul>
                  <li className="work-history__list-description">Led a team of personal shoppers who filled customer orders</li>
                  <li className="work-history__list-description">Enforced deadlines to ensure customer orders were done on schedule</li>
                  <li className="work-history__list-description">Followed up with customer surveys to ensure customers were satisfied with our service </li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Teaching Temps</h2>
                <p className="work-history__list-date">Nov 2017 - May 2018</p>
                <p className="work-history__list-title">Licensed Teacher</p>
                <ul>
                  <li className="work-history__list-description">Worked flexible schedule to meet client needs at various schools throughout the Twin Cities area</li>
                  <li className="work-history__list-description">Followed the lesson plan left by the absent teacher to meet education goals for the day</li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Kwik Trip</h2>
                <p className="work-history__list-date">Aug 2016 - Apr 2019</p>
                <p className="work-history__list-title">Assistant Store Leader</p>
                <ul>
                  <li className="work-history__list-description">Managed store expenses, waste, shrink, and profit to ensure we met sales goals</li>
                  <li className="work-history__list-description">Met with other store leaders to discuss the needs of the store</li>
                  <li className="work-history__list-description">Hired and trained new employees</li>
                  <li className="work-history__list-description">Met with vendors to check in merchandise and discuss overstock or out-of-stock opportunities to ensure the product was available for customers</li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Walmart</h2>
                <p className="work-history__list-date">Sep 2010 - Jul 2016</p>
                <p className="work-history__list-title">Assistant Manager</p>
                <ul>
                  <li className="work-history__list-description">Worked several positions starting as a part-time Auto Care Center service writer up to a salaried assistant manager</li>
                  <li className="work-history__list-description">Led diverse groups of people in multiple areas of the stores</li>
                  <li className="work-history__list-description">Motivated associates to meet in-stock goals while continuing to provide good customer service</li>
                  <li className="work-history__list-description">Number 1 store for T Mobile sales in the second quarter of 2013 out of all T Mobile</li></ul></li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">First Baptist Church and School</h2>
                <p className="work-history__list-date">Aug 2009 - Jul 2011</p>
                <p className="work-history__list-title">Teacher</p>
                <ul>
                  <li className="work-history__list-description">Taught middle school and high school math, science, Bible, and keyboarding</li>
                  <li className="work-history__list-description">Tutored students in study hall and after school on a volunteer basis</li>
                </ul>
              </li>
              <li className="work-history__list-entry">
                <h2 className="work-history__list-company">Walmart</h2>
                <p className="work-history__list-date">May 2007 - Jul 2009</p>
                <p className="work-history__list-title">Automotive Sales Associate</p>
                <ul>
                  <li className="work-history__list-description">Wrote up customer work orders and communicated customer needs to the service technicians</li>
                  <li className="work-history__list-description">Checked customer vehicle to ensure the customer was getting the service they needed</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}