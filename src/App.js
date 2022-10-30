import Expenses from "./Components/Expenses/Expenses";
import ExpenseForm from "./Components/NewExpenses/ExpenseForm";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
const expenses = [
  {
    id: Math.random().toString(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: Math.random().toString(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div>
      <NewExpenses />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
