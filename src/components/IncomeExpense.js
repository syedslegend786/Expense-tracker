import React, { useContext } from 'react';
import './../App.css';
import { GlobalContext } from './../config/context';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const Amount =transactions.map(v=>v.amount);
    let income=Amount.filter(trans=>trans>0).reduce((s,i)=>(s+=i),0);
    let expense=Amount.filter(trans=>trans<0).reduce((s,i)=>(s+=i),0);
     
    
    return (
        <div className="div-IncomeExpense">
            <div className="income">
                Income <span>${income}</span>
            </div>
            <div className="expense">
                Expense <span>${expense}</span>
            </div>
        </div>
    )
}
export default IncomeExpense;
