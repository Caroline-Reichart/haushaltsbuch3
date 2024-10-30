import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ transactions }) => {
  const expenseCategories = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = {
          amount: 0,
          color: transaction.color
        };
      }
      acc[transaction.category].amount += transaction.amount;
      return acc;
    }, {});

  const data = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories).map(cat => cat.amount),
        backgroundColor: Object.values(expenseCategories).map(cat => cat.color),
      }
    ]
  };

  return (
    <div className="category-chart">
      <h2>Ausgabenverteilung</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default CategoryChart;
