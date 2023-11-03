import React from 'react'
import './HighlightInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HighlightInfo = () => {
  return (
    <div className='highlightInfo'>
        {/**
         * cpmmmenrnankfajf
         */}
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Users</h3>
            <span className='highlightMoney'>50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span> +5.74% </span> <ArrowUpwardIcon className='arrow'/>
                <span>Since last week</span>
            </div>
        </div>
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Debt</h3>
            <span className='highlightMoney'>1,25,045</span>
            <div className='highlightAnalyticsContainer'>
                <span>+8.28%</span> <ArrowUpwardIcon className='arrow'/>
                <span>Since last week</span>
            </div>
        </div>
    </div>
  )
}

export default HighlightInfo