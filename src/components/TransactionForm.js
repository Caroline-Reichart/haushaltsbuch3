import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [color, setColor] = useState('#FFB3BA');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;

    const newTransaction = {
      category,
      amount: parseFloat(amount),
      type,
      color,
      date: new Date().toLocaleDateString()
    };
    addTransaction(newTransaction);
    setCategory('');
    setAmount('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kategorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Betrag"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Einnahme</option>
        <option value="expense">Ausgabe</option>
      </select>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="#FFB3BA">Pastellrosa</option>
        <option value="#FFDFBA">Pastellorange</option>
        <option value="#FFFFBA">Pastellgelb</option>
        <option value="#BAFFC9">Pastellgrün</option>
        <option value="#BAE1FF">Pastellblau</option>
        <option value="#E2BAFF">Pastelllila</option>
      </select>
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default TransactionForm;
