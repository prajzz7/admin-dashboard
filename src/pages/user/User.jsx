import React, { useEffect } from 'react'
import './User.css'
import { userOrderData } from '../../dummyData'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const User = () => {
    const { userId } = useParams()
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const user = userOrderData.find(user => user.id === parseInt(userId));
        if (user) {
            setCurrentUser(user);
            console.log(user.customer)
        }
        else {
            setCurrentUser(null)
        }
    }, [userId]);


    console.log(currentUser)
    return (
        <div className='user'>
            <div className='userTopContainer'>
                <Link to="/newUser"><button>New User</button></Link>
                <span>Update</span>
            </div>
            <div className='userContainer'>
                <div className='userUpdate'>
                    <form className='userForm'>
                        <label>Username</label>
                        <input type='text' />
                        <label>Age</label>
                        <input type='text' />
                        <label>Gender</label>
                        <div className='radioInput'>                            
                            <input name='gender' value='Male' type='radio' />
                            <label>Male</label>
                            <input name='gender' value='Female' type='radio' />
                            <label>Female</label>
                        </div>
                        <label>Anime</label>
                        <select>
                            <option selected value='' disabled='disabled'>Select Anime</option>
                            <option value={'Naruto'}>Naruto</option>
                            <option value={'OnePiece'}>One Piece</option>
                            <option value={'DeathNote'}>Death Note</option>
                        </select>
                    </form>
                </div>
                <div className='userDetails'>
                    
                        <div className='userDetailsImage'>
                            <img style={{height:'80px',width:'80px', borderRadius:'50%', margin:'0 0px 10px 10px'}} src={currentUser.profileImage} alt='' />
                            
                              <span className='userName'> {currentUser.customer}</span> 
                            
                        </div>
                        
                        <div>
                            <span></span>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default User