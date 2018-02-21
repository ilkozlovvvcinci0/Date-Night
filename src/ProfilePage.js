import React, { Component } from 'react';
import './ProfilePage.css'; 
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
      this.state = {};
  }

  render() {
    return (
      <div className="profile-main-con">
        <div className="profile-header">
          
          <div className="profile-icon"> 
            <div> Settings </div>
          </div>

          <div className="profile-icon">  
            <FontAwesome
              className='super-crazy-colors'
              name='rocket'
              size='2x'
            /> 
          </div>

          <div className="profile-icon">                       
            <div> Edit Profile </div>
          </div>

        </div>

        <div className="profile-body">

          <div className="img-mes">
            <div id="hiMessage"></div> 
            <div className="profile-pic-container">
              <img src={ require('./img/brady.jpg') } className="profile-pic" id="display-pic" alt="" />
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <input type="submit" value="Get Swiping" className="get-swiping-btn" />
        </div>
      </div>
    );
  }
}

export default ProfilePage;


