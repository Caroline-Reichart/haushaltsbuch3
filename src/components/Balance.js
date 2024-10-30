import React from 'react';

const Balance = ({ transactions }) => {
  const incomeTotal = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenseTotal = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = incomeTotal - expenseTotal;

  return (
    <div className="balance-section">
      <h2>Aktueller Saldo: <span>{balance.toFixed(2)} €</span></h2>
    </div>
  );
};

export default Balance;
