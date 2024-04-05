import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import Form from "./IncomeForm";
import IncomeItem from "../Item/Item";

function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div>
      <h1>Przychody</h1>
      <div>
        <h2>
          Przychody łącznie: <span>{totalIncome()} PLN</span>
        </h2>
      </div>
      <div>
        <div>
          <Form />
        </div>
        <div>
          {incomes.map((income) => {
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
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Income;
