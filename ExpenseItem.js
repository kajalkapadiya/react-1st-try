import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__1">
        <h4>
          {props.item} - {props.amount} - {props.LocationOfExpenditure}
        </h4>
      </div>
    </div>
  );
}

export default ExpenseItem;
