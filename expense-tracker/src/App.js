import './App.css';
import React from 'react';
import Header  from './components/Header';
import  Balance  from './components/Balance';
import  IncomeExpenses  from './components/IncomeExpenses';
import { Transactions } from './components/TransactionsList';
import Addtransaction from './components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
