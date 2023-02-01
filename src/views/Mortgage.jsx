import NavBar from "../components/NavBar";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import { useState } from "react";
import currency from "currency.js";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Grow from '@mui/material/Grow';

export default function Mortgage() {
  const [formState, setFormState] = useState({
    amount: '',
    payment: ''
  });
  const [output, setOutput] = useState('empty');
  const [value, setValue] = useState();
  const [error, setError] = useState({ show: false });
  const [expand, setExpand] = useState(false);
  const [schedule, setSchedule] = useState([]);

  const handleChange = async (e) => {
    switch (e.target.name) {
      case 'amount' || 'payment':
        setFormState({
          ...formState,
          [e.target.name]: currency(e.target.value).format()
        });
        break;
      default:
        setFormState({
          ...formState,
          [e.target.name]: e.target.value
        });
    }
    console.log(formState);
  }

  const formatCurrency = e => {
    if (currency(e.target.value).format() !== '$0.00') {
      e.target.value = currency(e.target.value).format();
    } else {
      e.target.value = '';
      setFormState({
        ...formState,
        [e.target.name]: ''
      })
    }
  }

  const handleClick = () => {
    console.log('Click');
    const P = currency(formState.amount).value;
    const A = currency(formState.payment).value;
    const i = formState.interest / 12 / 100;
    const n = formState.term * 12;

    let remainingBal, pmt;
    setSchedule(schedule.length = 0);

    console.log(P + ', ' + A + ', ' + i + ', ' + n);
    switch (true) {
      // Missing all values
      case !formState.amount && !formState.payment:
        setError({
          show: true,
          message: 'No values entered',
        })
        break;
      // Missing term and/or interest
      case !formState.term || !formState.interest:
        setError({
          show: true,
          message: 'Term and interest are required fields'
        })
        break;
      // Used both amount and payment
      case formState.amount !== '' && formState.payment !== '':
        setError({
          show: true,
          message: 'Please only use amount or payment'
        })
        break;
      // Calculate payment
      case formState.amount !== '':
        setOutput('payment');
        pmt = P * (i * (1 + i) ** n) / ((1 + i) ** n - 1);
        remainingBal = P;
        setValue(
          pmt
        )
        break;
      // Calculate total
      case formState.payment !== '':
        setOutput('total');
        pmt = A;
        remainingBal = A * ((1 + i) ** n - 1) / (i * (1 + i) ** n);
        setValue(
          remainingBal
        )
        break;
      // Unspecified error
      default:
        console.error('Something went wrong');
        setError({
          show: true,
          message: "I apologize but something went wrong. Please refresh and try again"
        })
    }

    for (let k = n; k > 0; k--) {
      let intPmt = remainingBal * i;
      let pPmt = pmt - intPmt;
      remainingBal -= pPmt;
      let month = n - k + 1
      setSchedule([
        schedule.push(
          {
            month: month,
            interest: currency(intPmt).format(),
            principle: currency(pPmt).format(),
            remaining: currency(remainingBal).format()
          }
        )
      ])
      console.log(k, intPmt, pPmt, remainingBal, 'schedule: ');
      console.log(schedule);
      setSchedule(schedule);
    }
  }

  const errorClick = () => {
    setError({
      show: false,
      message: '',
    })
  }

  return (
    <div className="mortgage">
      <NavBar />
      {
        error.show ?
          <Fade in={error.show} timeout={500}>
            <div className="mortgage-error__background">
              <div className="mortgage-error__box">
                <span className="mortgage-error__message">
                  {error.message}
                </span><br /><br />
                <Button variant='contained' color="error" onClick={errorClick}>Ok</Button>
              </div>
            </div>
          </Fade>
          : ''
      }
      <div className="mortgage-calculator">
        <div className="mortgage-input">
          <div className="mortgage-input__row">
            <TextField id="amount" name="amount" label="Mortgage Amount" onChange={handleChange} onBlur={formatCurrency} />
            &nbsp; or &nbsp;
            <TextField id="payment" name="payment" label="Monthly Payment" onChange={handleChange} onBlur={formatCurrency} />
          </div>
          <br />
          <div className="mortgage-input__row">
            <TextField name="term" label="Term (in years)" onChange={handleChange} />
            <TextField name="interest" label="Interest" onChange={handleChange} />
          </div>
          <br />
          <Button name="calculate" onClick={handleClick} variant="contained">Calculate</Button>
        </div>
        <div className="mortgage-output">
          {
            output === 'empty' ?
              <div>
                <span className="mortgage-empty">Find your monthly payment</span><br />
                <span className="mortgage-empty__small">or mortgage total based on payment amount</span>
              </div>
              : output === 'payment' ?
                <span className="mortgage-payment"><span className="mortgage-payment__amount">{currency(value).format()}</span><br />/month</span>
                : output === 'total' ?
                  <span className="mortgage-total">{currency(value).format()}</span>
                  : ''
          }
        </div>
        {
          output !== 'empty' ?
            <ExpandCircleDownIcon className="mortgage-button" sx={{ fontSize: 72, color: '#1976d2' }} onClick={() => setExpand(!expand)} />
            : ''
        }
      </div>
      {
        expand ?
          <Grow in={expand} style={{ transformOrigin: '0 0 0' }}>
            <div className="mortgage-schedule">
              <ul className="mortgage-schedule__list">
                <li className="mortgage-schedule__list-item"><span>Month</span><span>Interest</span><span>Principle</span><span>Remaining Balance</span></li>
                {
                  schedule.map(line => {
                    return (
                      <li className="mortgage-schedule__list-item" key={line.month}><span>{line.month}</span><span>{line.interest}</span><span>{line.principle}</span><span>{line.remaining}</span></li>
                    )
                  })
                  // JSON.stringify(schedule)
                }
              </ul>
            </div>
          </Grow>
          : ''
      }
    </div>
  )
}