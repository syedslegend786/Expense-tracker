import React, { useContext } from 'react';
import './../App.css';
import { GlobalContext } from './../config/context';

const Lists = ({ value }) => {
    const { del_transaction } = useContext(GlobalContext)
    return (
        <li>
            {value.text} <span>{value.amount}</span><button onClick={()=> del_transaction(value.id)}>X</button>
        </li>
    )
}

export default Lists;