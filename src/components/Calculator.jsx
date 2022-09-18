import React from 'react';

import { Checkbox } from './Checkbox';
import { Input } from './Input';

export const Calculator = () => {
  const [income, setIncome] = React.useState();
  const [sickDays, setSickDays] = React.useState('');

  const incomeRef = React.useRef();
  const sickDaysRef = React.useRef();

  const [tuberculosis, setTuberculosis] = React.useState(false);
  const [empDays, setEmpDays] = React.useState(0);
  const [empMoney, setEmpMoney] = React.useState(0);
  const [insDays, setInsDays] = React.useState(0);
  const [insMoney, setInsMoney] = React.useState(0);
  const [dailyAllow, setDailyAllow] = React.useState(0);
  const [maxDuration, setMaxDuration] = React.useState(182);
  const totalMoney = empMoney + insMoney;

  function handleSubmit(event) {
    // prevent page refresh
    event.preventDefault();

    if (income >= 1 && sickDays >= 4 && sickDays <= maxDuration) {
      // Netto daily salary
      const netDailySalary = (income * 0.7 * 0.8) / 30;
      // employer compensates
      const inputEmpDays = sickDays - 3 <= 5 ? sickDays - 3 : 5;
      setEmpDays(inputEmpDays);
      const empMoney = netDailySalary * inputEmpDays;
      setEmpMoney(empMoney);

      // Insurance compensates
      const insDays = sickDays - 3 - inputEmpDays;
      setInsDays(insDays);
      const insMoney = netDailySalary * insDays;
      setInsMoney(insMoney);

      setDailyAllow(netDailySalary);
    }
  }

  return (
    <div className="calc">
      <h2>Compensation Calculator</h2>
      <form onSubmit={handleSubmit}>
        <Input
          title="Average income"
          type="€"
          id="income"
          ref={incomeRef}
          setValue={setIncome}
          value={income}
          maxLength="5"
        />
        <Input
          title="Days on sick-leave"
          type="days"
          id="sickDays"
          ref={sickDaysRef}
          setValue={setSickDays}
          value={sickDays}
          maxLength="3"
        />
        <Checkbox value={tuberculosis} setValue={setTuberculosis} setMaxDuration={setMaxDuration} />
        <button type="submit" className="button">
          Calculate
        </button>
      </form>
      <div className="results mb-20 pt-20 pb-20 d-flex justify-between">
        <div className="result">
          <p className="result-days mb-10">
            The employer compensates <br />
            <b>{empDays} days</b>
          </p>
          <h3>{empMoney.toFixed(2)}€</h3>
          <p className="result-daily">
            Daily allowance <br />
            {dailyAllow.toFixed(2)} €
          </p>
        </div>
        <div className="result">
          <p className="mb-10">
            Health Insurance compensates <br />
            <b>{insDays} days</b>
          </p>
          <h3>{insMoney.toFixed(2)}€</h3>
          <p>
            Daily allowance <br />
            {dailyAllow.toFixed(2)} €
          </p>
        </div>
      </div>
      <div className="d-flex align-center flex-column total">
        <p>Compensation total for {sickDays === '' ? 0 : sickDays} days (net)</p>
        <h4>{totalMoney.toFixed(2)}€</h4>
      </div>
    </div>
  );
};
