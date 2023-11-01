import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ReportIcon from '@mui/icons-material/Report';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3>Dashboard</h3>
                    <ul className='sidebarList'>
                        <NavLink to='' className={({ isActive }) => isActive ? 'sidebarListItemLink linkActive' : 'sidebarListItemLink'}>
                            <li className='sidebarListItem'>
                                <HomeIcon className='sidebarIcon' />
                                Home
                            </li>
                        </NavLink>
                        <li className='sidebarListItem'>
                            <InsightsIcon className='sidebarIcon' />
                            Insights
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUpIcon className='sidebarIcon' />
                            Overview
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <NavLink to='usersList' className={({ isActive }) => isActive ? 'sidebarListItemLink linkActive' : 'sidebarListItemLink'}>
                            <li className='sidebarListItem'>
                                <PeopleAltIcon className='sidebarIcon' />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to='products' className={({ isActive }) => isActive ? 'sidebarListItemLink linkActive' : 'sidebarListItemLink'}>
                            <li className='sidebarListItem'>
                                <ProductionQuantityLimitsIcon className='sidebarIcon' />
                                Products
                            </li>
                        </NavLink>
                        <NavLink to='transactions' className={({ isActive }) => isActive ? 'sidebarListItemLink linkActive' : 'sidebarListItemLink'}>
                        <li className='sidebarListItem'>
                            <PaidIcon className='sidebarIcon' />
                            Transactions
                        </li>
                        </NavLink>
                        <NavLink to='reports' className={({ isActive }) => isActive ? 'sidebarListItemLink linkActive' : 'sidebarListItemLink'}>
                        <li className='sidebarListItem' >
                            <BarChartIcon className='sidebarIcon' />
                            Reports
                        </li>
                        </NavLink>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <EmailIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <FeedbackIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <MessageIcon className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <ManageAccountsIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <AnalyticsIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <ReportIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar