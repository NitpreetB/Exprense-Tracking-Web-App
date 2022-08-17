import React,{useContext} from 'react'
import { GlobalContent } from '../context/GlobalState'

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContent)

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Total Income</h4>
  <p className="money plus">{income}</p>
    </div>
    <div>
      <h4> Total Expenses</h4>
  <p  className="money minus">{expense}</p>
    </div>
  </div>
  )
}

