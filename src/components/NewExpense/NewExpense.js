import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log("[NewExpense] rendered");

  const saveExpenseHandler = (userInputExpense) => {
    const expense = {
      ...userInputExpense,
      id: Math.random().toString(), // this can result in duplicate IDs but it is enough for the current demo purpose
    };
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
