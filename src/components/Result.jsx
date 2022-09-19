export const Result = ({ title, days, money, dailyAllow }) => {
  return (
    <div className="result">
      <p className="result-days mb-10">
        {title} <br />
        <b>{days} days</b>
      </p>
      <h3>{money.toFixed(2)}€</h3>
      <p className="result-daily">
        Daily allowance <br />
        {dailyAllow.toFixed(2)} €
      </p>
    </div>
  );
};
