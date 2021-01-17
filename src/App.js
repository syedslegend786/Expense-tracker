import React from 'react';
import './App.css'

//Components
import Header from './components/Header';
import CurrentBalance from './components/CurrentBalance';
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';
import Form from './components/form';
import { GlobalProvider } from './config/context';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <CurrentBalance />
      <IncomeExpense />
      <TransactionHistory />
      <Form />
    </GlobalProvider>
  );
}

export default App;
