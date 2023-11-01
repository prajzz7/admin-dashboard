import React from 'react'
import './Chart.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,CartesianGrid, Legend } from 'recharts'

const Chart = () => {
    var salesData = [
        { month: 'January', cost: 4567897, 2020: 1200233, 2021: 2350123, 2022: 1420345, 2023: 3523456 },
        { month: 'February',cost: 2567897, 2020: 1250462, 2021: 1380456, 2022: 1480567, 2023: 1980678 },
        { month: 'March', cost: 5567897,2020: 1525456, 2021: 620567, 2022: 1730678, 2023: 1840789 },
        { month: 'April', 2020: 2250456, 2021: 2350567, 2022: 460678, 2023: 2570789 },
        { month: 'May', 2020: 2253456, 2021: 3350567, 2022: 4460678, 2023: 3570789 },
        { month: 'June', 2020: 3278456, 2021: 1380567, 2022: 3490678, 2023: 3600789 },
        { month: 'July', 2020: 4850456, 2021: 4980567, 2022: 5120678, 2023: 5270789 },
        { month: 'August', 2020: 2458956, 2021: 3580567, 2022: 4720678, 2023: 3870789 },
        { month: 'September', 2020: 3250857, 2021: 1380567, 2022: 5520678, 2023: 3670789 },
        { month: 'October', 2020: 3985256, 2021: 5120567, 2022: 1270678, },
        { month: 'November', 2020: 3450547, 2021: 2580567, 2022: 4720678,  },
        { month: 'December', 2020: 3250456, 2021: 3380567, 2022: 6520678,  }
      ];
      
      

    return (
        <div className='chart'>
            <h3 className='chartHeading'>Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>                
                <LineChart data={salesData}>
                    <XAxis dataKey="month"/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="2022" stroke="#557a50" />
                    <Line type="monotone" dataKey="2023" stroke="#787423" />
                    <Line type="monotone" dataKey="2021"/>
                    <CartesianGrid stroke='#f2f2f2' />
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart