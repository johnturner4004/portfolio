import NavBar from "../components/NavBar";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import currency from "currency.js";

export default function Mortgage() {
  const [formState, setFormState] = useState({});

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
    if (e.target.value > 0) {
      e.target.value = currency(e.target.value).format();
    } else {
      e.target.value = '';
    }
  }

  return (
    <div className="mortgage">
      <NavBar />
      <div className="mortgage-calculator">
        <div className="mortgage-input">
          <div className="mortgage-input__row">
            <TextField name="amount" label="Mortgage Amount" onChange={handleChange} onBlur={formatCurrency} />
            &nbsp; or &nbsp;
            <TextField name="payment" label="Monthly Payment" onChange={handleChange} onBlur={formatCurrency} />
          </div>
          <br />
          <div className="mortgage-input__row">
            <TextField name="term" label="Term (in years)" onChange={handleChange} onBlur={formatCurrency} />
            <TextField name="interest" label="Interest" onChange={handleChange} onBlur={formatCurrency} />
          </div>
        </div>
        <div className="mortgage-output">

        </div>
      </div>
    </div>
  )
}