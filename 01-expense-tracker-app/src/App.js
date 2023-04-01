import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurance",
    amount: 11.111,
    date: new Date(2019, 1, 28),
  },
  {
    id: "e2",
    title: "test",
    amount: 53.352,
    date: new Date(2022, 1, 20),
  },
  {
    id: "e3",
    title: "tfdc",
    amount: 78.33,
    date: new Date(2021, 3, 18),
  },
  {
    id: "e4",
    title: "asdsd",
    amount: 12.01,
    date: new Date(2022, 5, 25),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
