import React from 'react'
import './HighlightInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HighlightInfo = () => {
  return (
    <div className='highlightInfo'>
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Monthly Revenue</h3>
            <span className='highlightMoney'>₹ 32,50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span>-2.78%</span> <ArrowDownwardIcon className='arrow negative'/>
                <span>Since last week 1</span>
                <span>Since last week 1</span>

            </div>
        </div>
    </div>
  )
}

export default HighlightInfo