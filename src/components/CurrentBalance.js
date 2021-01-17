import React, { useContext } from 'react';
import './../App.css';
import { GlobalContext } from './../config/context';

const CurrentBalance = () => {
    const { transactions } = useContext(GlobalContext)
    const currentBalance = transactions.map(value => value.amount).reduce((v, i) => (v += i), 0);
    return (
        <div className="div-CurrentBalance">
            <h4>CurrentBalance</h4> <span className="span-currentBalance">${currentBalance}</span>
        </div>
    )
}
export default CurrentBalance;
