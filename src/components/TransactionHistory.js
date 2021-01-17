import React, { useContext } from 'react';
import './../App.css';
import { GlobalContext } from './../config/context';
import Lists from './lists'

const TransactionHistory = () => {
    const {transactions} =useContext(GlobalContext);
    return (
        <div>
            <h2>History</h2>
            <hr />
            <ul>
                {transactions.map((value)=>{
                    return <Lists key={value.id} value={value} />
                })}
            </ul>
        </div>
    )
}
export default TransactionHistory;
