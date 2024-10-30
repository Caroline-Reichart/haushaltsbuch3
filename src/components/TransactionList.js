import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <div key={index} className={`transaction-item ${transaction.type}`}>
          <span>{transaction.date}</span>
          <span>{transaction.category}</span>
          <span>{transaction.type === 'income' ? '+' : '-'}{transaction.amount.toFixed(2)} €</span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
