import React from 'react'
import './Home.css'
import HighlightInfo from '../components/highlightInfo/HighlightInfo'
import Chart from '../components/charts/Chart'
import WidgetSm from '../components/widgetSm/WidgetSm'
import WidgetLg from '../components/widgetLg/WidgetLg'


const Home = () => {
  return (
    <div className='home'>
        <HighlightInfo/>
        <Chart/>
        <div className='users'>
          <WidgetLg/> 
          <WidgetSm/>
        </div>
    </div>
  )
}

export default Home