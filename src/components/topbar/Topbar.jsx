import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar-wrapper'>
            <div className='topbar-left'>
                <span>Admin Logo</span>
            </div>
            <div className='topbar-right'>
                <div className='topbarIconContainer'>
                    <NotificationsNoneIcon/>                    
                    <span className='notifications-badge'>5</span>
                </div>
                <div className='topbarIconContainer'>
                    <LanguageIcon/>
                </div>
                <div className='topbarIconContainer'>
                    <SettingsIcon/>                                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar