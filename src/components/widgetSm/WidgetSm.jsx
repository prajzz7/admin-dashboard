import React from 'react'
import './WidgetSm.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const WidgetSm = () => {
  
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Units sold this year',
      },
    },
  };
  const labels = ['Apple', 'Hp', 'Dell', 'Asus', 'Acer', 'Lenovo', 'Sony'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Laptop',
        data: [7823,13345,14999,5122,697,7456,1801],
        borderColor: 'rgb(255, 99, 132)',
        borderRadius: 20,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Accessories',
        data: [13012,22342,20234,4298,15121,9567,29990],
        borderColor: 'rgb(53, 162, 235)',
        borderRadius: 20,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='widgetSm'>
        <h3>Highest Selling Products</h3>
        <div className='horizontalBar'>
          <Bar options={options} data={data} />
        </div>
    </div>
  )
}

export default WidgetSm