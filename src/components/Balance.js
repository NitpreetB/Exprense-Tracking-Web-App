import React, {useContext} from 'react'
import { GlobalContent } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContent)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
    <h4> Total Balance</h4>
    <h1>${total}</h1>
    
    </>  
  )
}
