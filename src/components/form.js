import React, { useContext, useState } from 'react';
import { GlobalContext } from '../config/context';


const Form = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const { add_transaction } = useContext(GlobalContext)
    let ID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const obj = {
            text: desc,
            amount: Number(amount),
            id: ID()
        }
        add_transaction(obj);
        setDesc('')
        setAmount('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Add New Transaction</h2>
                <div><hr /></div>
                <label htmlFor="descInput">Description</label>
                <input required value={desc} onChange={(e) => setDesc(e.target.value)} type="text" id="descInput" />
                <label htmlFor="amountInput">Amount</label>
                <input required value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amountInput" />
                <input  className="submit-btn" type="submit" />

            </form>
        </div>
    )
}
export default Form;
