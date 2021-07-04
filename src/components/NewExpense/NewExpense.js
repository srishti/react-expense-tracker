import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log("[NewExpense] rendered");

  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

  const saveExpenseHandler = (userInputExpense) => {
    const expense = {
      ...userInputExpense,
      id: Math.random().toString(), // this can result in duplicate IDs but it is enough for the current demo purpose
    };
    props.onAddExpense(expense);
    hideExpenseFormHandler();
  };

  const showExpenseFormHandler = () => {
    setIsExpenseFormVisible(true);
  };

  const hideExpenseFormHandler = () => {
    setIsExpenseFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isExpenseFormVisible ? (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onExpenseSave={saveExpenseHandler}
          onCancel={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
