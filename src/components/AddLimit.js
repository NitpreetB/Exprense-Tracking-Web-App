import React, {useState,useContext} from 'react'
import { GlobalContent } from '../context/GlobalState'



export const AddLimit = () => {

const [amount,setAmount]=useState(0);

const{addLimit}  = useContext(GlobalContent);

const onSubmit = e => {
      e.preventDefault();
      const newLimit ={
        id: Math.floor(Math.random() * 100000000),   
        amount: +amount
      }
      addLimit(newLimit);
    }

    return (
    <>
      <h3> Set a Spending Limit </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="amount"
            >Monthly Spending Limit You Would Like to Set<br />
            </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
        </div>
        <h2> </h2>
        
        <h4> Limit</h4>
        <h1>${amount}</h1>
      </form> 
    
    </>
  )
}