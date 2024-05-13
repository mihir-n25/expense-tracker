import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
const DoughnutChart = ({ chartData }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let chartInstance = null;
  
    if (chartContainer && chartContainer.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = chartContainer.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        });
    }
 
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);
  

  return <canvas ref={chartContainer} />;
};

export default DoughnutChart;
