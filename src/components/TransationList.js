import React,{useContext} from 'react'
import { GlobalContent } from '../context/GlobalState'
import { Transaction } from './Transaction'
export const TransationList = () => {
  
    const {transactions} = useContext(GlobalContent)  


    return (
    <>
      <h3>Transaction Log</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>

    </>
  )
}

