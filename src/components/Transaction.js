import React,{useContext} from 'react'
import { GlobalContent } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const{deleteTransaction}  = useContext(GlobalContent);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount <0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
    
  )
}

