import React, {Component, useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';

function ChartPie(){
  
    const [ChartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Социальные', 'Промышленные', 'Развлекательные'],
            datasets: [
                {
                    label: 'Количество купленых роботов',
                    data: [12,42, 202],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
      <div className="chart" style={{width: "500px", height: '500px'}}>
        <Pie
          data={ChartData}
        />
      </div>
    )

}

export default ChartPie;