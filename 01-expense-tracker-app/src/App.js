import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "car Insurance",
      amount: 11.111,
      date: new Date(2023, 1, 28),
    },
    {
      id: "e2",
      title: "test",
      amount: 53.352,
      date: new Date(2011, 1, 20),
    },
    {
      id: "e3",
      title: "tfdc",
      amount: 78.33,
      date: new Date(2019, 3, 18),
    },
    {
      id: "e4",
      title: "asdsd",
      amount: 12.01,
      date: new Date(2022, 5, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
