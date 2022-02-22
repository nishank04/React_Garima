import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 250, date: new Date(2022, 1, 17) },
    { title: 'Medical Bill', amount: 90, date: new Date(2022, 1, 10) },
    { title: 'Electricity Bill', amount: 150, date: new Date(2022, 1, 19) },
    { title: 'Home Loan EMI', amount: 2500, date: new Date(2022, 1, 5) },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;