import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import { trash } from "../../utils/Icons";
import Button from "../Button/Button";

import piggyImage from "../../img/piggy-bank.png";

function Item({ id, title, amount, date, category, description, deleteItem }) {
  return (
    <div>
      <div>
        <img src={piggyImage} alt="piggy bank" width={80} height={80} />
      </div>
      <div>
        <div>
          <h3>{title}</h3>
          <h4>{amount} PLN</h4>
        </div>
        <div>
          <div>
            <p>
              Data: <strong> {dateFormat(date)}</strong>
            </p>
            <p>
              Kategoria: <strong>{category}</strong>
            </p>
            {description && (
              <p>
                Opis: <strong>{description}</strong>
              </p>
            )}
          </div>
          <div>
            <Button
              name={trash}
              color={"#ff1e00"}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
