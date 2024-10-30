import React, { useState, useEffect } from 'react';
// Restliche Importe

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    type: "income", // oder "expense"
    category: "",
    amount: "",
    color: "#a3d9c7" // Standardfarbe, optional
  });

  // Lade Transaktionen aus localStorage beim ersten Laden der App
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) setTransactions(savedTransactions);
  }, []);

  // Speichere Transaktionen in localStorage, wenn sich der Status `transactions` ändert
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Funktion zum Hinzufügen einer neuen Transaktion
  const addTransaction = () => {
    // Überprüfe, ob alle erforderlichen Felder ausgefüllt sind
    if (!newTransaction.category || !newTransaction.amount) {
      alert("Bitte Kategorie und Betrag angeben.");
      return;
    }

    const transaction = {
      ...newTransaction,
      amount: parseFloat(newTransaction.amount) // Betrag in eine Zahl umwandeln
    };

    setTransactions([...transactions, transaction]);

    // Zurücksetzen des Eingabeformulars
    setNewTransaction({
      type: "income",
      category: "",
      amount: "",
      color: "#a3d9c7"
    });
  };

  return (
    <div className="App">
      <h1>Haushaltsbuch</h1>
      
      {/* Formular für neue Transaktionen */}
      <div>
        <input
          type="text"
          placeholder="Kategorie"
          value={newTransaction.category}
          onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Betrag"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
        />
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
        >
          <option value="income">Einnahme</option>
          <option value="expense">Ausgabe</option>
        </select>
        <input
          type="color"
          value={newTransaction.color}
          onChange={(e) => setNewTransaction({ ...newTransaction, color: e.target.value })}
        />
        <button onClick={addTransaction}>Transaktion hinzufügen</button>
      </div>

      {/* Anzeige der Transaktionen */}
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} style={{ color: transaction.color }}>
            {transaction.type === "income" ? "+" : "-"} {transaction.category}: {transaction.amount} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
