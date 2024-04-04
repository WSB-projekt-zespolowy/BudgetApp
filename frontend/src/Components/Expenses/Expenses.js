import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "../Item/Item";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <h1>Wydatki</h1>
      <div>
        <h2>
          Wydatki łącznie: <span>{totalExpenses()} PLN</span>
        </h2>
      </div>
      <div>
        <div>
          <ExpenseForm />
        </div>
        <div>
          {expenses.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expenses;
