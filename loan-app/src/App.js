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
    if (
      isFinite(principal) &&
      isFinite(calculatedInterest) &&
      isFinite(calculatedPayments)
    ) {
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (principal * x * calculatedInterest) / (x - 1);
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment("Please provide valid inputs.");
    }
  };
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Loan Calculator</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Loan Amount:
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-indigo-300 transition rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customDark"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 100000"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Interest Rate (%):
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-indigo-300 transition rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customDark"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g., 5"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Years to Repay:
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-indigo-300 transition rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-customDark"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="e.g., 30"
          />
        </label>
      </div>
      <button
        className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300"
        onClick={calculateLoan}
      >
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">
            Monthly Payment: {monthlyPayment}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
