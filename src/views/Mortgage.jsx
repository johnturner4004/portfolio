import NavBar from "../components/NavBar";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import { useState } from "react";
import currency from "currency.js";

export default function Mortgage() {
  const [formState, setFormState] = useState({
    amount: '',
    payment: ''
  });
  const [output, setOutput] = useState('empty');
  const [error, setError] = useState({ show: false });

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
    switch (true) {
      case !formState.amount && !formState.payment:
        setError({
          show: true,
          message: 'No values entered',
        })
        break;
      case !formState.term || !formState.interest:
        setError({
          show: true,
          message: 'Term and interest are required fields'
        })
        break;
      case formState.amount !== '' && formState.payment !== '':
        setError({
          show: true,
          message: 'Please only use amount or payment'
        })
        break;
      case formState.amount !== '':
        setFormState({
          ...formState,
          payment: null
        })
        console.log('amount input');
        setOutput('payment');
        break;
      case formState.payment !== '':
        console.log('payment input');
        setOutput('total');
        break;
      default:
        console.error('Something went wrong');
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
      <NavBar />
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
                <span className="mortgage-payment"><span className="mortgage-payment__amount">{currency(100).format()}</span><br />/month</span>
                : output === 'total' ?
                  <span className="mortgage-total">{currency(100000).format()}</span>
                  : ''
          }
        </div>
      </div>
    </div>
  )
}