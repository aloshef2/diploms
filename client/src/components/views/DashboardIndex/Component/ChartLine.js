import React, {Component, useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

function ChartLine(){
  
    const [ChartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            datasets: [
                {
                    label: 'Число пользователей',
                    data: [0, 0, 0, 0 ,1,0,0, 2, 0, 0, 0 , 0, 2, 3 ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'
                    ]
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
      <div className="chart" >
        <Line
          data={ChartData}
          options={{
              scales: {
                  yAxes: [
                      {
                          ticks: {
                              autoSkip: true,
                              maxTicksLimit: 10,
                              beginAtZero: true
                          },
                          gridLines: {
                              display: false
                          }
                      }
                  ],
                  xAxes: [
                      {
                          gridLines: {
                              display: false
                          }
                      }
                  ]
              }
          }}
        />
      </div>
    )

}

export default ChartLine;