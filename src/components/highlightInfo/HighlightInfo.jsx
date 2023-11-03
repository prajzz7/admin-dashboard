import React from 'react'
import './HighlightInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HighlightInfo = () => {
  return (
    <div className='highlightInfo'>
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Total Revenue</h3>
            <span className='highlightMoney'>₹ 32,50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span>-2.78%</span> <ArrowDownwardIcon className='arrow negative'/>
                <span>Since last week 1</span>
                <span>Since last week 1</span>

            </div>
        </div>
<<<<<<< HEAD
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Total Revenue</h3>
            <span className='highlightMoney'>₹ 32,50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span>-2.78%</span> <ArrowDownwardIcon className='arrow negative'/>
                <span>Since last week 1</span>
                <span>Since last week 1</span>

            </div>
        </div>
        <div className='deleteLater'>
            New div added for content
            <button>Submit</button>
            <button> Cancel </button>
        </div>
        <div className='highlightItem'>
            <h3 className='highlightTitle'>Users</h3>
            <span className='highlightMoney'>50,456</span>
            <div className='highlightAnalyticsContainer'>
                <span> +5.74% </span> <ArrowUpwardIcon className='arrow'/>
                <span>Since last week</span>
            </div>
        </div>
        <div className='highlightItem'>
            <h3 className='highlightTitle'>PRAJWAL PANDESHWAR ====== </h3>
            <span className='highlightMoney'>1,25,045</span>
            <span className='highlightMoney'>1,25,045</span>
            <span className='highlightMoney'>1,25,045</span>
            <span className='highlightMoney'>1,25,045</span>
            <span className='highlightMoney'>1,25,045</span>
            
            <div className='highlightAnalyticsContainer'>
                <span>+8.28%</span> <ArrowUpwardIcon className='arrow'/>
                <span>Since last week</span>
            </div>
        </div>
=======
>>>>>>> 70075ed32ac9b777acb1afee14980a21eba1221a
    </div>
  )
}

export default HighlightInfo