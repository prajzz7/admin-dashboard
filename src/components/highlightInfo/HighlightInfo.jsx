import React from 'react'
import './HighlightInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HighlightInfo = () => {
  return (
    <div className='highlightInfo'>
        <div className='highlightItem'>
            <span className='highlightMoney'>₹ 32,50,456</span>
            <span className='highlightMoney'>₹ 32,50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span>-2.78%</span> <ArrowDownwardIcon className='arrow negative'/>
                <span>Since last week 1</span>
                <span>Since last week 1</span>
                <span>This span added</span>
                <span>This span added</span>
                <span>This span added</span>
            </div>
        </div>
        <div>
            MALLU DIV
        </div>
    </div>
  )
}

export default HighlightInfo