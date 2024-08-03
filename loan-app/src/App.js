import React from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [monthlyPayment, setMonthlyPayment] = React.useState(null);
  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;
    if(isFinite(principal) && isFinite(calculatedInterest) && isFinite(calculatedPayments)){
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal*x*calculatedInterest)/(x-1);
        setMonthlyPayment(monthly.toFixed(2));

    } else{
        setMonthlyPayment("Please provide valid inputs.");
    }

  };
  return (
    <div
      className="App"
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
    >
      <header className="App-header">
        <h1>Loan Calculator</h1>
      </header>
      <main>
        <div>
          <label>
            Loan Amount{" "}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Loan Amount"
            />
          </label>
        </div>
        <div>
          <label>
            Interest Rate (%):{" "}
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Interest Rate"
            />
          </label>
        </div>
        <div>
          <label>
            Years to Repay:{" "}
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Years to Repay"
            />
          </label>
        </div>
        <button onClick={calculateLoan}>Calculate</button>
        {monthlyPayment !== null && (
          <div>
            <h2>Monthly Payment</h2>
            <p>{monthlyPayment}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
